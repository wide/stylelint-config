# Stylelint config

> The recommended stylelint config for scss files.

It turns on all the [_possible errors_](https://stylelint.io/user-guide/rules#possible-errors) rules within stylelint.

- **SCSS Property**: Use [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss) plugin and [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss) config. 

- **Property Ordering**: Extends `stylelint-config-property-sort-order-smacss`. Refer to [here](https://github.com/cahamilton/css-property-sort-order-smacss/blob/master/index.js) for the comprehensive list of property orders.

## Installation

```bash
npm install stylelint stylelint-scss stylelint-config-property-sort-order-smacss stylelint-order @wide/stylelint-config --save-dev
```

## Usage

If you've installed `@wide/stylelint-config` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@wide/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, turn off the `block-no-empty` rule, and add the `unit-allowed-list` rule:

```json
{
  "extends": "@wide/stylelint-config",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends"]
      }
    ],
    "block-no-empty": null,
    "unit-allowed-list": ["em", "rem", "s"]
  }
}
```

### Stylelint CLI
Use Stylelint CLI to check the supported files. Drop this line into your package.json and customize it as your needs:

```json
{
  "scripts": {
    "lint:scss": "stylelint src/**/*.scss --formatter verbose"
  }
}
```

## Thanks
- [stylelint](https://github.com/stylelint/stylelint)
- [stylelint-config-property-sort-order-smacss](https://github.com/cahamilton/stylelint-config-property-sort-order-smacss)
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

## Authors

- **Aymeric Assier** - [github.com/myeti](https://github.com/myeti)
- **Julien Martins Da Costa** - [github.com/jdacosta](https://github.com/jdacosta)

### Contributors

- **Sébastien Robillard** - [github.com/robiseb](https://github.com/robiseb)

## License

This project is licensed under the MIT License - see the [licence](licence) file for details
