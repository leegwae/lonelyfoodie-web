import { SearchResult } from '@library/map/types';

export interface Restaurant extends SearchResult {
	[index: string]: any;
	star: number;
	review: number;
	color: string;
}
