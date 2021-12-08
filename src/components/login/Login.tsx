import React from 'react';
import styled from 'styled-components';
import Template from '@common/template';

const Login = () => {
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	return (
		<>
			<Template
				title="고독한 시식가 로그인"
				sub="서울시립대 근처 맛집을 찾아보세요"
			>
				<StyledWrapper>
					<StyledButton href={KAKAO_AUTH_URL}>
						카카오로 로그인하기
					</StyledButton>
				</StyledWrapper>
			</Template>
		</>
	);
};

const StyledWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});

const StyledButton = styled('a')({
	padding: '20px 0px',
	width: '400px',
	borderRadius: '10px',
	fontSize: '25px',
	textDecoration: 'none',
	color: 'black',
	textAlign: 'center',
	fontWeight: 'bold',
	backgroundColor: '#FEE500',
});

export default Login;
