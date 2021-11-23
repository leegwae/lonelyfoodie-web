import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const Edit = () => {
	const [value, setValue] = React.useState<number | null>(2);

	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
		>
			<Box
				component="button"
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
				defaultValue={4.0}
				precision={0.5}
				onChange={(event, newValue) => {
					setValue(newValue);
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
				<Button
					variant="outlined"
					onClick={() => {
						alert('Cancel button Clicked');
					}}
				>
					취소
				</Button>
			</Stack>
		</Grid>
	);
};

export default Edit;
