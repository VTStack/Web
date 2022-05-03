module.exports = {
  displayName: 'about-feature-projects',

  transform: {
    '^.+/.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/about/feature-projects',
  preset: '../../../jest.preset.ts'
};
