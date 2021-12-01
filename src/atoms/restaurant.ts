import { atom, selector } from 'recoil';
import { Restaurant } from '@src/types/restaurant';

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
