# Digital Card

Backend-визитка на NestJS + Prisma + GraphQL.

## Запуск

```bash
docker compose up --build
```

Apollo Sandbox: [https://digital-card.dns.army/graphql](https://digital-card.dns.army/graphql)

## Пример запроса

```graphql
query {
  profile {
    name
    description
    links { label url }
    skills { name }
    experience { company position achievements }
    projects { name url }
  }
}
```

## Стек
Git, TypeScript, Node.js, NestJS, Prisma, GraphQL, Docker.
