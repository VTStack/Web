module.exports = {
  displayName: 'about-ui',

  transform: {
    '.tsx?$': [
      '@swc/jest',
      {
        jsc: { transform: { react: { runtime: 'automatic' } } }
      }
    ]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/about/ui',
  preset: '../../../jest.preset.ts'
};
