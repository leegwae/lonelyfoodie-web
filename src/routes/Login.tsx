import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Template from '@components/template';

const REST_API_KEY = '5fa3dc29df30da6309f4ed7804685533';
const REDIRECT_URI = 'http://localhost:8080/oauth';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Login = () => {
	return (
		<>
			<Template
				title="고독한 시식가 시작하기"
				sub="서울시립대 근처 맛집을 찾아보세요"
			>
				<StyledWrapper>
					<StyledButton href={KAKAO_AUTH_URL}>
						카카오로 로그인하기
					</StyledButton>
					{/* <LinkWrapper>
						계정이 없다면&nbsp;
						<StyledLink to="/signup">회원가입하세요</StyledLink>
					</LinkWrapper> */}
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
	fontWeight: 'bold',
	backgroundColor: '#FEE500',

	textDecoration: 'none',
	color: 'black',
	textAlign: 'center',
});

const LinkWrapper = styled('div')({
	display: 'flex',
	marginTop: 10,
});

const StyledLink = styled(Link)({
	textDecoration: 'underline',
});

export default Login;
