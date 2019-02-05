module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/!(rollup.config).{ts}', '!**/node_modules/**'],
  roots: ['packages/'],
  testPathIgnorePatterns: ['/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.{tsx|ts|js}'],
};
