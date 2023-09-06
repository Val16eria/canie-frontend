module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    moduleNameMapper: {
        '^@pages/(.*)': '<rootDir>/src/pages/$1',
        '^@assets/(.*)': '<rootDir>/src/assets/$1',
        '^@shared/(.*)': '<rootDir>/src/shared/$1',
        '^@features/(.*)': '<rootDir>/src/features/$1',
        '^@entities/(.*)': '<rootDir>/src/entities/$1',
        '^@widgets/(.*)': '<rootDir>/src/widgets/$1',
        '^@routing/(.*)': '<rootDir>/src/routing/$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            require.resolve('./test/fileMock.ts'),
        '\\.(css|less|scss|sss|styl)$':
            '<rootDir>/node_modules/identity-obj-proxy',
    },
};
