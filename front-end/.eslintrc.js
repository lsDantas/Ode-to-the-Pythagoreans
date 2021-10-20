module.exports = {
	'env': {
		'browser': true,
		'es6': true,
	},
	'extends': [
		'airbnb-base',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2020,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
		  'error',
			2
		],
	  'linebreak-style': [
		  'error',
		  'unix'
  	],
		'quotes': [
			'error',
			'single'
		],
		'eqeqeq': 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [
			'error', 'always'
		],
		'arrow-spacing': [
			'error', { 'before': true, 'after': true }
		],
		'no-console': 0,
		'react/prop-types': 0
	},
	'settings': {
		'react': {
			'version': 'detect'
		}
  }
}