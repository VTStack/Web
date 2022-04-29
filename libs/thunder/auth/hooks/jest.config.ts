import { readFileSync } from 'fs';

// Reading the SWC compilation config and remove the "exclude"
// for the test files to be compiled by SWC
const { ...swcJestConfig } = JSON.parse(readFileSync(`${__dirname}/.lib.swcrc`, 'utf-8'));

module.exports = {
  displayName: 'thunder-auth-hooks',
  preset: '../../../../jest.preset.ts',
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../coverage/libs/thunder/auth/hooks'
};
