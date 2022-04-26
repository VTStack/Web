module.exports = {
  displayName: 'thunder-feature-home',

  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/thunder/feature-home',
  ignore: '**.*.todo.tsx',
  preset: '../../../jest.preset.ts'
};
