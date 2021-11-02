import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TypographyProps {
	children?: ReactNode;
}
const Typography = ({ children }: TypographyProps): JSX.Element => (
	<StyledTypography>{children}</StyledTypography>
);

const StyledTypography = styled.h1`
	font-size: 50px;
	font-weight: 700;
	color: blue;
`;

Typography.defaultProps = {
	children: undefined,
};

export default Typography;
