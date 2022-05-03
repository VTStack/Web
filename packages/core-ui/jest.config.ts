module.exports = {
  displayName: 'core-ui',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+/.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/core-ui'
};
