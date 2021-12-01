import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import RestaurantItem from '@home/restaurantsItem';
import { Restaurant } from '@src/types/restaurant';
import { restaurantListDemoState } from '@atoms/restaurant';

interface RestaurantListProps {
	onItemClick: (props: Restaurant) => void;
}
const RestaurantList = ({ onItemClick }: RestaurantListProps) => {
	const restaurantList = useRecoilValue(restaurantListDemoState);

	return (
		<StyledList>
			{restaurantList.map((restaurant) => {
				return (
					<RestaurantItem
						key={restaurant.id}
						{...restaurant}
						onClick={() => onItemClick(restaurant)}
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
