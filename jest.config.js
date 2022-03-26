// eslint-disable-next-line node/no-unpublished-require
const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};
