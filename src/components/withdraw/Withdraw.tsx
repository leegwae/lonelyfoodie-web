import { RouteComponentProps } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import React, { useState } from 'react';
import styled from 'styled-components';
import Template from '@common/template';
import LabelItem from '@withdraw/labelItem';
import userState from '@atoms/user';
import getToken from '@library/storage/getToken';
import clearToken from '@library/storage/clearToken';

const Withdraw = ({ history }: RouteComponentProps) => {
	const user = useRecoilValue(userState);
	const resetUser = useResetRecoilState(userState);

	const withdraw = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const auth = getToken();

		if (auth === null) return;

		const response = await fetch(`/api/users/${user?.id}`, {
			method: 'DELETE',
			headers: {
				Authorization: JSON.stringify(auth),
			},
		});

		if (response.status === 204) {
			alert('성공적으로 탈퇴했습니다.');
			clearToken();
			resetUser();
		} else alert(`${response.status}: ${response.statusText}`);

		history.push('/');
	};

	return (
		<Template
			title="고독한 시식가 탈퇴"
			sub={`${user?.nickname || '이름 없음'}님, 떠나신다니 아쉬워요`}
		>
			<StyledWrapper>
				<div>
					<LabelItem label="이메일">{user?.email}</LabelItem>
				</div>
				<StyledButton onClick={withdraw}>
					고독한 시식가 탈퇴하기
				</StyledButton>
			</StyledWrapper>
		</Template>
	);
};

const StyledWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '0px 20px',
});

const StyledButton = styled('button')({
	height: '50px',
	width: '400px',
	borderRadius: '10px',
	fontSize: '25px',
	fontWeight: 'bold',
	color: 'white',
	backgroundColor: '#ffba9e',

	'&: hover': {
		backgroundColor: '#F55919',
	},
});

export default Withdraw;
