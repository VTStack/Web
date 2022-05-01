import rootConfig from '../../../../jest.config';

delete rootConfig.projects;

module.exports = {
  ...rootConfig,

  displayName: 'thunder-groups-ui',
  preset: '../../../../jest.preset.ts',
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/thunder/groups/ui'
};
