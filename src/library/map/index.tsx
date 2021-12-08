import React, { useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { RawResult, SearchResult } from '@library/map/types';
import { INIT_OPTIONS, SEARCH_OPTIONS } from '@library/map/const';
import formatRawResults from '@library/map/utils/formatRawResults';
import getMapBounds from '@library/map/utils/getMapBounds';
import generateMarker from '@library/map/utils/generateMarker';
import addEventsOnMarker, {
	Events,
} from '@library/map/utils/addEventsOnMarker';
import createWindowContent from '@library/map/utils/createWindowContent';
import { searchResultListState } from '@library/map/atoms/searchResults';
import currentPlaceState from '@library/map/atoms/currentPlace';

declare global {
	interface Window {
		kakao: any;
	}
}

const { kakao } = window;

interface MapProps {
	keyword: string;
}

const Map = forwardRef<HTMLDivElement, MapProps>(({ keyword }, ref) => {
	const setSearchResultList = useSetRecoilState(searchResultListState);
	const setCurrentPlace = useSetRecoilState(currentPlaceState);
	const resetCurrentPlace = useResetRecoilState(currentPlaceState);
	const mapRef = useRef<HTMLDivElement>(null);

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

				// searchResultList 상태에 검색 결과 리스트 저장
				const searched: SearchResult[] = formatRawResults(raw);
				setSearchResultList(searched);

				const t = searched.map((result) => {
					const { placeName, id, x, y } = result;
					const obj = {
						name: placeName,
						kakao_id: id,
						latitude: y,
						longitude: x,
					};
					return JSON.stringify(obj);
				}).join(`,
`);
				console.log(t);
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
							resetCurrentPlace();
						},
						click: () => {
							setCurrentPlace(place);
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
