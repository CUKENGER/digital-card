# --- Базовый образ ---
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/

# --- Режим разработки ---
FROM base AS dev
RUN npm ci
RUN npx prisma generate
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

# --- Сборка приложения ---
FROM base AS builder
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

# --- Production образ ---
FROM node:20-alpine AS prod
WORKDIR /app

COPY package*.json ./
# Ставим только prod-зависимости + глобально prisma и tsx для миграций и сидов
RUN npm ci --omit=dev && npm i -g prisma tsx

# Копируем билд и сгенерированный клиент Prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY prisma ./prisma

EXPOSE 3000

# Автоматический накат миграций, сидирование и запуск NestJS
CMD ["sh", "-c", "prisma migrate deploy && npx prisma db seed && node dist/main"]
