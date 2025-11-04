import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderOptions extends BuildOptions {
    isTSX?: boolean;
}

const buildBabelLoader = ({ isDev, isTSX }: BuildBabelLoaderOptions) => {
    return {
        test: isTSX ? /\.(?:jsx|tsx)$/ : /\.(?:js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [
                    ['@babel/preset-env'],
                    [
                        '@babel/preset-react',
                        {
                            'runtime': 'automatic'
                        }
                    ]
                ],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX
                        }
                    ],
                    '@babel/plugin-transform-runtime',
                    isTSX && !isDev && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid']
                        }
                    ]
                ].filter(Boolean),
            }
        }
    }
}

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
        exclude: /node_modules/,
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

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }

    // const babelLoader = {
    //     test: /\.(?:js|mjs|cjs)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: 'babel-loader',
    //         options: {
    //             presets: [
    //                 ['@babel/preset-env']
    //             ],
    //             plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
    //         }
    //     }
    // }

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false })

    const tsxBabelLoader = buildBabelLoader({ ...options, isTSX: true })


    return [
        // typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
        // babelLoader
        codeBabelLoader,
        tsxBabelLoader
    ]
}