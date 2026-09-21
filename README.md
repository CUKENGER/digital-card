# Digital Card

Интерактивная backend-визитка (портфолио) разработчика на **NestJS 11**, **GraphQL (Apollo Server)**, **Prisma ORM** и **PostgreSQL**.

API предоставляет структурированную информацию о профиле, стеке навыков, коммерческом опыте работы и проектах.

---

## Стек технологий

- **Runtime & Language**: Node.js (v20+), TypeScript
- **Framework**: NestJS 11 (Code-First GraphQL)
- **API**: GraphQL, Apollo Server 5
- **База данных & ORM**: PostgreSQL 16, Prisma ORM
- **Валидация и безопасность**: Helmet, Joi
- **Инфраструктура & DevOps**: Docker (Multi-stage build), Docker Compose, Makefile

---

## Быстрый старт

Проект полностью контейнеризирован и разделен на два режима: **Development** (с hot-reload через volume-маппинг) и **Production** (изолированная легковесная сборка).

### Требования
- Docker и Docker Compose v2+
- `make` (утилита сборщика)

---

### Запуск через Makefile

```bash
# 1. Запуск окружения разработки (Development)
make dev-build
```

```bash
# 2. Применить миграции и запустить сиды (если запускаете впервые)
make migrate-dev
make seed-dev
```

```bash
# 3. Просмотр логов
make dev-logs
```

Для production-запуска:
```bash
# Сборка и запуск продакшен-образов
make prod-build
```

```bash
# Просмотр prod логов
make prod-logs
```

---

## Полезные команды `Makefile`

| Команда | Описание |
|---|---|
| `make dev` | Запустить dev-контейнеры в фоне |
| `make dev-build` | Пересобрать и поднять dev-окружение |
| `make dev-down` | Остановить контейнеры разработки |
| `make dev-logs` | Стриминг логов dev-контейнеров |
| `make dev-shell` | Войти в терминал контейнера приложения |
| `make migrate-dev` | Накатить миграции базы данных в dev |
| `make seed-dev` | Заполнить БД первоначальными данными (сиды) |
| `make prisma-studio` | Запустить веб-интерфейс Prisma Studio |
| `make prod-build` | Собрать оптимизированный production-образ и запустить |
| `make prod-down` | Остановить production-контейнеры |
| `make clean-dev` | Остановить dev и полностью очистить тома БД |

---

## GraphQL API

    Локальный эндпоинт: http://localhost:3000/graphql

### Пример запроса данных профиля

```graphql

query GetFullProfile {
  profile {
    id
    name
    description
    links {
      label
      url
    }
    skills {
      name
    }
    experience {
      company
      position
      startDate
      endDate
      achievements
    }
    projects {
      name
      url
    }
  }
}
```

## Переменные окружения

Для локальной работы без контейнеров или кастомизации параметров создайте файлы .env.development и .env.production на основе конфигурации:

```env
# База данных
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/digital_card?schema=public"

# Настройки сервера
PORT=3000
NODE_ENV=development
```
