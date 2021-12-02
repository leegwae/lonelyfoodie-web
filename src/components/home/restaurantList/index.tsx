import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import RestaurantItem from '@home/restaurantItem';
import {
	restaurantListDemoState,
	currentRestaurantIdState,
} from '@atoms/restaurant';

const RestaurantList = () => {
	const restaurantList = useRecoilValue(restaurantListDemoState);
	const setCurrentRestaurantId = useSetRecoilState(currentRestaurantIdState);

	return (
		<StyledList>
			{restaurantList.map((restaurant) => {
				return (
					<RestaurantItem
						key={restaurant.id}
						{...restaurant}
						onClick={() => setCurrentRestaurantId(restaurant.id)}
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
