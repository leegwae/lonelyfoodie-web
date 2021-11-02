const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['react-hot-loader/patch', './src/index.tsx'],
	module: {
		rules: [
			{
				test: /\.(tsx|ts)?$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		symlinks: false,
		plugins: [
			new TsConfigPathsPlugin({
				configFile: path.resolve(__dirname, './tsconfig.json'),
			}),
		],
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './public',
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			minify: false,
		}),
	],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
};
