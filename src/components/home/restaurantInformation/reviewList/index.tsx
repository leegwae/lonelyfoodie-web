import React from 'react';
import { useRecoilValue } from 'recoil';
import ReviewItem from '@components/home/restaurantInformation/reviewItem';
import { currentReviewListDemoState } from '@atoms/review';

const ReviewList = () => {
	const reviewList = useRecoilValue(currentReviewListDemoState);

	return (
		<>
			{reviewList.map((review) => {
				return <ReviewItem key={review.id} {...review} />;
			})}
		</>
	);
};

export default ReviewList;
