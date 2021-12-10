import { Redirect, Link, RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import userState from '@atoms/user';
import clearToken from '@library/storage/clearToken';
import Template from '@common/template';
import styled from 'styled-components';

const Mypage = ({ history }: RouteComponentProps) => {
	const user = useRecoilValue(userState);
	const resetUser = useResetRecoilState(userState);

	if (user === null) {
		return <Redirect to="/login" />;
	}

	const logout = () => {
		clearToken();
		resetUser();

		history.push('/');
	};

	return (
		<>
			<Template
				title="고독한 시식가 마이페이지"
				sub={`${user.nickname}님, 환영합니다!`}
			>
				<StyledButton type="button" onClick={logout}>
					로그아웃하기
				</StyledButton>
				<StyledButton type="button">
					<StyledLink to="/mypage/edit">내 정보 수정하기</StyledLink>
				</StyledButton>
				<StyledButton type="button">
					<StyledLink to="/mypage/withdraw">탈퇴하기</StyledLink>
				</StyledButton>
			</Template>
		</>
	);
};

export default Mypage;

const StyledButton = styled('button')({
	flex: 1,
	width: '100%',
	padding: '20px 20px',
	marginBottom: '20px',
	fontSize: '30px',
	backgroundColor: '#f5f7f7',
	cursor: 'pointer',
	borderRadius: '4px',
	textAlign: 'start',

	'&: hover': {
		backgroundColor: '#FEE500',
	},
});

const StyledLink = styled(Link)({
	color: 'black',
});
