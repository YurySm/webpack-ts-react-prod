import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDev = true

const config: StorybookConfig = {
	stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook', 
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	webpackFinal: async (config) => {
		config.resolve.modules = [
			...(config.resolve.modules || []),
			path.resolve(__dirname, '../../src'),
		];

		config.module.rules.push({
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
		})

		return config;
	},
	swc: () => ({
		jsc: {
			transform: {
				react: {
					runtime: 'automatic'
				}
			}
		}
	}),
};
export default config;
