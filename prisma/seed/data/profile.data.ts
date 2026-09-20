import type { Prisma } from '@prisma/client';

export const profileSeedData: Prisma.ProfileCreateInput = {
  name: 'Андрей Чувашов',
  description: 'Fullstack Developer (Node.js / TypeScript / React / Next.js)',
  links: {
    create: [
      {
        label: 'GitHub',
        url: 'https://github.com/CUKENGER',
      },
    ],
  },
  skills: {
    create: [
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'PostgreSQL' },
      { name: 'Prisma ORM' },
      { name: 'GraphQL' },
      { name: 'Redis' },
      { name: 'RabbitMQ' },
      { name: 'ClickHouse' },
      { name: 'Docker' },
      { name: 'Google Cloud Platform (GCP)' },
      { name: 'Vertex AI' },
      { name: 'Grafana' },
      { name: 'CI/CD' },
    ],
  },
  experience: {
    create: [
      {
        company: 'FinTech Solutions',
        position: 'Fullstack-разработчик',
        startDate: new Date('2024-06-01'),
        endDate: null,
        achievements: [
          'Спроектировал и реализовал сервис каскадной верификации пользователей (SMS, Flash-call, Telegram-боты) с антифрод-защитой от брутфорса и админ-панелью для управления таймаутами и приоритетами провайдеров',
          'Разработал биллинговый движок рекуррентных платежей: поддержка тарифов, триалов, dunning-механики при отказах банков, контроль идемпотентности вебхуков и фискализация чеков',
          'Построил Event-Driven архитектуру фоновых задач на базе RabbitMQ и Pub/Sub, внедрил Redis для кэширования, сессий и rate limiting',
          'Разработал конвейер агрегации событий в ClickHouse для аналитики в реальном времени, оптимизировал тяжелые выборки и настроил мониторинг в Grafana',
          'Разработал и развивал внутреннюю CRM-систему операторов по маршрутизации и экспорту лидов',
          'Построил платформу на Next.js + Headless CMS (Strapi) для A/B-тестирования продуктовых гипотез и разработал отказоустойчивые лендинги под рынок США',
          'Спроектировал модульный UI Kit для унификации клиентских интерфейсов и внутренних панелей',
        ],
      },
      {
        company: 'Rifify',
        position: 'Fullstack-разработчик',
        startDate: new Date('2022-04-01'),
        endDate: new Date('2024-06-01'),
        achievements: [
          'Участвовал в проектировании архитектуры и выводе на рынок B2B и Enterprise SaaS продуктов полного цикла',
          'Проектировал и реализовывал строго типизированные GraphQL API для взаимодействия фронтенда с бэкенд-сервисами',
          'Проектировал схемы баз данных PostgreSQL, оптимизировал транзакции, сложные запросы и индексы',
          'Внедрил сквозную валидацию входящих запросов и конфигураций окружения с использованием библиотеки Joi',
          'Разворачивал и сопровождал облачную инфраструктуру GCP: Cloud Run, Cloud SQL, Cloud Storage и политики IAM',
          'Интегрировал сервисы Google Cloud Vertex AI в продуктовые сценарии для автоматизации обработки данных',
          'Настроил пайплайны CI/CD, стандартизировал линтинг, проверку типов и контейнеризацию приложений с Docker',
        ],
      },
    ],
  },
  projects: {
    create: [
      {
        name: 'Digital Card',
        url: 'https://github.com/CUKENGER/digital-card',
      },
    ],
  },
};
