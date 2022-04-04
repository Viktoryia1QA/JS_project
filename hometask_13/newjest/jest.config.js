const config = {
    maxWorkers: 5,
    //maxWorkers - количество потоков, если не указано, то = количество ядер - 1.
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    notify: false,
    reporters: ['default', 'jest-junit', 'jest-html-reporter'],
    resetMocks: false,
    resetModules: false,
    restoreMocks: false,
    rootDir: './',
    runner: 'jest-runner',
    slowTestThreshold: 5,
    testEnvironment: 'node',
    testTimeout: 90000,
    verbose: true,
};
  
module.exports = config;