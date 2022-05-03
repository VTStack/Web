module.exports = {
  displayName: 'about-feature-home',

  transform: {
    '^.+/.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/about/feature-home',
  preset: '../../../jest.preset.ts'
};
