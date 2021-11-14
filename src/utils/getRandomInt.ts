const getRandomInt = (min: number, max: number): number => {
	const cMin = Math.ceil(min);
	const fMax = Math.floor(max);
	return Math.floor(Math.random() * (fMax - cMin)) + cMin;
};

export default getRandomInt;
