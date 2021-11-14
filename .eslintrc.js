module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['react', '@typescript-eslint'],
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		camelcase: 'warn',
		'no-console': 'off',
		'no-use-before-define': 'off',
		'no-new': 'off',
		'no-plusplus': 'off',
		'consistent-return': 'off',
		'no-useless-return': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true },
		],
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'prettier/prettier': 'error',
	},
};
