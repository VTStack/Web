import { getJestProjects } from '@nrwl/jest';
import { Config } from '@jest/types';

export default {
  projects: getJestProjects(),
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 90,
      functions: 90,
      statements: 90,
      branches: 90
    }
  },
  lastCommit: false
} as Config.InitialOptions;
