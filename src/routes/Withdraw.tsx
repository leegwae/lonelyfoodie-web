import React from 'react';
import styled from 'styled-components';
import Template from '@components/template';
import LabelItem from '@components/labelItem';

const Withdraw = () => {
	return (
		<Template
			title="고독한 시식가 탈퇴"
			sub="귤농사 님, 떠나신다니 아쉬워요"
		>
			<StyledWrapper>
				<div>
					<LabelItem label="아이디">abc1234</LabelItem>
					<LabelItem label="비밀번호">
						<StyledInput type="password" />
					</LabelItem>
				</div>
				<StyledButton>고독한 시식가 탈퇴하기</StyledButton>
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

const StyledInput = styled('input')({
	margin: 0,
});

const StyledButton = styled('button')({
	height: '50px',
	width: '400px',
	borderRadius: '10px',
	fontSize: '25px',
	fontWeight: 'bold',
	color: 'white',
	backgroundColor: '#F55919',
});

export default Withdraw;
