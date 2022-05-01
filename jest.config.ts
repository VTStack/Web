// eslint-disable-next-line node/no-unpublished-require
import { getJestProjects } from '@nrwl/jest';
import { Config } from '@jest/types';

export default {
  projects: getJestProjects(),
  collectCoverage: true,
  collectCoverageFrom: ['./**/*.{ts,tsx,js,jsx}', '!**/node_modules', '!*config*'],
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
