import React, {
	useEffect,
	useRef,
	forwardRef,
	useImperativeHandle,
	HTMLAttributes,
} from 'react';
import styled from 'styled-components';

// TODO: type definition 옮기기
interface SearchResult {
	address_name: string;
	category_group_code: string;
	category_group_name: string;
	category_name: string;
	distance: string;
	id: string;
	phone: string;
	place_name: string;
	place_url: string;
	road_address_name: string;
	x: string;
	y: string;
}

interface StyleProps {
	[key: string]: string;
}

const { kakao } = window;

const INIT_OPTIONS = {
	center: new kakao.maps.LatLng(37.584044225441346, 127.05877709833149),
	level: 3,
};

const SEARCH_OPTIONS = {
	location: new kakao.maps.LatLng(37.584044225441346, 127.05877709833149),
	size: 15,
	sort: kakao.maps.services.SortBy.DISTANCE,
};

interface MapProps extends HTMLAttributes<HTMLDivElement> {
	keyword: string;
}

const Map = forwardRef<any, MapProps>(({ keyword }, ref) => {
	const mapRef = useRef<HTMLDivElement>(null);
	let map: any;
	useImperativeHandle(ref, () => map as any);

	useEffect(() => {
		map = new window.kakao.maps.Map(mapRef.current, INIT_OPTIONS);
	});

	useEffect(() => {
		if (!keyword?.replace(/^\s+|\s+$/g, '')) return;

		const ps = new kakao.maps.services.Places();
		const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

		ps.keywordSearch(keyword, placesSearchCB, SEARCH_OPTIONS);

		function placesSearchCB(places: SearchResult[], status: any) {
			if (status === kakao.maps.services.Status.OK) {
				console.log(places);

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
});
Map.displayName = 'Map';

const StyledContainer = styled('div')({
	width: '100%',
	height: '100%',
});

const StyledWindow: StyleProps = {
	padding: '5px',
};

export default Map;
