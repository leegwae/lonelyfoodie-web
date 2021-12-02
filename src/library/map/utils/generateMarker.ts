import { SearchResult } from '@library/map/types';

const generateMarker = (map: any, place: SearchResult) => {
	const marker = new window.kakao.maps.Marker({
		map,
		position: new window.kakao.maps.LatLng(place.y, place.x),
	});

	return marker;
};

export default generateMarker;
