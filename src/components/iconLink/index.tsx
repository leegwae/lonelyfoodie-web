import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IconLinkProps {
	to: string;
	icon?: ReactNode;
}

const IconLink = ({ to, icon }: IconLinkProps) => {
	return <StyledLink to={to}>{icon}</StyledLink>;
};

IconLink.defaultProps = {
	icon: '아이콘',
};

const StyledLink = styled(Link)({
	display: 'flex',
	justifyContent: 'center',
	color: 'black',
	marginBottom: '30px',

	'&:hover, &:focus, &:active': {
		color: '#F55919',
	},
});

export default IconLink;
