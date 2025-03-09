module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
	moduleNameMapper: {
		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	moduleDirectories: ['node_modules', 'src'],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/dist/',
		'<rootDir>/build/',
		'<rootDir>/coverage/'
	]
};
