/* eslint-disable camelcase */
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ReviewInfo {
	user_id: string;
	review_rating: number;
	// review_photo는 생략, 사진 자리 div로 사각형 그릴 예정
	review_text: string;
	review_date: string;
	children?: ReactNode;
}

const Review = ({
	user_id,
	review_rating,
	review_text,
	review_date,
}: ReviewInfo) => {
	return (
		<StyledItem>
			<li>
				{'작성자: '} {user_id}
			</li>
			<li>
				⭐ {review_rating}/5 {review_date}
			</li>
			<StyledContainer>{review_text}</StyledContainer>
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

const StyledContainer = styled('div')({
	fontSize: '18px',
	alignItems: 'down',
});

export default Review;
