/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  preset: 'ts-jest',
  roots: ['<rootDir>/tests/'],
  clearMocks: true, // Automatically clear mock calls, instances and results before every test
  moduleDirectories: ['node_modules', 'src'], // 告诉jest去哪里找模块资源
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'vue'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: false,
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.{js,ts,vue}'],
  coveragePathIgnorePatterns: ['^.+\\.d\\.ts$'],
  testEnvironment: 'jsdom',
  transform: {
    // 转化方式
    // process *.vue files with vue-jest
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};
