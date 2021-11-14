const getRandom = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
};

const getRandomStar = () => Number(getRandom(0, 5).toFixed(2));

export default getRandomStar;
