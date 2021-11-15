import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
	children: string;
	onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled('button')({
	fontSize: '10px',
	color: 'red',
});

export default Button;
