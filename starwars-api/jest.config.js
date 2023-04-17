// module.exports = {
//   transform: {
//     '^.+\\.(js|jsx)$': 'babel-jest',
//     '^.+\\.tsx?$': 'ts-jest',
//     '\\.(css|less|scss|sass)$': 'jest-transform-css'
//   },
//   transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1'
//   },
//   moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],
//   globals: {
//     'ts-jest': {
//       babelConfig: {
//         presets: [
//           '@babel/preset-env',
//           '@babel/preset-react'
//         ]
//       },
//       tsConfig: {
//         jsx: 'react'
//       }
//     }
//   }
// }

// export const transform = {
//   '^.+\\.(js|jsx)$': 'babel-jest',
//   '^.+\\.tsx?$': 'ts-jest',
//   '\\.(css|less|scss|sass)$': 'jest-transform-css'
// };
// export const transformIgnorePatterns = ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'];
// export const moduleNameMapper = {
//   '^@/(.*)$': '<rootDir>/src/$1'
// };
// export const moduleFileExtensions = ['js', 'jsx', 'json', 'node', 'ts', 'tsx'];
// export const globals = {
//   'ts-jest': {
//     babelConfig: {
//       presets: [
//         '@babel/preset-env',
//         '@babel/preset-react'
//       ]
//     },
//     tsConfig: {
//       jsx: 'react'
//     }
//   }
// };


export default {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
    '\\.(css|less|scss|sass)$': 'jest-transform-css'
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ]
      },
      tsConfig: {
        jsx: 'react'
      }
    }
  }
};
