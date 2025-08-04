module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '^@site/static/img/(.*)\\.(svg)$': '<rootDir>/src/__mocks__/svgMock.js',
    '^@site/(.*)$': '<rootDir>/$1',
    '^@theme/Heading$': '<rootDir>/src/__mocks__/headingMock.js',
    '^@theme/(.*)$': '<rootDir>/src/__mocks__/themeMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/src/__mocks__/svgMock.js'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/setupTests.js',
    '!src/__mocks__/**'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@docusaurus|@theme|clsx)/)'
  ]
};