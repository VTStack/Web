import rootJestConfig from '../../../../jest.config';
import { Config } from '@jest/types';

delete rootJestConfig.projects;
delete rootJestConfig.coverageThreshold;

export default {
  ...rootJestConfig,
  displayName: 'thunder-groups-feature',
  preset: '../../../../jest.preset.ts',

  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/thunder/groups/feature'
} as Config.InitialOptions;
