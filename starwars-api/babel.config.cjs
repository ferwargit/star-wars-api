// module.exports = {
//   presets: [
//     '@babel/preset-env',
//     ['@babel/preset-react', {runtime: 'automatic'}],
//   ],
//   plugins: [
//     '@babel/plugin-transform-modules-commonjs'
//   ]
// };

// export const presets = [
//   '@babel/preset-env',
//   ['@babel/preset-react', { runtime: 'automatic' }],
// ];

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs'
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}]
      ]
    }
  }
}

// export const presets = [
//   '@babel/preset-env',
//   '@babel/preset-react'
// ];
// export const plugins = [
//   '@babel/plugin-transform-modules-commonjs'
// ];
// export const env = {
//   test: {
//     presets: [
//       ['@babel/preset-env', { targets: { node: 'current' } }]
//     ]
//   }
// };


// export default async () => {
//   return {
//     transform: {
//       '^.+\\.(js|jsx)$': 'babel-jest',
//       '^.+\\.tsx?$': 'babel-jest',
//       '\\.(css|less|scss|sass)$': 'jest-transform-css'
//     },
//     transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
//     moduleNameMapper: {
//       '^@/(.*)$': '<rootDir>/src/$1'
//     },
//     moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],
//     globals: {
//       'ts-jest': {
//         babelConfig: {
//           presets: [
//             '@babel/preset-env',
//             '@babel/preset-react'
//           ]
//         },
//         tsConfig: {
//           jsx: 'react'
//         }
//       }
//     }
//   };
// };