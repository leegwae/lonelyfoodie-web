import { atom, selector } from 'recoil';
import { Restaurant } from '@src/types/restaurant';
import getRandomStar from '@utils/getRandomStar';
import getRandomInt from '@utils/getRandomInt';
import generateGradient from '@utils/getRandomGradient';
import { searchResultListState } from '@library/map/atoms/searchResult';

export const currentRestaurantState = atom<Restaurant | null>({
	key: 'currentRestaurant',
	default: null,
});

export const hasCurrentRestaurantState = selector<boolean>({
	key: 'hasCurrentRestaurant',
	get: ({ get }) => get(currentRestaurantState) !== null,
});

export const restaurantListState = atom<Restaurant[]>({
	key: 'restaurantList',
	default: [],
});

export const restaurantListDemoState = selector<Restaurant[]>({
	key: 'restaurantListDemo',
	get: ({ get }) => {
		const searchResultList = get(searchResultListState);
		const restaurantListDemo = searchResultList.map((raw) => ({
			...raw,
			color: generateGradient(),
			star: getRandomStar(),
			review: getRandomInt(0, 100),
		}));

		return restaurantListDemo;
	},
});

export const hasRestaurantListState = selector<boolean>({
	key: 'hasRestaurantList',
	get: ({ get }) => get(restaurantListDemoState).length !== 0,
});
