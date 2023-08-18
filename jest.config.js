module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            require.resolve('./test/fileMock.ts'),
        '\\.(css|less|scss|sss|styl)$':
            '<rootDir>/node_modules/identity-obj-proxy',
    },
};
