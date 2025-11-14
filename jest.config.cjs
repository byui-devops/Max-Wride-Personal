// Filepaths and/or path patterns to test
const testFiles = [
  "**/*.test.js"

]

// To simulate coverage for assignment, only calculate coverage of specific file
const filesCovered = [
  "**/*.js",
  "!app.js",
  "!server.js",
]

module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  testMatch: testFiles,
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    ...filesCovered
  ],
  coverageReporters: [
    'text',
    'text-summary',
  ],
} 

