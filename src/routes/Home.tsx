import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { SearchResult, Restaurant } from '@library/map/types';
import Map from '@library/map';
import Input from '@components/input';
import PlaceList from '@components/placeList';
import Information from '@components/information';
import Logo from '@components/logo';

const Home = () => {
	const inputRef = useRef<string>('');
	const panelRef = useRef<HTMLDivElement>(null);

	const [keyword, setKeyword] = useState<string>('');
	const [results, setResults] = useState<SearchResult[] | null>(null);
	const [information, setInformation] = useState<Restaurant | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setInformation(null);
		setKeyword(inputRef.current);
	};

	useEffect(() => {
		panelRef?.current?.scrollTo(0, 0);
	}, [results]);

	const handleInformation = (props: Restaurant) => {
		setInformation(props);
	};

	return (
		<>
			<MapWrapper>
				<Map
					keyword={keyword}
					setResults={setResults}
					setInformation={setInformation}
				/>
				<FormWrapper>
					<Form onSubmit={handleSubmit}>
						<Input
							id="keyword"
							ref={inputRef}
							placeholder="키워드를 검색하여 시립대 맛집을 찾아보세요"
						/>
					</Form>
					<PanelWrapper>
						{results && (
							<Panel>
								<PlaceList
									places={results}
									onItemClick={handleInformation}
								/>
							</Panel>
						)}
						{information && (
							<Panel>
								<Information
									restaurant={information}
									onGoBackClick={() => setInformation(null)}
								/>
							</Panel>
						)}
					</PanelWrapper>
				</FormWrapper>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
			</MapWrapper>
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

const PanelWrapper = styled('div')({
	position: 'relative',
	flex: 1,
});

const Panel = styled(Paper)({
	position: 'absolute',
	zIndex: 1,
	top: 0,
	left: 0,
	bottom: 0,
	width: '100%',
	height: '100%',

	overflowY: 'scroll',
	'&::-webkit-scrollbar': {
		display: 'none',
	},
});

const LogoWrapper = styled('div')({
	position: 'absolute',
	zIndex: 1,
	bottom: 30,
	right: 30,
});

export default Home;
