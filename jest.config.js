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
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
  setupFilesAfterEnv: ['jest-styled-components', '@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
