import { RuleSetRule } from 'webpack';

import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const esBuildLoader: RuleSetRule = {
    test: /\.[jt]sx?$/,
    loader: 'esbuild-loader',
    options: {
      target: 'es2015',
      jsx: 'automatic',
    },
    exclude: /node_modules/,
  };

  const scssLoader: RuleSetRule = buildCssLoader(isDev);

  const fontLoader: RuleSetRule = {
    test: /\.(woff(2)?|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name][ext]',
    },
  };

  const imgLoader: RuleSetRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/img/[name].[contenthash:8][ext]',
    },
  };

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    exclude: /(checkIcon|arrow)\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const svgResourceLoader: RuleSetRule = {
    test: /(checkIcon|arrow)\.svg$/i,
    type: 'asset',
    generator: {
      filename: 'assets/icons/[name][ext]',
    },
  };

  return [esBuildLoader, scssLoader, svgLoader, svgResourceLoader, fontLoader, imgLoader];
}
