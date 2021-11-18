import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export interface ReviewProps {
	userID: string;
	reviewRating: number;
	// reviewPhoto는 생략, 사진 자리 Container로 사각형 그림
	reviewText: string;
	reviewDate: string;
	children?: ReactNode;
}

const Review = ({
	userID,
	reviewRating,
	reviewText,
	reviewDate,
}: ReviewProps) => {
	return (
		<StyledItem>
			<li>
				{'작성자: '} {userID}
			</li>
			<li>
				⭐ {reviewRating}/5 {'작성일시: '} {reviewDate}
			</li>
			<Container maxWidth="sm">
				<Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
			</Container>
			<Typography variant="body1" gutterBottom>
				{reviewText}
			</Typography>
		</StyledItem>
	);
};

const StyledItem = styled('li')({
	listStyle: 'none',
	display: 'inline',
	flex: 1,
	alignItems: 'center',
	marginBottom: '25px',
});

export default Review;
