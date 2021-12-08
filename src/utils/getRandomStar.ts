function getRandom(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}

function getRandomStar() {
	return Number(getRandom(0, 5).toFixed(2));
}

export default getRandomStar;
