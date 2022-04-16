module.exports = {
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleNameMapper: {
    '^.+/.svg$': 'jest-svg-transformer'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/thunder/shell',
  displayName: 'thunder-shell',
  testEnvironment: 'jsdom'
};
