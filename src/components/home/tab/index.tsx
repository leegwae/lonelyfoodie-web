import React from 'react';
import styled from 'styled-components';
import { Tab as MUITab } from '@mui/material';

interface TabProps {
	label: string;
}

const Tab = styled((props: TabProps) => <MUITab disableRipple {...props} />)(
	() => ({
		flex: 1,
		color: 'black',
		fontSize: '20px',
		'&.Mui-selected': {
			color: '#635ee7',
			fontWeight: 900,
		},
		'&.Mui-focusVisible': {
			// backgroundColor: 'rgba(100, 95, 228, 0.32)',
		},
	})
);

export default Tab;
