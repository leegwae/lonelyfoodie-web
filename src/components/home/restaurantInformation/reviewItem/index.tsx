import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Review } from '@src/types/review';

const RiviewItem = (props: Review) => {
	const { writerId, star, updatedAt, content, colors } = props;
	return (
		<StyledItem>
			<li>
				{'작성자: '} {writerId}
			</li>
			<li>
				⭐ {star}/5 {'작성일시: '} {updatedAt}
			</li>
			{/* <Container maxWidth="sm">
				<Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
			</Container> */}
			<Typography variant="body1" gutterBottom>
				{content}
			</Typography>
		</StyledItem>
	);
};

const StyledItem = styled('ul')({
	listStyle: 'none',
	display: 'inline',
	flex: 1,
	alignItems: 'center',
	marginBottom: '25px',
});

export default RiviewItem;
