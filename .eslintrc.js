module.exports = {
	'env': {
		'es6': true,
		'node': true
	},
	'extends': ['eslint:recommended', 'airbnb-base/legacy'],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'eqeqeq': [
			'error',
			'always'
		],
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [
			'error', 'always'
		],
		'arrow-spacing': [
			'error', { 'before': true, 'after': true }
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'camelcase': 'error'
	},
}