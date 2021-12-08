import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Map from '@library/map';
import KeywordInput from '@home/keywordInput';
import RestaurantList from '@home/restaurantList';
import RestaurantInformation from '@home/restaurantInformation';
import Logo from '@home/logo';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import {
	currentRestaurantListState,
	hasRestaurantListState,
	hasCurrentRestaurantState,
	currentRestaurantKakaoIdState,
} from '@atoms/restaurant';
import currentPlaceState from '@library/map/atoms/currentPlace';

const Home = () => {
	// =========== 키워드 검색 ===============================
	const inputRef = useRef<string>('');
	const [keyword, setKeyword] = useState<string>('');

	// ========== 패널 스크롤을 위한 ref ======================
	const panelRef = useRef<HTMLDivElement>(null);

	// ========== 지도에서 클릭된 음식점 ======================
	const currentClickedPlace = useRecoilValue(currentPlaceState);

	// ========= 음식점 리스트 =================
	const restaurantList = useRecoilValue(currentRestaurantListState);
	const hasRestaurantList = useRecoilValue(hasRestaurantListState);

	// ========= 하나의 음식점 정보 ===========
	const hasCurrentRestaurant = useRecoilValue(hasCurrentRestaurantState);
	const resetCurrentRestaurantKakaoId = useResetRecoilState(
		currentRestaurantKakaoIdState
	);
	const setCurrentRestaurantId = useSetRecoilState(
		currentRestaurantKakaoIdState
	);

	// 키워드 검색 시
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// 현재 패널에 띄워진 음식점 정보를 초기화
		resetCurrentRestaurantKakaoId();
		// 키워드를 사용자의 입력값으로 설정
		setKeyword(inputRef.current);
	};

	// 새로운 키워드로 검색하여 검색 결과가 변하면
	useEffect(() => {
		// 스크롤을 상단으로 올린다.
		panelRef?.current?.scrollTo(0, 0);
	}, [restaurantList]);

	// 마커 클릭되면 현재 음식점을 해당 마커의 음식점으로 설정
	useEffect(() => {
		if (currentClickedPlace) {
			setCurrentRestaurantId(currentClickedPlace.id);
		}
	}, [currentClickedPlace]);

	return (
		<>
			<MapWrapper>
				<Map keyword={keyword} />
				<FormWrapper>
					<Form onSubmit={handleSubmit}>
						<KeywordInput
							id="keyword"
							ref={inputRef}
							placeholder="키워드를 검색하여 시립대 맛집을 찾아보세요"
						/>
					</Form>
					<PanelWrapper>
						{hasRestaurantList && (
							<Panel ref={panelRef}>
								<RestaurantList />
							</Panel>
						)}
						{hasCurrentRestaurant && (
							<Panel>
								<RestaurantInformation />
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
