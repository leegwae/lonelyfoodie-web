import { RouteComponentProps } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import userState from '@atoms/user';
import { User } from '@src/types/user';
import setToken from '@library/storage/setToken';
import getToken from '@library/storage/getToken';
import getCamelCasedObject from '@utils/getCamelCasedObject';

const Auth = ({ history }: RouteComponentProps) => {
	const code = new URL(window.location.href).searchParams.get('code');
	const setUser = useSetRecoilState(userState);

	const login = async () => {
		const response = await fetch(`/api/oauth/callback/?code=${code}`);
		const { access_token } = await response.json();
		setToken(access_token);
		console.log(access_token);
		const rawData = await fetchUser();
		const camelCasedData = getCamelCasedObject(rawData) as User;
		setUser(camelCasedData);

		history.push('/');
	};

	const fetchUser = async () => {
		const authorization = getToken();

		if (authorization === null) return null;

		const response = await fetch('/api/users/', {
			headers: {
				Authorization: authorization,
			},
		});

		if (response.status !== 200) return null;

		const data = await response.json();
		return data;
	};

	useEffect(() => {
		login();
	}, [code]);
	return <></>;
};

export default Auth;
