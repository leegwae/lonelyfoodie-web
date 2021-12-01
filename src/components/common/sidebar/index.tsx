import React from 'react';
import styled from 'styled-components';

interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
	return <StyledSidebar>{children}</StyledSidebar>;
};

const StyledSidebar = styled('div')({
	zIndex: 10,
	display: 'flex',
	flexDirection: 'column',
	width: '70px',
	height: '100%',
	padding: '40px 0px',
	boxShadow: 'rgba(17, 17, 26, 0.1) 3px 3px 4px 1px',

	backgroundColor: '#F4F0EF',
});

export default Sidebar;
