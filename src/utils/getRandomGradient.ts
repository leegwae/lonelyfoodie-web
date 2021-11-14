const hexString = '0123456789abcdef';

const getRandomColor = () => {
	let hexCode = '#';
	for (let i = 0; i < 6; i++) {
		hexCode += hexString[Math.floor(Math.random() * hexString.length)];
	}
	return hexCode;
};

const generateGradient = () => {
	const c1 = getRandomColor();
	const c2 = getRandomColor();
	const angle = Math.floor(Math.random() * 360);

	return `linear-gradient(${130}deg, ${c1}, ${c2})`;
};

export default generateGradient;
