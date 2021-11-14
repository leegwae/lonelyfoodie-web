import React from 'react';
import styled from 'styled-components';
import PlaceItem from '@components/placeItem';
import { SearchResult } from '@library/map/types';
import getRandomStar from '@utils/getRandomStar';
import getRandomInt from '@utils/getRandomInt';
import generateGradient from '@utils/getRandomGradient';

interface PlaceListProps {
	places: SearchResult[];
	onItemClick: (
		id: string,
		star: number,
		color: string,
		review: number
	) => void;
}
const PlaceList = ({ places, onItemClick }: PlaceListProps) => {
	return (
		<StyledList>
			{places.map((place) => {
				const color = generateGradient();
				const star = getRandomStar();
				const review = getRandomInt(0, 100);

				return (
					<PlaceItem
						key={place.id}
						id={place.id}
						placeName={place.place_name}
						roadAddress={place.road_address_name}
						color={color}
						star={star}
						review={review}
						onClick={() =>
							onItemClick(place.id, star, color, review)
						}
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
