# Webpack TS React App

## О приложении 
Это будет большое [React](https://react.dev/) приложение построенное на [Webpack](https://webpack.js.org/) с нуля. 
В нем будет тестирование, [Storybook](https://storybook.js.org/) и многое другое.
Приложение строится на архитектуре [FSD](https://feature-sliced.design/ru/)

## Добавлено и реализовано

## Webpack
Конфигурация webpack настроена с нуля.
### Плагины
- [ProgressPlugin](https://webpack.js.org/plugins/progress-plugin/) - прогресс
- [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) - переменные
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) - HTML
- [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) - извлекает CSS в отдельные файлы
- [ReactRefreshWebpackPlugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) - расширяет Hot Reloading
- [BundleAnalyzerPlugin](https://github.com/webpack-contrib/webpack-bundle-analyzer) - для анализа бандла

### Лоадеры
- [ts-loader](https://webpack.js.org/guides/typescript/) - TypeScript
- [file-loader](https://v4.webpack.js.org/loaders/file-loader/) -  разрешает импорт в файлов в URL
- [@svgr/webpack](https://react-svgr.com/docs/webpack/) - SVG как React компонент
- [MiniCssExtractPlugin.loader](https://webpack.js.org/plugins/mini-css-extract-plugin/) - извлекает CSS в отдельные файлы Sourcemaps
- [sass-loader, style-loader, css-loader ](https://webpack.js.org/loaders/sass-loader/) - работа со стилями, SCSS, СSS modules

## Интернационализация
[i18next](https://www.i18next.com/)

## React 
[React](https://react.dev/)

[//]: # (suspense)
[//]: # (lazy components)

## Стейт
useContext для тем
redux/toolkit 
## Кодстайл
- [Eslint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)

## Тесты 
- [Jest](https://jestjs.io/ru/) (unit)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (компонентное)
- [Loki](https://loki.js.org/) (скриншетное)

## Storybook
[Storybook](https://storybook.js.org/) для создания библиотеки компонентов и их тестирования

## CI Pipeline
Добавлен CI с прогоном линтеров и тестов. 
Пока без Loki - не работает, есть открытые проблемы

## Скрипты
### Запуск приложения с дев сервером
```bash
npm start
```

### Запуск фейковый бэкекенд и приложение с дев сервером
```bash
npm start start:dev
```

### Запуск фейковый бэкекенд
```bash
npm start start:dev:server
```

### Прод сборка
```bash
npm run build:prod
```

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

### Получение отчетов скриншетных тестов в виде JSON
```bash
npm run test:ui:json
```

### Получение отчетов скриншетных тестов в виде HTML
```bash
npm run test:ui:html
```

### Получение отчетов скриншетных тестов в виде HTML и JSON
```bash
npm run test:ui:report
```

### Storybook
```bash
npm run storybook
```
### Storybook сборка
```bash
npm run storybook:build
```



