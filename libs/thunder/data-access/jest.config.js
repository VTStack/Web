module.exports = {
  displayName: 'thunder-data-access',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+/.[tj]s$': '@swc/jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/thunder/data-access'
};
