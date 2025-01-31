import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: [`**/*.{js,mjs,cjs,ts,jsx,tsx}`] },
	{
		languageOptions: {
			...pluginReact.configs.flat.recommended.languageOptions,
			globals: { ...globals.serviceworker, ...globals.browser, __IS_DEV__: true },
			parser: tseslint.parser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				ecmaVersion: `latest`,
				sourceType: `module`,
			},
		},
		plugins: {
			react: pluginReact,
		},
		settings: {
			react: {
				createClass: `createReactClass`,
				pragma: `React`,
				fragment: `Fragment`,
				version: `detect`,
				flowVersion: `0.53`,
			},
			propWrapperFunctions: [
				`forbidExtraProps`,
				// { property: "freeze", object: "Object" },
				// { property: "myFavoriteWrapper" },
				// { property: "forbidExtraProps", exact: true },
			],
			componentWrapperFunctions: [
				`observer`,
				{ property: `styled` },
				// { property: "observer", object: "Mobx" },
				// { property: "observer", object: "<pragma>" },
			],
			formComponents: [
				`CustomForm`,
				// { name: "SimpleForm", formAttribute: "endpoint" },
				// { name: "Form", formAttribute: ["registerEndpoint", "loginEndpoint"] },
			],
			linkComponents: [
				`Hyperlink`,
				// { name: "MyLink", linkAttribute: "to" },
				// { name: "Link", linkAttribute: ["to", "href"] },
			],
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat[`jsx-runtime`],
	i18next.configs['flat/recommended'],
	{
		rules: {
			'indent': [`error`, `tab`],
			'react/jsx-indent': [`error`, `tab`],
			'react/jsx-indent-props': [`error`, `tab`],
			'react/jsx-filename-extension': [
				`error`,
				{ extensions: [`.js`, `.jsx`, `.ts`, `.tsx`] },
			],
			'react/jsx-curly-spacing': [2, { 'when': `always`, 'spacing': {
				'objectLiterals': `never`
			} }],
			'object-curly-spacing': [`error`, `always`],
			quotes: ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
			'import/no-unresolved': `off`,
			'import/prefer-default-export': `off`,
			'no-unused-vars': `off`,
			'react/require-default-props': `off`,
			'react/react-in-jsx-scope': `off`,
			'react/jsx-props-no-spreading': `warn`,
			'react/function-component-definition': `off`,
			'no-shadow': `off`,
			'import/extensions': `off`,
			'import/no-extraneous-dependencies': `off`,
			'no-underscore-dangle': `off`,
			'@typescript-eslint/no-unused-vars': 'warn'
		},
	},
	{
		files: ['**/src/**/*.{spec,test}.{ts,tsx}'],
		rules: {
			'i18next/no-literal-string': 0,
		},
	},
];