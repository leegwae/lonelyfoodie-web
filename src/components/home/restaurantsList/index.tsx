import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import RestaurantItem from '@home/restaurantsItem';
import {
	restaurantListDemoState,
	currentRestaurantState,
} from '@atoms/restaurant';

const RestaurantList = () => {
	const restaurantList = useRecoilValue(restaurantListDemoState);
	const setCurrentRestaurant = useSetRecoilState(currentRestaurantState);

	return (
		<StyledList>
			{restaurantList.map((restaurant) => {
				return (
					<RestaurantItem
						key={restaurant.id}
						{...restaurant}
						onClick={() => setCurrentRestaurant(restaurant)}
					/>
				);
			})}
		</StyledList>
	);
};
RestaurantList.displayName = 'RestaurantList';

const StyledList = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
});

export default RestaurantList;
