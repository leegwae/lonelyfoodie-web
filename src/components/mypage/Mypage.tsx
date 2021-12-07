import { Redirect, RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '@atoms/user';
import clearToken from '@library/storage/clearToken';

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

	console.log(user);
	return (
		<div>
			{user.nickname}님, 로그아웃하시겠어요?
			<button type="button" onClick={logout}>
				로그아웃
			</button>
		</div>
	);
};

export default Mypage;
