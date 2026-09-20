.DEFAULT_GOAL := help

DEV_COMPOSE := docker compose -f docker-compose.dev.yml
PROD_COMPOSE := docker compose -f docker-compose.prod.yml

.PHONY: help dev dev-build dev-down dev-logs dev-restart prod-build prod-down prod-logs prod-restart \
        migrate-dev seed-dev seed-prod db-dev-shell prisma-studio prisma-generate test lint format clean-dev

help: ## Показать список всех доступных команд
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# ==============================
# Development
# ==============================

dev: ## Запустить контейнеры разработки в фоне
	$(DEV_COMPOSE) up -d

dev-build: ## Пересобрать образы и запустить dev-окружение
	$(DEV_COMPOSE) up -d --build

dev-down: ## Остановить dev-контейнеры
	$(DEV_COMPOSE) down

dev-logs: ## Просмотр логов dev-окружения
	$(DEV_COMPOSE) logs -f

dev-logs-app: ## Просмотр логов только сервиса app (dev)
	$(DEV_COMPOSE) logs -f app

dev-restart: ## Перезапустить dev-сервисы
	$(DEV_COMPOSE) restart

dev-shell: ## Войти в bash/sh контейнера app
	$(DEV_COMPOSE) exec app sh

# ==============================
# Production
# ==============================

prod: ## Запустить prod-контейнеры
	$(PROD_COMPOSE) up -d

prod-build: ## Пересобрать и запустить production
	$(PROD_COMPOSE) up -d --build

prod-down: ## Остановить prod-контейнеры
	$(PROD_COMPOSE) down

prod-logs: ## Просмотр логов production
	$(PROD_COMPOSE) logs -f

prod-restart: ## Перезапустить prod-сервисы
	$(PROD_COMPOSE) restart

# =================
# Prisma & Database
# ==============================

migrate-dev: ## Создать и накатить новую миграцию в dev
	$(DEV_COMPOSE) exec app npx prisma migrate dev

seed-dev: ## Выполнить сиды для dev внутри контейнера
	$(DEV_COMPOSE) exec app npm run seed:dev

seed-prod: ## Выполнить сиды для prod внутри контейнера
	$(PROD_COMPOSE) exec app npm run seed:prod

prisma-generate: ## Перегенерировать Prisma Client в dev-контейнере
	$(DEV_COMPOSE) exec app npx prisma generate

prisma-studio: ## Запустить Prisma Studio локально
	npx prisma studio

db-dev-shell: ## Войти в PostgreSQL через psql (dev)
	$(DEV_COMPOSE) exec db psql -U postgres -d digital_card

# ==============================
# Code Quality & Tests
# ==============================

lint: ## Запустить линтер
	npm run lint

format: ## Отформатировать код с помощью Prettier
	npm run format

test: ## Запустить Jest-тесты
	npm run test

# ==============================
# Maintenance
# ==============================

clean-dev: ## Остановить dev и полностью удалить volumes БД (сброс данных)
	$(DEV_COMPOSE) down -v

clean-docker: ## Очистить неиспользуемые Docker образы и кэш
	docker system prune -f
