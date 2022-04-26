module.exports = {
  displayName: 'APP: Thunder',

  transform: {
    '^.+/.[tj]s$': '@swc/jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/thunder',
  preset: '../../jest.preset.ts'
};
