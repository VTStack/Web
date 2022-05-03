import rootConfig from '../../jest.config';

delete rootConfig.projects;

module.exports = {
  ...rootConfig,
  displayName: 'hooks',
  preset: '../../jest.preset.ts',

  transform: {
    '^.+/.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/hooks'
};
