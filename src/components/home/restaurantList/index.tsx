import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import RestaurantItem from '@home/restaurantItem';
import {
	currentRestaurantListState,
	currentRestaurantKakaoIdState,
} from '@atoms/restaurant';

const RestaurantList = () => {
	const restaurantList = useRecoilValue(currentRestaurantListState);
	const setCurrentRestaurantKakaoId = useSetRecoilState(
		currentRestaurantKakaoIdState
	);

	return (
		<StyledList>
			{restaurantList.map((restaurant) => {
				const { kakaomapId } = restaurant;
				return (
					<RestaurantItem
						key={kakaomapId}
						{...restaurant}
						onClick={() => setCurrentRestaurantKakaoId(kakaomapId)}
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
