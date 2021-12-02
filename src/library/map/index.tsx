import React, { useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { RawResult, SearchResult } from '@library/map/types';
import { INIT_OPTIONS, SEARCH_OPTIONS } from '@library/map/const';
import formatRawResults from '@library/map/formatRawResults';
import getMapBounds from '@library/map/getMapBounds';
import generateMarker from '@library/map/generateMarker';
import addEventsOnMarker, { Events } from '@library/map/addEventsOnMarker';
import createWindowContent from '@library/map/createWindowContent';
import { searchResultListState } from '@atoms/searchResult';
import { currentRestaurantState } from '@atoms/restaurant';

const { kakao } = window;

interface MapProps {
	keyword: string;
}

const Map = forwardRef<HTMLDivElement, MapProps>(({ keyword }, ref) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const setSearchResultList = useSetRecoilState(searchResultListState);

	// 키워드 없을 때 지도 렌더링
	useEffect(() => {
		new kakao.maps.Map(mapRef.current, INIT_OPTIONS);
	}, [!keyword]);

	// 키워드 있을 때 지도 렌더링
	useEffect(() => {
		if (!keyword?.replace(/^\s+|\s+$/g, '')) return;
		const map = new kakao.maps.Map(mapRef.current, INIT_OPTIONS);
		const ps = new kakao.maps.services.Places();
		const infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });

		// 키워드로 검색 이후 placeSearchCB 콜백 함수 실행
		ps.keywordSearch(keyword, placesSearchCB, SEARCH_OPTIONS);

		function placesSearchCB(raw: RawResult[], status: any) {
			if (status === kakao.maps.services.Status.OK) {
				if (raw === undefined) return;

				// results 상태 변수에 검색 결과 저장
				const searched: SearchResult[] = formatRawResults(raw);
				setSearchResultList(searched);

				// 검색 결과 기준으로 지도 재설정
				const bounds = getMapBounds(
					searched.map((place) => ({ x: place.x, y: place.y }))
				);
				map.setBounds(bounds);

				// 검색된 음식점에 마커 생성
				searched.forEach((place) => {
					const marker = generateMarker(map, place);

					const events: Events = {
						mouseover: () => {
							const content = createWindowContent(place);
							infoWindow.setContent(content);
							infoWindow.open(map, marker);
						},
						mouseout: () => {
							infoWindow.close();
						},
						click: () => {
							console.log(place.id);
						},
					};

					addEventsOnMarker(marker, events);
				});
			}
		}
	}, [keyword]);

	return <StyledMap id="map" ref={mapRef} />;
});
Map.displayName = 'Map';

const StyledMap = styled('div')({
	width: '100%',
	height: '100%',
	overflow: 'hidden',
});

export default Map;
