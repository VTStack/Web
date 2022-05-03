module.exports = {
  displayName: 'thunder-invite-feature',

  transform: {
    '^.+/.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/thunder/invite/feature',
  preset: '../../../../jest.preset.ts'
};
