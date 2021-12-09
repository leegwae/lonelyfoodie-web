import React, { useState, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import RestaurantReviewItem from '@components/home/restaurantInformation/reviewItem';
import { currentReviewListDemoState } from '@atoms/review';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const MyReviewEdit = () => {
	const reviewList = useRecoilValue(currentReviewListDemoState);
	const reviewCount = reviewList.length;
	const [checkedList, setCheckedList] = useState([] as any);

	const onCheckedAll = useCallback(
		(checked) => {
			if (checked) {
				const checkedListArray: string[] = [];

				reviewList.forEach((review) =>
					checkedListArray.push(review.id)
				);

				setCheckedList(checkedListArray);
			} else {
				setCheckedList([]);
			}
		},
		[reviewList]
	);

	const onCheckedElement = useCallback(
		(checked: boolean, reviewID: string) => {
			if (checked) {
				setCheckedList([...checkedList, reviewID]);
			} else {
				setCheckedList(
					checkedList.filter((el: string) => el !== reviewID)
				);
			}
		},
		[checkedList]
	);

	const rList = reviewList.map((review) => {
		return (
			<>
				<Grid item xs={6}>
					<input
						type="checkbox"
						key={review.id}
						onChange={(e) =>
							onCheckedElement(e.target.checked, review.id)
						}
						checked={!!checkedList.includes(review.id)}
					/>
					<RestaurantReviewItem key={review.id} {...review} />
				</Grid>
				<Grid item xs={3}>
					<Button variant="contained">수정</Button>{' '}
					<Button variant="outlined">삭제</Button>
				</Grid>
			</>
		);
	});

	return (
		<Container maxWidth="sm">
			<h1>마이페이지-내가 쓴 리뷰</h1>
			전체 선택{' '}
			<input
				type="checkbox"
				onChange={(e) => onCheckedAll(e.target.checked)}
				checked={
					checkedList.length === 0
						? false
						: checkedList.length === reviewCount
				}
			/>
			<Button variant="outlined">삭제</Button>
			<p>총 {reviewCount}개의 리뷰를 썼어요.</p>
			<br />
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					{rList}
				</Grid>
			</Box>
		</Container>
	);
};

export default MyReviewEdit;
