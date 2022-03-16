module.exports = {
  displayName: 'thunder-themes',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': '@swc/jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/thunder/themes',
};
