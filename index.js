"use strict";

module.exports = {
  extends: "stylelint-config-property-sort-order-smacss",
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "at-rule-disallowed-list": ["debug"],
    "at-rule-empty-line-before": [
      "always",
      {
        "ignore": [
          "after-comment",
          "blockless-after-same-name-blockless",
          "first-nested"
        ],
        "ignoreAtRules": [
          "if",
          "else"
        ]
      }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "at-rule-property-required-list": {
      "font-face": [
        "font-display",
        "font-family",
        "font-style"
      ]
    },
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "block-no-empty": true,
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": [
      "always",
      {
        "ignoreAtRules": [
          "if",
          "else"
        ]
      }
    ],
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-after": "never-single-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-empty-line-before": "always",
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": "never",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties":  [
      true,
      {
        "ignore": ["consecutive-duplicates-with-different-values"]
      }
    ],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": [
      "always",
      {
        "except": [
          "after-comment",
          "after-declaration",
          "first-nested"
        ]
      }
    ],
    "declaration-property-value-disallowed-list": {
      "border": ["none"],
      "border-top": ["none"],
      "border-right": ["none"],
      "border-bottom": ["none"],
      "border-left": ["none"]
    },
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        "ignoreFontFamilies": [
          "/object-fit/",
          "/object-position/"
        ]
      }
    ],
    "font-weight-notation": "numeric",
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "indentation": 2,
    "keyframe-declaration-no-important": true,
    "keyframes-name-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "length-zero-no-unit": true,
    "linebreaks": "unix",
    "max-empty-lines": 1,
    "max-line-length": [
      140,
      {
        "ignore": [
          "comments"
        ],
        "ignorePattern": [
          "/^\\$[0-9,a-z]*/",
          "/^@error\\s+/",
          "/^@import\\s+/",
          "/^@use\\s+/",
          "/^@warn\\s+/",
          "/https?://[0-9,a-z]*.*/"
        ]
      }
    ],
    "max-nesting-depth": [
      5,
      {
        "ignoreAtRules": [
          "each",
          "media",
          "supports",
          "include"
        ]
      }
    ],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-eol-whitespace": true,
    "no-empty-first-line": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-duplicate-at-import-rules": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "never",
    "number-max-precision": 3,
    "number-no-trailing-zeros": true,
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend"
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        "declarations",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        "rules",
        {
          "type": "at-rule",
          "name": "include",
          "parameter": "bp",
          "hasBlock": true
        }
      ]
    ],
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-class-pattern": [
      "^[a-z0-9\\-]+$",
      {
        "message":
          "Selector should be written in lowercase with hyphens (selector-class-pattern)"
      }
    ],
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 3,
    "selector-max-class": 5,
    "selector-max-compound-selectors": 5,
    "selector-max-empty-lines": 0,
    "selector-max-id": 1,
    "selector-max-universal": 1,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "single",
    "time-min-milliseconds": 100,
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true,
    "scss/at-each-key-value-single-line": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-if-no-null": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-rule-conditional-no-parentheses": true,
    "scss/at-rule-no-unknown": true,
    "scss/comment-no-loud": true,
    "scss/declaration-nested-properties": "never",
    "scss/dimension-no-non-numeric-values": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-default": [
      true,
      {
        "ignore": ["local"]
      }
    ],
    "scss/dollar-variable-empty-line-after": [
      "always",
      {
        "except": [
          "last-nested",
          "before-dollar-variable"
        ]
      }
    ],
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        "except": [
          "after-comment",
          "after-dollar-variable",
          "first-nested"
        ]
      }
    ],
    "scss/dollar-variable-first-in-block": [
      true,
      {
        "ignore": [
          "comments",
          "imports"
        ],
        "except": [
          "function",
          "mixin",
          "root"
        ]
      }
    ],
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/double-slash-comment-empty-line-before": [
      "always",
      {
        "except": ["first-nested"],
        "ignore": ["between-comments"]
      }
    ],
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/function-color-relative": true,
    "scss/function-quote-no-quoted-strings-inside": true,
    "scss/function-unquote-no-unquoted-strings-inside": true,
    "scss/map-keys-quotes": "always",
    "scss/no-duplicate-dollar-variables": [
      true,
      {
        "ignoreInside": [
          "at-rule"
        ],
        "ignoreInsideAtRules": [
          "if",
          "else"
        ]
      }
    ],
    "scss/no-duplicate-mixins": true,
    "scss/no-global-function-names": true,
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,
    "scss/partial-no-import": true,
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/selector-nest-combinators": "always",
    "scss/selector-no-redundant-nesting-selector": true,
  }
};
