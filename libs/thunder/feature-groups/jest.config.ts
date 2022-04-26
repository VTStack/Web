module.exports = {
  displayName: 'thunder-feature-groups',

  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/thunder/feature-groups',
  preset: '../../../jest.preset.ts'
};
