import { SearchResult } from '@library/map/types';

const createWindowContent = (place: SearchResult): HTMLDivElement => {
	const elem = document.createElement('div');
	elem.innerText = place.placeName;
	Object.keys(windowStyles).forEach((property: any) => {
		elem.style[property] = windowStyles[property];
	});

	return elem;
};

interface StyleProps {
	[key: string]: string;
}

const windowStyles: StyleProps = {
	padding: '5px',
};

export default createWindowContent;
