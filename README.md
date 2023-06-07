# Экран "Оплата картой"

Ознакомиться можно на [netlify](https://payment-card-screen.netlify.app/)



```
Запуск проекта
   npm install - устанавливаем зависимости
   npm start - запуск в dev режиме
```
- [Экран "Оплата картой"](#экран-оплата-картой)
  - [Архитектура](#архитектура)
  - [Скрипты](#скрипты)
  - [Линтинг](#линтинг)
      - [Запуск линтеров](#запуск-линтеров)
---

## Архитектура

Экран написан в соответствии с методологией Feature sliced design.

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

Ссылка на другой мой проект по FSD - [production-project](https://github.com/OlegSkar1/production_project)

---

## Скрипты

- `npm run build:prod` - сборка в production режиме
- `npm run build:dev` - сборка в develop режиме
- `npm run build:analyze` - сборка в develop режиме с BundleAnalyzer для анализа размера бандла

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный `npm eslint plugin _eslint-plugin-olegskar-fsd-checker`,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

#### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---
