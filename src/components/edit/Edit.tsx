import { Redirect, RouteComponentProps } from 'react-router-dom';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { userState } from '@atoms/user';
import getToken from '@library/storage/getToken';
import { ReviewCreate } from '@src/types/review';
import { currentRestaurantState } from '@atoms/restaurant';

const Edit = ({ history }: RouteComponentProps) => {
	const [star, setStar] = React.useState<number>(4);
	const [text, setText] = useState<string>('');
	const user = useRecoilValue(userState);
	const currentRestaurant = useRecoilValue(currentRestaurantState);

	if (user === null) {
		return <Redirect to="/login" />;
	}

	const onChagneText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const onSubmitClick = () => {
		if (star === null || !text) {
			alert('내용을 입력해주세요');
			return;
		}

		submitReview();
	};

	const submitReview = async () => {
		const authorization = getToken();

		if (authorization === null) return;

		const review: ReviewCreate = {
			restaurant_id: currentRestaurant.id,
			content: text,
			star,
		};
		const response = await fetch('/api/review', {
			method: 'POST',
			headers: {
				Authorization: authorization,
			},
			body: JSON.stringify({ ...review, title: '타이틀' }),
		});

		if (response.status === 200) alert('성공적으로 리뷰를 작성했습니다');

		history.goBack();
	};

	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
		>
			<div>{currentRestaurant.placeName}</div>
			<Box
				sx={{
					p: 2,
					width: 250,
					height: 250,
					border: '1px dashed grey',
				}}
			>
				<Button
					onClick={() => {
						alert('Upload button Clicked');
					}}
				>
					사진 업로드 하기
				</Button>
			</Box>
			<Rating
				value={star}
				precision={0.5}
				onChange={(event, newValue) => {
					if (newValue !== null) setStar(newValue);
				}}
			/>
			<Box
				component="form"
				sx={{
					'& > :not(style)': {
						m: 3,
						width: '25ch',
						alignItems: 'baseline',
					},
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					value={text}
					onChange={onChagneText}
					id="outlined-basic"
					label="리뷰 작성하기"
					variant="outlined"
					multiline
					rows={5}
				/>
			</Box>
			<Stack spacing={2} direction="row">
				<Button
					variant="contained"
					onClick={() => {
						alert('Save button Clicked');
					}}
				>
					저장
				</Button>
				<Button variant="outlined" onClick={onSubmitClick}>
					취소
				</Button>
			</Stack>
		</Grid>
	);
};

export default Edit;
