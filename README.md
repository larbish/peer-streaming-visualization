# Contact info

Baptiste Leproux

Mail: leproux.baptiste@gmail.com

# Coding style

Typescript is used in a restrictive way thanks to TSLint.

All complexe objects are defined in src/models, I do not authorize 'any' type and all variables, response, params must be typed

In project context:

- I create a common project containing only data models
- I publish it on a repository manager in order to share it with all other projects (fronts and apis)

## Linter

For this test purpose I am using TSlint even if i know it has been decrecated.
FI: Angular starter generate with ng cli still use tslint, Eslint gonna be available in v10
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

# Styles

## Toolkit

Use [bootstrap](https://getbootstrap.com/) and [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/)

## Data visualization

Use [ngx-charts](https://github.com/swimlane/ngx-charts)

# How to use this project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
