import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import RoomIcon from '@mui/icons-material/Room';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Restaurant } from '@src/types/restaurant';
import Tabs from '@home/tabs';
import Tab from '@home/tab';
import TabPanel from '@home/tabPanel';
import IconItem from '@home/restaurantInformation/iconItem';
import ReviewList from '@home/restaurantInformation/reviewList';
import {
	currentRestaurantKakaoIdState,
	currentRestaurantState,
} from '@atoms/restaurant';

const RestaurantInformation = () => {
	const currentRestaurant = useRecoilValue(
		currentRestaurantState
	) as Restaurant;
	const resetCurrentRestaurantId = useResetRecoilState(
		currentRestaurantKakaoIdState
	);

	const { name, roadAddressName, phone, averageStar, reviewCount, color } =
		currentRestaurant;
	// ================ 탭 패널 인덱스 =========================
	const [tabIndex, setTabIndex] = useState<number>(0);

	const handleTabChange = (
		event: React.SyntheticEvent,
		newTabIndex: number
	) => {
		setTabIndex(newTabIndex);
	};

	const getInformationTab = () => {
		return (
			<TabPanel value={tabIndex} index={0}>
				<IconItem icon={<RoomIcon />}>{roadAddressName}</IconItem>
				<IconItem icon={<MapIcon />}>길찾기 바로가기</IconItem>
				<IconItem icon={<LocalPhoneIcon />}>{phone}</IconItem>
				<Footer>
					이 정보는 카카오 지도 API를 기반으로 제공됩니다.
				</Footer>
			</TabPanel>
		);
	};

	const getReviewTab = () => {
		return (
			<TabPanel value={tabIndex} index={1}>
				<Link to="/edit">리뷰 작성하러 가기</Link>
				<ReviewList />
			</TabPanel>
		);
	};
	return (
		<Wrapper>
			<ColorBox color={color} onClick={resetCurrentRestaurantId} />
			<Title>{name}</Title>
			<StyledContainer>
				<span>⭐{averageStar} / 5</span>
				<span>리뷰 {reviewCount}개</span>
			</StyledContainer>
			<TapPanelWrapper>
				<Tabs value={tabIndex} onChange={handleTabChange}>
					<Tab label="정보" />
					<Tab label="리뷰" />
				</Tabs>
				{getInformationTab()}
				{getReviewTab()}
			</TapPanelWrapper>
		</Wrapper>
	);
};

const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	alignItems: 'center',
});

const ColorBox = styled.span`
	width: 100%;
	height: 200px;
	background: ${(props) => props.color};

	&:hover {
		transition: transform 1s;
		filter: brightness(70%);
	}
`;

const Title = styled('h1')({
	fontSize: '30px',
});

const StyledContainer = styled('div')({
	display: 'flex',
	width: '40%',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: '20px',
});

const TapPanelWrapper = styled('div')({
	width: '100%',
	flex: 1,
});

const Footer = styled('h4')({
	padding: '0px',
	margin: '0px',
	paddingTop: '30px',
	color: 'grey',
});

export default RestaurantInformation;
