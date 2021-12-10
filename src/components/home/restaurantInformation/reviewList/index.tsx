import React from 'react';
import { useRecoilValue } from 'recoil';
import ReviewItem from '@components/home/restaurantInformation/reviewItem';
import { currentReviewListState } from '@atoms/review';

const ReviewList = () => {
	const reviewList = useRecoilValue(currentReviewListState);

	if (reviewList.length === 0) {
		return <div>현재 등록된 리뷰가 없어요.</div>;
	}
	return (
		<>
			{reviewList.map((review) => {
				return <ReviewItem key={review.id} {...review} />;
			})}
		</>
	);
};

export default ReviewList;
