import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { SearchResult } from '@library/map/types';
import Map from '@library/map';
import Input from '@components/input';

const Home = () => {
	const inputRef = useRef<string>('');
	const panelRef = useRef<HTMLDivElement>(null);
	const [results, setResults] = useState<SearchResult[]>([]);

	const [keyword, setKeyword] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// setInfo(null);
		setKeyword(inputRef.current);
	};

	// useEffect(() => {
	// 	panelRef?.current?.scrollTo(0, 0);
	// }, [places]);

	return (
		<>
			<MapWrapper>
				<Map keyword={keyword} setResults={setResults} />
				<FormWrapper>
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
						{results.map((place) => {
							console.log(place.placeName);
							return place.Name;
						})}
					</Panel>
				</FormWrapper>
			</MapWrapper>
			{/* <MapWrapper>
				<Map
					id="map"
					ref={mapRef}
					keyword={keyword}
					handlePlaces={setPlaces}
					handleInformation={handleInformation}
				/>
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
			</MapWrapper> */}
		</>
	);
};

const MapWrapper = styled('div')({
	position: 'relative',
	flex: 1,
});

const FormWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	position: 'absolute',
	zIndex: 1,
	top: 0,
	left: 0,
	bottom: 0,
	width: '500px',
	height: '100%',
	padding: '30px',
});

const Form = styled('form')({
	display: 'flex',
	width: '100%',
	marginBottom: '20px',
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
