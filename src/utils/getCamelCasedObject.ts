import toCamelCase from '@utils/toCamelCase';

const getCamelCasedObject = (raw: any) => {
	const formatted: any = {};

	Object.keys(raw).forEach((key) => {
		const camelKey = toCamelCase(key);
		formatted[camelKey] = raw[key];
	});

	return formatted;
};

export default getCamelCasedObject;
