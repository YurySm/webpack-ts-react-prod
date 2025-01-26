import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options;

	const fileLoader ={
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const svgLoader =  {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						namedExport: false,
						auto: ((resourcePath: string) => resourcePath.includes('.module')),
						localIdentName: isDev ?
							'[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]'
					},
				},
			},
			'sass-loader',
		],
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		typescriptLoader,
		cssLoader,
		svgLoader,
		fileLoader
	]
}