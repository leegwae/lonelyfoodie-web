import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Template from '@common/template';

const Signup = () => {
	return (
		<>
			<Template
				title="고독한 시식가 회원가입"
				sub="고독한 시식가에 참여하세요"
			>
				<StyledWrapper>
					<StyledButton>카카오로 회원가입하기</StyledButton>
					<LinkWrapper>
						계정이 있다면&nbsp;
						<StyledLink to="/login">로그인하세요</StyledLink>
					</LinkWrapper>
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
