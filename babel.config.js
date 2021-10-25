module.exports = {
	presets: [
		['@babel/preset-env', { targets: "defaults", loose: true }],
		['@babel/preset-typescript'],
    ['@babel/preset-react'],
	],
  plugins: [
		'babel-plugin-styled-components',
		'react-hot-loader/babel'
	]
};