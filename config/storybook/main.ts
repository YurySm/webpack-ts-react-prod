import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

const isDev = true

const config: StorybookConfig = {
    stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        // '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook', 
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config) => {
        if(config.resolve) {
            config.resolve.modules = [
                ...(config.resolve.modules || []),
                path.resolve(__dirname, '../../src'),
            ];

            config.resolve.alias = {
                ...config.resolve.alias,
                entities: path.resolve(__dirname, '../../src/entities'),
            };
        }

        if(config.module && config.module.rules) {
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

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
                if(rule) {
                    if (/svg/.test(rule.test as string)) {
                        return {
                            ...rule,
                            exclude: /\.svg$/i,
                        };
                    }

                    return rule;
                }
            });

            config.module.rules.push({
                test: /\.svg$/i,
                use: ['@svgr/webpack'],
            })
        }

        if(config.plugins) {
            config.plugins.push(new webpack.DefinePlugin({
                __IS_DEV__: true,
                __API__: JSON.stringify('')
            }));
        }

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
