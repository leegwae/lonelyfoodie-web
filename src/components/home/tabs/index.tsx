import React from 'react';
import styled from 'styled-components';
import { Tabs as MUITabs } from '@mui/material';

interface TabsProps {
	children?: React.ReactNode;
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const Tabs = styled((props: TabsProps) => (
	<MUITabs
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))({
	width: '100%',
	'& .MuiTabs-indicator': {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
		width: '100%',
		backgroundColor: '#635ee7',
	},
});

export default Tabs;
