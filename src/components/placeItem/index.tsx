import React from 'react';
import styled from 'styled-components';
import generateGradient from '@utils/getRandomGradient';

interface PlaceItemProps {
	id: string;
	placeName: string;
	roadAddress: string;
	star: number;
	review: number;
	color: string;
	onClick: () => void;
}

const PlaceItem = ({
	id,
	placeName,
	roadAddress,
	star,
	review,
	color,
	onClick,
}: PlaceItemProps) => {
	return (
		<StyledItem onClick={onClick}>
			<ColorBox color={color} />
			<Wrapper>
				<Title>{placeName}</Title>
				<StyledContainer>
					<span style={{ marginRight: '20px' }}>⭐{star} / 5</span>
					<span>리뷰 {review}개</span>
				</StyledContainer>
				<StyledContainer>{roadAddress}</StyledContainer>
			</Wrapper>
		</StyledItem>
	);
};

const StyledItem = styled('li')({
	display: 'flex',
	flex: 1,
	listStyle: 'none',
	padding: '25px',
	borderBottom: '1px solid #DADADA',
	cursor: 'pointer',

	'&: hover': {
		transition: 'transform 1s',
		background: '#DADADA',
	},
	// '&:last-child': {
	// 	marginBottom: '10px',
	// },
});

const ColorBox = styled.span`
	width: 100px;
	height: 100px;
	border-radius: 5px;
	background: ${(props) => props.color};
`;

const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0px 20px',
});

const Title = styled('h1')({
	width: '100%',
	fontSize: '15px',
});

const StyledContainer = styled('div')({
	display: 'flex',
	width: '100%',
});
export default PlaceItem;
