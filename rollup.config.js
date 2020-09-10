import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import auto from '@rollup/plugin-auto-install'
import json from '@rollup/plugin-json'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [auto(), json(), resolve(), commonjs(), typescript({ useTsconfigDeclarationDir: true })],
  external: ['react', 'react-dom'],
}
