const config = {
    maxWorkers: 5,
    //maxWorkers - количество потоков, если не указано, то = количество ядер - 1.
    verbose: true,
    clearMocks: true,
    runner: 'jest-runner',
    testTimeout: 70000,
    rootDir: './',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    reporters: ['default', 'jest-junit', 'jest-html-reporter'],
    //add new methods (extends jest) in file setupJest.js
    setupFilesAfterEnv: ['./setupJest.js'],
};

module.exports = config;