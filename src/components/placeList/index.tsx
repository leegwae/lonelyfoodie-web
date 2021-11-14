import React from 'react';
import styled from 'styled-components';
import PlaceItem from '@components/placeItem';
import { SearchResult } from '@library/map/types';
import getRandomStar from '@utils/getRandomStar';
import getRandomInt from '@utils/getRandomInt';

interface PlaceListProps {
	places: SearchResult[];
}
const PlaceList = ({ places }: PlaceListProps) => {
	return (
		<StyledList>
			{places.map((place) => (
				<PlaceItem
					key={place.id}
					placeName={place.place_name}
					roadAddress={place.road_address_name}
					star={getRandomStar()}
					review={getRandomInt(0, 100)}
				/>
			))}
		</StyledList>
	);
};

const StyledList = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	boxSizing: 'border-box',
});

export default PlaceList;
