import { atom, selector, selectorFamily } from 'recoil';
import { SearchResult } from '@library/map/types';
import { Restaurant } from '@src/types/restaurant';
import generateGradient from '@utils/getRandomGradient';
import { searchResultListState } from '@library/map/atoms/searchResults';

// kakao map id로 음식점 정보 가져오기
const restaurantKakaoQuery = selectorFamily({
	key: 'RestaurantQuery',
	get: (kakaomapId: string) => async () => {
		const response = await fetch(`/api/restaurants/kakao/${kakaomapId}`);

		if (response.status === 404) return undefined;

		const data = await response.json();

		return data;
	},
});

// 카카오 지도 API로 탐색한 장소들에 대하여, 각각 음식점 정보 가져오기
const restaurantListKaKaoQuery = selectorFamily<Restaurant[], SearchResult[]>({
	key: 'RestaurantListQuery',
	get:
		(searchResultList) =>
		async ({ get }) => {
			const restaurantList = searchResultList.map((kakaoData) => {
				const kakaomapId = kakaoData.id;
				const { restaurant, review_count, avg_star_rate } = get(
					restaurantKakaoQuery(kakaomapId)
				);
				return {
					kakaomapId,
					name: kakaoData.placeName,
					roadAddressName: kakaoData.roadAddressName,
					phone: kakaoData.phone,
					longitude: kakaoData.x,
					latitude: kakaoData.y,
					color: generateGradient(),
					// averageStar: getRandomStar(),
					// reviewCount: getRandomInt(0, 100),
					id: restaurant.id,
					averageStar: avg_star_rate || 0,
					reviewCount: review_count || 0,
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
