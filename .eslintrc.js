/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "@angular-eslint/eslint-plugin",
        "@typescript-eslint",
        "@angular-eslint/template",
    ],
    "root": true,
    "rules": {
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/no-host-metadata-property": "error",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        // "@angular-eslint/template/accessibility-all-text": "error",
        "@angular-eslint/template/accessibility-elements-content": "off",
        "@angular-eslint/template/accessibility-label-for": [
            "off",
            {
                "controlComponents": []
            }
        ],
        "@angular-eslint/template/click-events-have-key-events": "off",
        "@angular-eslint/template/no-autofocus": "off",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "format": [
                    "camelCase",
                    "UPPER_CASE"
                ],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            }
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "brace-style": [
            "error",
            "1tbs"
        ],
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-denylist": "off",
        "id-match": "off",
        "import/no-deprecated": "warn",
        "indent": "off",
        "max-len": [
            "error",
            {
                "code": 150
            }
        ],
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "log",
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-new-wrappers": "error",
        "no-restricted-imports": [
            "error",
            "rxjs/Rx"
        ],
        "no-shadow": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-var": "error",
        "prefer-const": "error",
        "quotes": "off",
        "radix": "error",
        "semi": "off",
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "variableLike",
            "format": [
              "camelCase",
              "UPPER_CASE",
              "PascalCase"
            ]
          },
          {
            "selector": "typeLike",
            "format": [
              "PascalCase"
            ]
          }
        ],
        // "@typescript-eslint/consistent-type-definition": "error",
        "indent": "off",
        "@typescript-eslint/indent": [
          "error",
          4,
          {
            "ArrayExpression": "first",
            "CallExpression": {
              "arguments": "first"
            },
            "ImportDeclaration": "first",
            "FunctionDeclaration": {
              "parameters": "first"
            },
            "FunctionExpression": {
              "parameters": "first"
            },
            "ObjectExpression": "first",
            "SwitchCase": 1
          }
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/member-ordering": [
          "error",
          {
            "default": [
              "public-static-field",
              "protected-static-field",
              "private-static-field",
              "public-instance-field",
              "protected-instance-field",
              "private-instance-field",
              "public-abstract-field",
              "protected-abstract-field",
              "private-abstract-field",
              "public-static-method",
              "protected-static-method",
              "private-static-method",
              "public-instance-method",
              "protected-instance-method",
              "private-instance-method",
              "public-abstract-method",
              "protected-abstract-method",
              "private-abstract-method"
            ]
          }
        ],
        "@typescript-eslint/no-shadow": [
          "error",
          {
            "hoist": "functions"
          }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-function-type": "off",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/quotes": [
          "error",
          "single",
          {
            "avoidEscape": true,
            "allowTemplateLiterals": true
          }
        ],
        "semi": "off",
        "@typescript-eslint/semi": [
          "error",
          "always"
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        // "@typescript-eslint/undefined-signatures": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-loss-of-precision": "off",
        // "@typescript-eslint/no-unused-vars": [
        //     "error",
        //     {
        //         "args": "none"
        //     }
        // ],
        "array-bracket-spacing": "error",
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "arrow-parens": [
            "off",
            "as-needed"
        ],
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "brace-style": "error",
        "camelcase": "error",
        "capitalized-comments": "off",
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "curly": "error",
        "default-case": "error",
        // "default-param-list": "warn",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        // "full-call-spacing": "error",
        "function-call-argument-newline": [
            "error",
            "consistent"
        ],
        "function-paren-newline": [
            "error",
            "consistent"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "undefined"
        ],
        "id-match": "error",
        "implicit-arrow-linebreak": "off",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "new-parens": "error",
        "newline-per-chained-call": [
            "warn",
            {
                "ignoreChainWithDepth": 3
            }
        ],
        "no-bitwise": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error"
        ],
        "no-debugger": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-empty-function": [
            "error",
            {
                "allow": [
                    "arrowFunctions",
                    "constructors"
                ]
            }
        ],
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-import-assign": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-multi-spaces": "error",
        // "no-multi-empty-lines": [
        //     "error",
        //     {
        //         "max": 1,
        //         "maxBOF": 0,
        //         "maxEOF": 1
        //     }
        // ],
        "no-new": "error",
        "no-new-wrappers": "error",
        "no-nested-ternary": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-restricted-globals": [
            "error",
            "fdescribe",
            "fit"
        ],
        // "no-redirected-imports": [
        //     "error",
        //     {
        //         "name": "@config/app-config.service",
        //         "message": "Please use '@config' instead."
        //     }
        // ],
        "no-sequences": "error",
        "no-shadow": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "off",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": [
            "error",
            {
                "allowTernary": true
            }
        ],
        "no-unused-labels": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-escape": "off",
        "no-useless-rename": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "warn",
        // "object-curly-spacing": [
        //     "error",
        //     "never"
        // ],
        "object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": true
            }
        ],
        "operator-linebreak": "error",
        "padded-blocks": [
            "off",
            "never"
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "all"
            }
        ],
        "prefer-rest-params": "error",
        "radix": "error",
        "rest-spread-spacing": "error",
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "error",
        // "space-before-function-parent": [
        //     "error",
        //     {
        //         "anonymous": "always",
        //         "named": "newer",
        //         "asyncArrow": "always"
        //     }
        // ],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": [
            "error",
            {
                "words": true
            }
        ],
        "switch-colon-spacing": "error",
        "template-curly-spacing": "error",
        "@angular-eslint/component-selector": [
            "error",
            {
            //   "prefix": "app",
              "style": "kebab-case",
              "type": "element"
            }
        ],
        "@angular-eslint/directive-selector": [
            "error",
            {
                "prefix": "app",
                "style": "camelCase",
                "type": "attribute"
            }
        ],
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/no-host-metadata-property": "error",
        "@angular-eslint/no-attribute-decorator": "error",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "@angular-eslint/no-output-native": "error",
        "@angular-eslint/no-pipe-impure": "error",
        "@angular-eslint/no-conflicting-lifecycle": "error",
        "@angular-eslint/use-component-selector": "error",
        "@angular-eslint/no-queries-metadata-property": "error",
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/directive-class-suffix": "error",
        // "@angular-eslint/prefer-on-push-component-change-detection": "error",
        // "@angular-eslint/template/accessibility-all-text": "error",
        "@angular-eslint/template/accessibility-elements-content": "off",
        "@angular-eslint/template/accessibility-label-for": [
            "off",
            {
                "controlComponents": []
            }
        ],
        "@angular-eslint/template/click-events-have-key-events": "off",
        "@angular-eslint/template/no-autofocus": "off",
        "default-param-list": "off",
        "function-paren-newline": "off"
    }
};
