import fs from 'fs';

// Reading the SWC compilation config and remove the "exclude"
// for the test files to be compiled by SWC
const { ...swcJestConfig } = JSON.parse(fs.readFileSync(`${__dirname}/.lib.swcrc`, 'utf-8'));

module.exports = {
  displayName: 'thunder-types',

  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/thunder/types',
  preset: '../../../jest.preset.ts'
};
