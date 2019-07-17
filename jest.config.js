module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/__tests__/**',
    '!src/assets/**',
    '!src/routes/**',
    '!src/services/**',
    '!src/styles/**',
    '!src/App.js',
    '!src/index.js',
    '!src/**/styles.js'
  ],
  testRegex: '__tests__/.*\\.test\\.js$',
  resolver: 'jest-webpack-resolver',
  setupFiles: ['<rootDir>/src/setupTests.js', '<rootDir>/node_modules/regenerator-runtime/runtime'],
  setupFilesAfterEnv: [
    'jest-styled-components',
    'jest-dom/extend-expect',
    'react-testing-library/cleanup-after-each'
  ]
};
