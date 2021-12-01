import { atom, selector } from 'recoil';
import { Restaurant } from '@src/types/restaurant';
import getRandomStar from '@utils/getRandomStar';
import getRandomInt from '@utils/getRandomInt';
import generateGradient from '@utils/getRandomGradient';
import { searchResultListState } from '@atoms/searchResult';

export const restaurantListState = atom<Restaurant[]>({
	key: 'restaurantList',
	default: [],
});

export const currentRestaurantState = selector({
	key: 'currentRestaurant',
	get: async () => {
		const response = await fetch(
			'/api/restaurants/977f2b8b-ad2e-4202-9436-bbab949c352f'
		);
		const data = response.json();

		return data;
	},
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
