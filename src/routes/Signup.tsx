import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
	return (
		<>
			<StyledWrapper>
				<StyledInnerWrapper>
					<Title>고독한 시식가 회원가입하기</Title>
					<Typography>고독한 시식가에 참여하세요</Typography>
					<ButtonWrapper>
						<StyledButton>카카오로 회원가입하기</StyledButton>
						<LinkWrapper>
							계정이 있다면&nbsp;
							<StyledLink to="/login">로그인하세요</StyledLink>
						</LinkWrapper>
					</ButtonWrapper>
				</StyledInnerWrapper>
			</StyledWrapper>
		</>
	);
};

const StyledWrapper = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flex: 1,
});

const StyledInnerWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '700px',
});

const Title = styled('h1')({
	fontSize: '40px',
	fontWeight: 'bold',
	margin: 0,
});

const Typography = styled('h2')({
	fontWeight: 'lighter',
	marginTop: 5,
});

const ButtonWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '70px 0px',
});

const StyledButton = styled('button')({
	padding: '20px 0px',
	width: '400px',
	borderRadius: '10px',
	fontSize: '25px',
	fontWeight: 'bold',
	backgroundColor: '#FEE500',
});

const LinkWrapper = styled('div')({
	display: 'flex',
	marginTop: 10,
});

const StyledLink = styled(Link)({
	textDecoration: 'underline',
});

export default Signup;
