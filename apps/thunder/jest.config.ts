module.exports = {
  displayName: 'thunder',

  transform: {
    '^.+/.[tj]s$': '@swc/jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/thunder',
  preset: '../../jest.preset.ts'
};
