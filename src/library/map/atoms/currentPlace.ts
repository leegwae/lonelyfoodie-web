import { atom } from 'recoil';
import { SearchResult } from '@library/map/types';

const currentPlaceState = atom<SearchResult | null>({
	key: 'currentPlace',
	default: null,
});

export default currentPlaceState;
