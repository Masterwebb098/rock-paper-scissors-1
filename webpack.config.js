const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$|tsx/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: {
					loader: 'file-loader',
					options: {
						esModule: false,
					},
				},
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	mode: 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
	],
};
