export interface Point {
	x: string;
	y: string;
}

export interface SearchResult {
	[index: string]: string | undefined;
	addressName: string;
	categoryGroupCode: string;
	categoryGroupName: string;
	categoryName: string;
	distance: string;
	id: string;
	phone: string;
	placeName: string;
	placeUrl: string;
	roadAddressName: string;
	x: string;
	y: string;
}

export interface RawResult {
	[index: string]: string | undefined;
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

export interface Restaurant extends SearchResult {
	[index: string]: any;
	star: number;
	review: number;
	color: string;
}
