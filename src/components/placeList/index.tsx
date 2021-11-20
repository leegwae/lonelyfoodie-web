import React from 'react';
import styled from 'styled-components';
import PlaceItem from '@components/placeItem';
import { SearchResult, Restaurant } from '@library/map/types';
import getRandomStar from '@utils/getRandomStar';
import getRandomInt from '@utils/getRandomInt';
import generateGradient from '@utils/getRandomGradient';

interface PlaceListProps {
	places: SearchResult[];
	onItemClick: (props: Restaurant) => void;
}
const PlaceList = ({ places, onItemClick }: PlaceListProps) => {
	return (
		<StyledList>
			{places.map((place) => {
				const color = generateGradient();
				const star = getRandomStar();
				const review = getRandomInt(0, 100);

				const information = { ...place, color, star, review };
				return (
					<PlaceItem
						key={place.id}
						{...information}
						onClick={() => onItemClick(information)}
					/>
				);
			})}
		</StyledList>
	);
};
PlaceList.displayName = 'PlaceList';

const StyledList = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
});

export default PlaceList;
