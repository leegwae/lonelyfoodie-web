import { atom, selector, selectorFamily } from 'recoil';
import { SearchResult } from '@library/map/types';
import { Restaurant } from '@src/types/restaurant';
import getRandomStar from '@utils/getRandomStar';
import getRandomInt from '@utils/getRandomInt';
import generateGradient from '@utils/getRandomGradient';
import { searchResultListState } from '@library/map/atoms/searchResults';

/*
TODO: 현재 음식점 정보 가져오는 API는 리뷰 개수, 평균 별점 안 가져옴
*/
// kakao map id로 음식점 정보 가져오기
const restaurantKakaoQuery = selectorFamily({
	key: 'RestaurantQuery',
	get: (kakaomapId: string) => async () => {
		const response = await fetch(
			`/api/restaurants/?page=1&per_page=20&kakaomap_id=${kakaomapId}`
		);

		if (response.status === 404) return undefined;

		const data = await response.json();

		return data;
	},
});

/*
TODO: 현재 kakao id로 음식점 정보 가져오는 API가 없으므로
임시 생성한 아이디를 파라미터로 전달
*/
// 카카오 지도 API로 탐색한 장소들에 대하여, 각각 음식점 정보 가져오기
const restaurantListKaKaoQuery = selectorFamily<Restaurant[], SearchResult[]>({
	key: 'RestaurantListQuery',
	get:
		(searchResultList) =>
		async ({ get }) => {
			const restaurantList = searchResultList.map((kakaoData) => {
				const kakaomapId = kakaoData.id;
				const restaurantInfo = get(restaurantKakaoQuery(kakaomapId));
				return {
					id: restaurantInfo.id,
					kakaomapId,
					name: kakaoData.placeName,
					roadAddressName: kakaoData.roadAddressName,
					phone: kakaoData.phone,
					longitude: kakaoData.x,
					latitude: kakaoData.y,
					color: generateGradient(),
					averageStar: getRandomStar(),
					// averageStar: restaurantInfo.averageStar,
					// reviewCount: restaurantInfo.reviewCount,
					reviewCount: getRandomInt(0, 100),
				};
			});

			return restaurantList;
		},
});

// 현재 음식점 정보 리스트: 현재 카카오 지도 API로 탐색한 음식점 리스트에 대하여, 각각 음식점 정보 가져오기
export const currentRestaurantListState = selector<Restaurant[]>({
	key: 'CurrentRestaurantList',
	get: async ({ get }) =>
		get(restaurantListKaKaoQuery(get(searchResultListState))),
});

// 현재 음식점 정보 리스트에 요소가 있는가
export const hasRestaurantListState = selector<boolean>({
	key: 'hasRestaurantList',
	get: ({ get }) => get(currentRestaurantListState).length !== 0,
});

// 현재 음식점의 kakao map id
export const currentRestaurantKakaoIdState = atom<string>({
	key: 'CurrentRestaurantKakaoId',
	default: '',
});

// 현재 음식점의 음식점 정보
export const currentRestaurantState = selector<Restaurant | undefined>({
	key: 'CurrentRestaurant',
	get: ({ get }) => {
		const currentRestaurantKakaoId = get(currentRestaurantKakaoIdState);
		const currentRestaurantList = get(currentRestaurantListState);
		return currentRestaurantList.find(
			(restaurant) => restaurant.kakaomapId === currentRestaurantKakaoId
		);
	},
});

export const currentRestaurantIdState = selector<string>({
	key: 'CurrentRestaurantId',
	get: ({ get }) => get(currentRestaurantState)?.id || '',
});

// 현재 음식점 정보가 있는가
export const hasCurrentRestaurantState = selector<boolean>({
	key: 'hasCurrentRestaurant',
	get: ({ get }) => get(currentRestaurantState) !== undefined,
});
