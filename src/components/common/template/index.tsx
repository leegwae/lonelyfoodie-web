import React, { ReactNode } from 'react';
import styled from 'styled-components';
import RestaurantIcon from '@mui/icons-material/Restaurant';

interface TemplateProps {
	title?: string;
	sub?: string;
	children: ReactNode;
}
const Template = ({ title, sub, children }: TemplateProps) => {
	return (
		<>
			<StyledWrapper>
				<StyledInnerWrapper>
					<TitleWrapper>
						<StyledIcon />
						<Title>{title}</Title>
					</TitleWrapper>
					<Typography>{sub}</Typography>
					<ContentWrapper>{children}</ContentWrapper>
				</StyledInnerWrapper>
			</StyledWrapper>
		</>
	);
};

Template.defaultProps = {
	title: '고독한 시식가 서브 페이지',
	sub: '서울시립대 근처 맛집을 찾아보세요',
};

const StyledWrapper = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	// alignItems: 'center',
	paddingTop: '280px',
	flex: 1,
});

const StyledInnerWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '700px',
});

const TitleWrapper = styled('div')({
	display: 'flex',
	alignItems: 'center',
});

const StyledIcon = styled(RestaurantIcon)({
	color: '#F55919',
	fontSize: 50,
	marginRight: 10,
});

const Title = styled('h1')({
	fontSize: '40px',
	fontWeight: 'bold',
	margin: 0,
});

const Typography = styled('h2')({
	fontWeight: 'lighter',
	marginTop: 5,
});

const ContentWrapper = styled('div')({
	paddingTop: '70px',
});

export default Template;
