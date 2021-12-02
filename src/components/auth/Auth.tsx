import React, { useEffect } from 'react';

const Auth = () => {
	const code = new URL(window.location.href).searchParams.get('code');
	// const login = async () => {
	// 	const response = await fetch(`/api/oauth/callback/?code=${code}`);
	// 	const { access_token } = await response.json();

	// 	console.log(access_token);
	// };

	// useEffect(() => {
	// 	login();
	// }, [code]);
	return <div>{code}</div>;
};

export default Auth;
