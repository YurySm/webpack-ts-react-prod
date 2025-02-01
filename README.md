# Webpack TS React App

## О приложении 
Это будет большое React приложение построенное на [Webpack](https://webpack.js.org/) с нуля. В нем будет тестирование, Storybook и многое другое

## Скрипты
### Запуск приложения с дев сервером
```bash
npm start
```

### Прод сборка
```bash
npm run build:prod
```
_Для остановки анализатора нажмите <kbd>Ctrl</kbd> + <kbd>C</kbd>_

### Дев сборка
```bash
npm run build:dev
```
_Для остановки анализатора нажмите <kbd>Ctrl</kbd> + <kbd>C</kbd>_

### Eslint
```bash
npm run lint:ts
```
### Eslint с исправлением
```bash
npm run lint:ts:fix
```

### Stylelint
```bash
npm run lint:scss
```
### Stylelint с исправлением
```bash
npm run lint:scss:fix
```

### Запуск unit тестов
```bash
npm run test:unit
```

### Запуск скриншетных тестов
```bash
npm run test:ui
```

### Запуск применения новых скринов для тестов
```bash
npm run test:ui:ok
```

### Storybook
```bash
npm run storybook
```
### Storybook сборка
```bash
npm run storybook:build
```

## Добавлено и реализовано

## Webpack
Конфигурация webpack настроена с нуля.
### Плагины
 - [ProgressPlugin](https://webpack.js.org/plugins/progress-plugin/) - прогресс
 - [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) - переменные
 - [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) - HTML
 - [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) - извлекает CSS в отдельные файлы Sourcemaps
 - [ReactRefreshWebpackPlugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) - расширяет Hot Reloading
 - [BundleAnalyzerPlugin](https://github.com/webpack-contrib/webpack-bundle-analyzer) - для анализа бандла

### Лоадерв
- [ts-loader](https://webpack.js.org/guides/typescript/) - TypeScript
- [file-loader](https://v4.webpack.js.org/loaders/file-loader/) -  разрешает импорт в файлов в URL
- [@svgr/webpack](https://react-svgr.com/docs/webpack/) - SVG как React компонент
- [MiniCssExtractPlugin.loader](https://webpack.js.org/plugins/mini-css-extract-plugin/) - извлекает CSS в отдельные файлы Sourcemaps
- [sass-loader, style-loader, css-loader ](https://webpack.js.org/loaders/sass-loader/) - работа со стилями, SCSS, СSS modules

## i18next
i18next

## react
suspense

## Кодстайл
- Eslint
- Stylelint
- Prettier

## Тесты
 - Jest (unit)
 - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (компонентное)
 - Loki (скриншетное)

## Storybook
[Storybook](https://storybook.js.org/) для создания библиотеки компонентов и их тестирования




