import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import url from 'postcss-url';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    external(),
    babel({
      runtimeHelpers: true,
      exclude: /node_modules/,
    }),
    postcss({
      extract: pkg.style,
      plugins: [
        postcssPresetEnv(),
        url({
          url: 'inline',
        }),
      ],
    }),
    resolve(),
    commonjs(),
  ],
};
