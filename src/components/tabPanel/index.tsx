import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TabPanelProps {
	children?: ReactNode;
	index: number;
	value: number;
}

const TabPanel = ({ children, index, value }: TabPanelProps) => {
	return <StyledTabPanel>{value === index && children}</StyledTabPanel>;
};

TabPanel.defaultProps = {
	children: <div>데이터가 없어요.</div>,
};

const StyledTabPanel = styled('div')({
	flex: 1,
	flexDirection: 'column',
	padding: '30px',
});

export default TabPanel;
