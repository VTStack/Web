// eslint-disable-next-line node/no-unpublished-require
import { getJestProjects } from '@nrwl/jest';
import { Config } from '@jest/types';

module.exports = {
  projects: getJestProjects(),
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
} as Config.InitialOptions;
