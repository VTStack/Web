module.exports = {
  displayName: 'shared-theme',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': '@swc/jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/shared/theme'
};
