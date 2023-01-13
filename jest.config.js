module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/src/index.js"],
};
