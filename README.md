# Digital Card

Backend-визитка на NestJS + Prisma + GraphQL.

## Запуск

\`\`\`bash
docker compose up --build
\`\`\`

Apollo Sandbox: http://localhost:3000/graphql

## Пример запроса

\`\`\`graphql
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
\`\`\`

## Стек
Git, TypeScript, Node.js, NestJS, Prisma, GraphQL, Docker.
