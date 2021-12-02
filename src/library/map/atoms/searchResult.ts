import { atom, selector } from 'recoil';
import { SearchResult } from '@library/map/types';

export const searchResultListState = atom<SearchResult[]>({
	key: 'searchResultList',
	default: [],
});

export const hasSearchResultState = selector({
	key: 'hasSearchResult',
	get: ({ get }) => get(searchResultListState).length !== 0,
});
