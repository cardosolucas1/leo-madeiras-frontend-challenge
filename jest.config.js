module.exports = {
  clearMocks: true,
  verbose: false,
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.spec.ts?(x)"],
  coverageReporters: ["text", "html", "lcov", "json-summary"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/test-utils/index.tsx"],
  transformIgnorePatterns: ["node_modules"],
  modulePathIgnorePatterns: ["<rootDir>/src/__tests__/test-utils"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  globals: {
    "ts-jest": {
      diagnostics: true,
      isolatedModules: true,
    },
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.svg$": "jest-svg-transformer",
  },
};
