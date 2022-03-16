module.exports = {
  displayName: 'APP: Thunder',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': '@swc/jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/thunder'
};
