import React, {
	useEffect,
	useRef,
	forwardRef,
	useImperativeHandle,
	HTMLAttributes,
} from 'react';
import styled from 'styled-components';
import { SearchResult } from '@library/map/types';
import { INIT_OPTIONS, SEARCH_OPTIONS } from '@library/map/const';

interface StyleProps {
	[key: string]: string;
}

const { kakao } = window;

interface MapProps extends HTMLAttributes<HTMLDivElement> {
	keyword: string;
	handlePlaces: (places: SearchResult[]) => void;
	handleInformation: (
		id: string,
		star: number,
		color: string,
		review: number
	) => void;
}

const Map = forwardRef<HTMLDivElement, MapProps>(
	({ keyword, handlePlaces, handleInformation }, ref) => {
		const mapRef = useRef<HTMLDivElement>(null);
		useImperativeHandle(ref, () => mapRef.current as HTMLDivElement);

		useEffect(() => {
			if (!keyword?.replace(/^\s+|\s+$/g, '')) return;
			const map = new window.kakao.maps.Map(mapRef.current, INIT_OPTIONS);
			const ps = new kakao.maps.services.Places();
			const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

			ps.keywordSearch(keyword, placesSearchCB, SEARCH_OPTIONS);

			function placesSearchCB(places: SearchResult[], status: any) {
				if (status === kakao.maps.services.Status.OK) {
					handlePlaces(places);

					const bounds = new kakao.maps.LatLngBounds();

					places.forEach((place) => {
						displayMarker(place);
						bounds.extend(new kakao.maps.LatLng(place.y, place.x));
					});

					// 검색된 장소를 기준으로 지도 범위 재설정
					map.setBounds(bounds);
				}
			}

			// 지도에 마커를 표시하는 함수
			function displayMarker(place: SearchResult) {
				// 마커를 생성하고 지도에 표시
				const marker = new kakao.maps.Marker({
					map,
					position: new kakao.maps.LatLng(place.y, place.x),
				});

				// add mouseover event to marker
				kakao.maps.event.addListener(marker, 'mouseover', () => {
					displayWindow(place, marker);
				});

				// add mouseout event to marker
				kakao.maps.event.addListener(marker, 'mouseout', () => {
					infowindow.close();
				});

				// add click event to marker
				kakao.maps.event.addListener(marker, 'click', () => {
					// handleInformation(place.)
				});
			}

			function displayWindow(place: SearchResult, marker: any) {
				const elem = document.createElement('div');
				elem.innerText = place.place_name;
				Object.keys(StyledWindow).forEach((property: any) => {
					elem.style[property] = StyledWindow[property];
				});
				infowindow.setContent(elem);
				infowindow.open(map, marker);
			}
		}, [keyword]);

		return <StyledContainer id="map" ref={mapRef} />;
	}
);
Map.displayName = 'Map';

const StyledContainer = styled('div')({
	width: '100%',
	height: '100%',
});

const StyledWindow: StyleProps = {
	padding: '5px',
};

export default Map;
