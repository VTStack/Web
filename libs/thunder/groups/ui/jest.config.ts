import rootConfig from '../../../../jest.config';
import { Config } from '@jest/types';

delete rootConfig.projects;
delete rootConfig.coverageThreshold;

export = {
  ...rootConfig,

  displayName: 'thunder-groups-ui',
  preset: '../../../../jest.preset.ts',
  transform: {
    '^.+/.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/thunder/groups/ui'
} as Config.InitialOptions;
