import { atom, selector } from 'recoil';
import { Restaurant } from '@src/types/restaurant';
import getRandomStar from '@utils/getRandomStar';
import getRandomInt from '@utils/getRandomInt';
import generateGradient from '@utils/getRandomGradient';
import { searchResultListState } from '@library/map/atoms/searchResults';

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

export const restaurantListState = selector<Restaurant[]>({
	key: 'restaurantList',
	get: ({ get }) => get(restaurantListDemoState),
});

export const hasRestaurantListState = selector<boolean>({
	key: 'hasRestaurantList',
	get: ({ get }) => get(restaurantListState).length !== 0,
});

export const currentRestaurantIdState = atom<string>({
	key: 'currentRestaurantId',
	default: '',
});

export const currentRestaurantState = selector<Restaurant | undefined>({
	key: 'currentRestaurant',
	get: ({ get }) => {
		const currentRestaurantId = get(currentRestaurantIdState);
		const currentRestaurantList = get(restaurantListState);
		return currentRestaurantList.find(
			(restaurant) => restaurant.id === currentRestaurantId
		);
	},
});

export const hasCurrentRestaurantState = selector<boolean>({
	key: 'hasCurrentRestaurant',
	get: ({ get }) => get(currentRestaurantState) !== undefined,
});
