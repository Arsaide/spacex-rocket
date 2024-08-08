import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
	testPathIgnorePatterns: ["/node_modules/"],
	moduleDirectories: ['node_modules', 'src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};

export default config;