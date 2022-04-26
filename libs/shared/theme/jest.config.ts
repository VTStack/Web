module.exports = {
  displayName: 'shared-theme',

  transform: {
    '^.+/.[tj]s$': '@swc/jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/shared/theme',
  preset: '../../../jest.preset.ts'
};
