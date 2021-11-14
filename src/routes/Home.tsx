import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Map from '@library/map';
import { SearchResult, Place } from '@library/map/types';
import Input from '@components/input';
import PlaceList from '@components/placeList';
import Information from '@components/information';

const Home = () => {
	const inputRef = useRef<string>('');
	const mapRef = useRef<HTMLDivElement>(null);
	const panelRef = useRef<HTMLDivElement>(null);

	const [keyword, setKeyword] = useState<string>('');
	const [places, setPlaces] = useState<SearchResult[]>([]);
	const [info, setInfo] = useState<Place | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setInfo(null);
		setKeyword(inputRef.current);
	};

	useEffect(() => {
		panelRef?.current?.scrollTo(0, 0);
	}, [places]);

	const handleInformation = (
		id: string,
		star: number,
		color: string,
		review: number
	) => {
		places.forEach((place) => {
			if (place.id === id) {
				setInfo({ ...place, star, color, review });
				return;
			}
		});
	};

	return (
		<>
			<Wrapper>
				<Form onSubmit={handleSubmit}>
					<Input
						id="keyword"
						ref={inputRef}
						placeholder="키워드를 입력하세요"
					/>
					<StyledButton variant="outlined" type="submit">
						검색
					</StyledButton>
				</Form>
				<Panel elevation={2} ref={panelRef}>
					{!info ? (
						<PlaceList
							places={places}
							onItemClick={handleInformation}
						/>
					) : (
						<Information {...info} />
					)}
				</Panel>
			</Wrapper>
			<MapWrapper>
				<Map
					id="map"
					ref={mapRef}
					keyword={keyword}
					handlePlaces={setPlaces}
					handleInformation={handleInformation}
				/>
			</MapWrapper>
		</>
	);
};

const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	position: 'absolute',
	zIndex: 1,
	width: '500px',
	height: '100%',
	padding: '30px',
	boxSizing: 'border-box',
});

const MapWrapper = styled('div')({
	position: 'absolute',
	zIndex: 0,
	width: '100%',
	height: '100%',
});

const Form = styled('form')({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
});

const StyledButton = styled(Button)({
	backgroundColor: 'white',
	'&:hover': {
		backgroundColor: 'black',
		boxShadow: 'none',
	},
});

const Panel = styled(Paper)({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	overflowY: 'scroll',

	'&::-webkit-scrollbar': {
		display: 'none',
	},
});

export default Home;
