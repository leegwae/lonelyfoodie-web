import React from 'react';
import { useRecoilValue } from 'recoil';
import RestaurantReviewItem from '@components/home/restaurantInformation/reviewItem';
import { currentReviewListDemoState } from '@atoms/review';

const ReviewList = () => {
	const reviewList = useRecoilValue(currentReviewListDemoState);

	return (
		<>
			{reviewList.map((review) => {
				return <RestaurantReviewItem key={review.id} {...review} />;
			})}
		</>
	);
};

export default ReviewList;
