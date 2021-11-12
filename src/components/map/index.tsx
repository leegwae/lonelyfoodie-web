import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const options = {
	center: new window.kakao.maps.LatLng(
		37.584044225441346,
		127.05877709833149
	),
	level: 3,
};

const Map = (): JSX.Element => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		new window.kakao.maps.Map(ref.current, options);
	}, []);

	return <StyledContainer id="map" ref={ref} />;
};

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export default Map;
