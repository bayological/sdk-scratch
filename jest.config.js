/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/test/"],
   transform: {
      "^.+\\.tsx?$": "ts-jest",
   },
   testRegex: "test/.*\\.test\\.ts$",
   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};