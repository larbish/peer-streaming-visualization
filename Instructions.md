# Contact info

Baptiste Leproux
mail: leproux.baptiste@gmail.com

# Coding style

## Linter

I am using TSlint even if i know it has been decrecated (angular starter generate with ng cli still use tslint, Eslint gonna be available in v10)
I like to use [airbnb good practice](https://www.npmjs.com/package/tslint-config-airbnb)
TsLint (tslint.json) | Use TsLint plugin on vscode

## Code formatter

Prettier (.prettierrc) | Use Prettier plugin on vscode

## IDE recommended settings for vscode

```
{
  "window.zoomLevel": 0,
  "editor.foldingStrategy": "indentation",
  "editor.insertSpaces": false,
  "editor.detectIndentation": false,
  "editor.tabSize": 4,
  "breadcrumbs.enabled": true,
  "terminal.integrated.rendererType": "dom",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.formatOnSave": true
}

```

## Git hooks

Use Husky for commit format, pre-commit and others commit lifecycles (.huskyrc.json)

# Tests

## End to end

Use Protractor with Jasmine

## Unit tests

Use Karma With Jasmine
