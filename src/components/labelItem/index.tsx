import React from 'react';
import styled from 'styled-components';

interface LabelItemProps {
	label: string;
	children: React.ReactNode;
}

const LabelItem = ({ label, children }: LabelItemProps) => {
	return (
		<StyledItem>
			<Label>{label}</Label>
			<Wrapper>{children}</Wrapper>
		</StyledItem>
	);
};

const StyledItem = styled('li')({
	listStyle: 'none',
	display: 'flex',
	alignItems: 'center',
	flex: 1,
	marginBottom: '20px',
});

const Label = styled('h1')({
	fontSize: 25,
	margin: 0,
	marginRight: 30,
	width: '200px',
});

const Wrapper = styled('div')({
	display: 'flex',
	alignItems: 'center',
});

export default LabelItem;
