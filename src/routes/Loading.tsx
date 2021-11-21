import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Loading = () => {
	return (
		<StyledWrapper>
			<CircularProgress />
		</StyledWrapper>
	);
};

const StyledWrapper = styled('div')({
	display: 'flex',
	flex: 1,
	justifyContent: 'cetner',
	alignItems: 'center',
});

export default Loading;
