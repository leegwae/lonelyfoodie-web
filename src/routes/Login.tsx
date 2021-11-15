import React from 'react';
import Button from '@components/button';

const Login = () => {
	const handleClick = () => console.log('HELLO WORLD!');

	return <Button onClick={handleClick}>나를 클릭하세요</Button>;
};

export default Login;
