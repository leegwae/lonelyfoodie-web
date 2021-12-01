import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IconItemProps {
	icon: JSX.Element;
	children?: ReactNode;
}

const IconItem = ({ icon, children }: IconItemProps) => {
	return (
		<StyledItem>
			<IconWrapper>{icon}</IconWrapper>
			<StyledContainer>{children}</StyledContainer>
		</StyledItem>
	);
};

IconItem.defaultProps = {
	children: <div>데이터가 없어요</div>,
};

const StyledItem = styled('li')({
	listStyle: 'none',
	display: 'flex',
	flex: 1,
	alignItems: 'center',
	marginBottom: '25px',
});

const IconWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	marginRight: '10px',
});

const StyledContainer = styled('div')({
	fontSize: '20px',
});
export default IconItem;
