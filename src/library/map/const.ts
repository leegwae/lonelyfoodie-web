export const INIT_OPTIONS = {
	center: new window.kakao.maps.LatLng(
		37.584044225441346,
		127.05877709833149
	),
	level: 3,
};

export const SEARCH_OPTIONS = {
	location: new window.kakao.maps.LatLng(
		37.584044225441346,
		127.05877709833149
	),
	size: 15,
	sort: window.kakao.maps.services.SortBy.DISTANCE,
};
