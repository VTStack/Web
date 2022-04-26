// eslint-disable-next-line node/no-unpublished-require
import { getJestProjects } from '@nrwl/jest';

module.exports = {
  projects: getJestProjects(),
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};
