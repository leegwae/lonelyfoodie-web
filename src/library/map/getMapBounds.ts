import { Point } from '@library/map/types';

const getMapBounds = (points: Point[]) => {
	const bounds = new window.kakao.maps.LatLngBounds();

	points.forEach((point) => {
		bounds.extend(new window.kakao.maps.LatLng(point.y, point.x));
	});

	return bounds;
};

export default getMapBounds;
