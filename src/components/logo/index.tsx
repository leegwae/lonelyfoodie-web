import React from 'react';
import styled from 'styled-components';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Logo = () => {
	return (
		<StyledWrapper>
			<StyledIcon />
			<Title>고독한 시식가</Title>
		</StyledWrapper>
	);
};

const StyledWrapper = styled('div')({
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '#F55919',
	padding: 10,
	borderRadius: '10px',
	boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
});

const StyledIcon = styled(RestaurantIcon)({
	color: 'white',
	fontSize: 50,
	marginRight: 10,
});

const Title = styled('h1')({
	margin: 0,
	fontSize: '40px',
	fontWeight: 'bold',
	letterSpacing: 0.001,
	color: 'white',
});
export default Logo;
