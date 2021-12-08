// snake case to camel case
function toCamelCase(str: string) {
	const parsed = str.split('_');
	const uppered = parsed.map((word, i) =>
		i === 0 ? word : word[0].toUpperCase() + word.slice(1)
	);

	return uppered.join('');
}

export default toCamelCase;
