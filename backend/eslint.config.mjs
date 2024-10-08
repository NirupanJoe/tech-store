import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' }},
	{ languageOptions: { globals: { ...globals.browser, ...globals.node }}},
	pluginJs.configs.recommended,
	{
		ignores: ['eslint.config.mjs'],
	},
	{
		rules: {
			'arrow-body-style': [
				'error',
				'as-needed',
			],
			'arrow-parens': [
				'error',
				'always',
			],
			'arrow-spacing': [
				'error',
				{
					before: true,
					after: true,
				},
			],
			'array-bracket-newline': [
				'error',
				'consistent',
			],
			'array-bracket-spacing': [
				'error',
				'never',
			],
			'array-element-newline': [
				'error',
				'consistent',
			],
			'block-spacing': 'error',
			'brace-style': [
				'error',
				'stroustrup',
				{
					allowSingleLine: true,
				},
			],
			'camelcase': [
				'error',
				{
					properties: 'never',
				},
			],
			'comma-spacing': [
				'error',
				{
					after: true,
				},
			],
			'comma-style': [
				'error',
				'last',
			],
			'computed-property-spacing': [
				'error',
				'never',
			],
			'consistent-this': [
				'error',
				'that',
			],
			'comma-dangle': [
				'error',
				'always-multiline',
			],
			'eol-last': 1,
			'generator-star-spacing': [
				'error',
				{
					before: true,
					after: false,
				},
			],
			'indent': [
				'error',
				'tab',
			],
			'jsx-quotes': [
				'error',
				'prefer-double',
			],
			'func-call-spacing': [
				'error',
				'never',
			],
			'func-names': [
				'error',
				'as-needed',
			],
			'func-name-matching': [
				'error',
				'always',
			],
			'function-paren-newline': [
				'error',
				{
					minItems: 3,
				},
			],
			'func-style': [
				'error',
				'expression',
			],
			'id-blacklist': [
				'error',
			],
			'id-length': [
				'error',
				{
					min: 1,
					max: 32,
				},
			],
			'id-match': [
				'error',
				'^_?[a-z]*([A-Z]([A-Z]|[a-z])+)*$',
			],
			'key-spacing': [
				'error',
				{
					beforeColon: false,
					afterColon: true,
				},
			],
			'keyword-spacing': [
				'error',
				{
					after: true,
					overrides: {
						if: {
							after: false,
						},
						for: {
							after: false,
						},
						while: {
							after: false,
						},
					},
				},
			],
			'line-comment-position': [
				'error',
				{
					position: 'above',
				},
			],
			'lines-around-comment': [
				'error',
				{
					beforeLineComment: false,
					afterLineComment: false,
					applyDefaultIgnorePatterns: true,
					ignorePattern: 'Helpers|Tasks|Exports|Tested|Mocks',
				},
			],
			'lines-between-class-members': [
				'error',
				'always',
			],
			'linebreak-style': [
				'error',
				'unix',
			],
			'max-depth': [
				'error',
				4,
			],
			'max-len': [
				'error',
				{
					code: 80,
					ignoreComments: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true,
				},
			],
			'max-lines': [
				'error',
				{
					max: 300,
					skipBlankLines: true,
					skipComments: true,
				},
			],
			'max-lines-per-function': [
				'error',
				{
					max: 20,
					skipBlankLines: true,
					skipComments: true,
				},
			],
			'max-nested-callbacks': [
				'error',
				3,
			],
			'max-params': [
				'error',
				8,
			],
			'max-statements': [
				'error',
				10,
			],
			'max-statements-per-line': [
				'error',
				{
					max: 1,
				},
			],
			'multiline-ternary': [
				'error',
				'always-multiline',
			],
			'new-cap': [
				'error',
				{
					capIsNew: false,
				},
			],
			'new-parens': [
				'error',
			],
			'newline-per-chained-call': [
				'error',
				{
					ignoreChainWithDepth: 2,
				},
			],
			'no-array-constructor': 'error',
			'no-bitwise': 'error',
			'no-confusing-arrow': [
				'error',
				{
					allowParens: true,
				},
			],
			'no-continue': 'error',
			'no-duplicate-imports': 'error',
			'no-extra-boolean-cast': 'error',
			'no-extra-parens': [
				'error',
				'all',
				{
					enforceForArrowConditionals: false,
					nestedBinaryExpressions: false,
					returnAssign: false,
				},
			],
			'no-extra-semi': 'error',
			'no-inline-comments': 'error',
			'no-lonely-if': 'error',
			'no-mixed-operators': 'error',
			'no-mixed-spaces-and-tabs': 'error',
			'no-multi-assign': 'error',
			'no-multi-spaces': 'error',
			'no-multiple-empty-lines': [
				'error',
				{
					max: 1,
					maxEOF: 0,
				},
			],
			'no-new-object': 'error',
			'no-regex-spaces': 'error',
			'no-unsafe-negation': 'error',
			'no-tabs': 'off',
			'no-trailing-spaces': 'error',
			'no-underscore-dangle': 'error',
			'no-unneeded-ternary': 'error',
			'no-useless-constructor': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-rename': 'error',
			'no-warning-comments': [
				'error',
				{
					terms: [
						'DEBUG',
					],
					location: 'anywhere',
				},
			],
			'object-shorthand': [
				'error',
				'consistent-as-needed',
			],
			'nonblock-statement-body-position': [
				'error',
				'below',
			],
			'object-curly-newline': [
				'error',
				{
					consistent: true,
				},
			],
			'object-curly-spacing': [
				'error',
				'always',
				{
					objectsInObjects: false,
				},
			],
			'operator-assignment': [
				'error',
				'always',
			],
			'operator-linebreak': [
				'error',
				'before',
			],
			'padded-blocks': [
				'error',
				'never',
			],
			'padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: [
						'const',
						'let',
						'var',
					],
					next: '*',
				},
				{
					blankLine: 'any',
					prev: [
						'const',
						'let',
						'var',
					],
					next: [
						'const',
						'let',
						'var',
					],
				},
			],
			'prefer-object-spread': 'error',
			'prefer-arrow-callback': 'error',
			'one-var': [
				'error',
				'never',
			],
			'prefer-const': 'error',
			'prefer-destructuring': [
				'error',
				{
					object: true,
					array: false,
				},
			],
			'prefer-numeric-literals': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'quote-props': [
				'error',
				'consistent-as-needed',
			],
			'quotes': [
				'error',
				'single',
			],
			'require-yield': 'error',
			'symbol-description': 'error',
			'template-curly-spacing': [
				'error',
				'always',
			],
			'yield-star-spacing': [
				'error',
				'after',
			],
			'semi': [
				'error',
				'always',
			],
			'space-before-blocks': 'error',
			'space-before-function-paren': 'error',
			'space-in-parens': [
				'error',
				'never',
			],
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'spaced-comment': [
				'error',
				'always',
				{
					line: {
						exceptions: [],
					},
				},
			],
			'switch-colon-spacing': [
				'error',
				{
					after: true,
					before: false,
				},
			],
			'template-tag-spacing': [
				'error',
				'always',
			],
			'unicode-bom': 'error',
			'wrap-regex': 'error',
			'no-lone-blocks': 'error',
			'dot-notation': 'error',
			'dot-location': [
				'error',
				'property',
			],
			'curly': [
				'error',
				'multi-or-nest',
			],
			'no-template-curly-in-string': 'error',
			'no-await-in-loop': 'error',
			'no-debugger': 'error',
			'strict': [
				'error',
				'never',
			],
			'vars-on-top': 'error',
			'init-declarations': [
				'error',
				'always',
			],
			'no-delete-var': 'error',
			'no-dupe-args': 'error',
			'no-global-assign': [
				'error',
				{
					exceptions: [],
				},
			],
			'no-func-assign': 'error',
			'no-magic-numbers': [
				'error',
				{
					ignore: [
						0,
						1,
					],
					ignoreArrayIndexes: true,
				},
			],
			'no-restricted-globals': 'error',
			'no-shadow': 'error',
			'no-redeclare': 'error',
			'no-shadow-restricted-names': 'error',
			'no-unused-vars': ['error', { "argsIgnorePattern": "^_" }],
			'no-use-before-define': 'error',
			'no-undef': 'error',
			'no-undef-init': 'error',
			'no-var': 'error',
			'yoda': 'error',
			'eqeqeq': 'error',
			'no-eq-null': 'error',
			'no-self-compare': 'error',
			'no-floating-decimal': 'error',
			'radix': 'error',
			'no-label-var': 'error',
			'no-extra-label': 'error',
			'complexity': [
				'error',
				{
					max: 4,
				},
			],
			'no-new': 'error',
			'no-new-func': 'error',
			'no-octal-escape': 'error',
			'no-param-reassign': 'error',
			'no-proto': 'error',
			'no-return-assign': [
				'error',
				'except-parens',
			],
			'no-return-await': 'error',
			'no-useless-call': 'error',
			'no-sequences': 'error',
			'no-unused-expressions': [
				'error',
				{
					allowShortCircuit: true,
					allowTernary: true,
				},
			],
			'no-unmodified-loop-condition': 'error',
			'no-with': 'error',
			'no-empty-pattern': 'error',
			'no-multi-str': 'error',
			'no-useless-return': 'error',
			'no-useless-concat': 'error',
			'no-throw-literal': 'error',
			'no-loop-func': 'error',
			'no-void': 'error',
			'require-await': 'error',
			'prefer-promise-reject-errors': 'error',
		},
	},
];
