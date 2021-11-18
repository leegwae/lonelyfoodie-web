import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@components/button';
import { Place } from '@library/map/types';
import TabPanel from '@components/tabPanel';
import Item from '@components/information/item';
import RoomIcon from '@mui/icons-material/Room';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Review from '@components/tabPanel/review';
import { Link } from 'react-router-dom';

const Information = (props: Place) => {
	const { place_name, road_address_name, phone, star, review, color, id } =
		props;
	const [value, setValue] = useState<number>(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const writeURL = '';

	return (
		<Wrapper>
			<ColorBox color={color} />
			<Title>{place_name}</Title>
			<StyledContainer>
				<span>⭐{star} / 5</span>
				<span>리뷰 {review}개</span>
			</StyledContainer>
			<TapPanelWrapper>
				<StyledTabs value={value} onChange={handleChange}>
					<StyledTab label="정보" />
					<StyledTab label="리뷰" />
				</StyledTabs>
				<TabPanel value={value} index={0}>
					<Item icon={<RoomIcon />}>{road_address_name}</Item>
					<Item icon={<MapIcon />}>길찾기 바로가기</Item>
					<Item icon={<LocalPhoneIcon />}>{phone}</Item>
					<Footer>
						이 정보는 카카오 지도 API를 기반으로 제공됩니다.
					</Footer>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Link to={writeURL}>리뷰 작성하러 가기</Link>
					<Review
						user_id="testID"
						review_rating={4}
						review_text="음식도 맛있었고 주인분도 친절하셨어요"
						review_date="2021/11/18 16:58"
					/>
					<Review
						user_id="testID"
						review_rating={4}
						review_text="음식도 맛있었고 주인분도 친절하셨어요"
						review_date="2021/11/18 16:58"
					/>
				</TabPanel>
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

interface StyledTabsProps {
	children?: React.ReactNode;
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
	<Tabs
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))({
	width: '100%',
	'& .MuiTabs-indicator': {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
		width: '100%',
		backgroundColor: '#635ee7',
	},
});

interface StyledTabProps {
	label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(() => ({
	flex: 1,
	color: 'black',
	fontSize: '20px',
	'&.Mui-selected': {
		color: '#635ee7',
		fontWeight: 900,
	},
	'&.Mui-focusVisible': {
		// backgroundColor: 'rgba(100, 95, 228, 0.32)',
	},
}));

const Footer = styled('h4')({
	padding: '0px',
	margin: '0px',
	paddingTop: '30px',
	color: 'grey',
});

export default Information;
