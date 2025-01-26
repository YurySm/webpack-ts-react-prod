/** @type {import('stylelint').Config} */
export default {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-prettier/recommended'
	],
	rules: {
		'scss/double-slash-comment-whitespace-inside': null,
		'selector-class-pattern': null
	}
};