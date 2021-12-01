import React from 'react';
import styled from 'styled-components';
import RestaurantItem from '@home/restaurantsItem';
import { SearchResult, Restaurant } from '@library/map/types';
import getRandomStar from '@utils/getRandomStar';
import getRandomInt from '@utils/getRandomInt';
import generateGradient from '@utils/getRandomGradient';

interface RestaurantListProps {
	restaurants: SearchResult[];
	onItemClick: (props: Restaurant) => void;
}
const RestaurantList = ({ restaurants, onItemClick }: RestaurantListProps) => {
	return (
		<StyledList>
			{restaurants.map((restaurant) => {
				const color = generateGradient();
				const star = getRandomStar();
				const review = getRandomInt(0, 100);

				const information = { ...restaurant, color, star, review };
				return (
					<RestaurantItem
						key={restaurant.id}
						{...information}
						onClick={() => onItemClick(information)}
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
