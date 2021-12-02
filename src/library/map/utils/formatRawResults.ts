import { RawResult, SearchResult } from '@library/map/types';
import toCamelCase from '@utils/toCamelCase';

const formatRawResults = (raw: RawResult[]): SearchResult[] => {
	const searched: SearchResult[] = raw.map((r) => {
		const formatted: any = {};

		Object.keys(r).forEach((key) => {
			const camelKey = toCamelCase(key);
			formatted[camelKey] = r[key];
		});
		return formatted as SearchResult;
	});

	return searched;
};

export default formatRawResults;
