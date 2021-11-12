import React from 'react';
import styled from 'styled-components';
import Map from '@src/components/map';

const Home = () => {
	return (
		<StyledContainer>
			<Map />
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export default Home;
