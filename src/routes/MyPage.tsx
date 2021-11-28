import React from 'react';
import { Redirect } from 'react-router-dom';

interface MyPageProps {
	authorization: boolean;
	setAuthorization: () => void;
}

const MyPage = ({ authorization, setAuthorization }: MyPageProps) => {
	if (!authorization) return <Redirect to="/login" />;

	return (
		<button type="button" onClick={setAuthorization}>
			로그아웃
		</button>
	);
};

export default MyPage;
