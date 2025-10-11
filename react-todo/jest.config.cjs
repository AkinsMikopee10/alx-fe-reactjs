module.exports = {
  testEnvironment: "jest-environment-jsdom", // specify installed environment
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // handle JSX/ES6
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
