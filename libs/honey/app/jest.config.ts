module.exports = {
  displayName: '[HONEY]: <shell>',

  transform: {
    '.tsx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/honey/app',
  preset: '../../../jest.preset.ts'
};
