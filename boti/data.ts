
import { Resource, Category } from './types';

// 1. РЕДАКТИРОВАНИЕ КАТЕГОРИЙ
export const categories: Category[] = [
  { id: 'ai', name: 'Нейросети и AI', description: 'Лучшие инструменты на базе искусственного интеллекта для работы и творчества.' },
  { id: 'design', name: 'Дизайн и Графика', description: 'Профессиональное ПО для дизайнеров, иллюстраторов и UI/UX специалистов.' },
  { id: 'marketing', name: 'Маркетинг и SEO', description: 'Сервисы для продвижения бизнеса, анализа конкурентов и поисковой оптимизации.' },
  { id: 'dev', name: 'Разработка и IT', description: 'Инструменты для программистов, облачные решения и системы управления кодом.' },
  { id: 'finance', name: 'Финансы и Финтех', description: 'Платформы для управления капиталом, криптобиржи и учетные системы.' },
  { id: 'edu', name: 'Образование', description: 'Онлайн-курсы, платформы для обучения и саморазвития.' },
  { id: 'crm', name: 'CRM и Управление', description: 'Системы для автоматизации продаж и управления проектами.' },
  { id: 'analytics', name: 'Аналитика данных', description: 'Инструменты для сбора и визуализации бизнес-метрик.' },
  { id: 'content', name: 'Создание контента', description: 'Сервисы для видеомонтажа, написания текстов и работы с аудио.' },
  { id: 'security', name: 'Безопасность', description: 'Антивирусы, VPN и системы защиты корпоративных данных.' }
];

// 2. РЕДАКТИРОВАНИЕ РЕСУРСОВ (ОФФЕРОВ)
// Просто копируйте блоки { ... } ниже, чтобы добавить новые сайты
export const resources: Resource[] = [
  {
    id: 'ai-1',
    slug: 'resource-ai-1',
    name: 'Neural Writer Pro', // Название сайта
    logo: 'https://picsum.photos/id/101/200/200', // Ссылка на логотип
    rating: 4.9, // Рейтинг (число)
    externalUrl: 'https://example.com', // Ваша партнерская ссылка
    category: 'ai', // ID категории (должен совпадать с id из списка выше)
    shortDescription: 'Продвинутый генератор контента с поддержкой SEO и множества языков.', // Короткое описание
    publishDate: '2024-05-20',
    detailedReview: {
      intro: 'Neural Writer Pro — это современный взгляд на создание текстов.', // Вводный текст обзора
      fullDescription: 'Здесь вы можете написать очень длинный текст обзора. Он будет отображаться на отдельной странице.', // Полный текст
      advantages: [
        'Быстрая генерация',
        'Высокое качество',
        'Поддержка русского языка'
      ],
      targetAudience: 'Копирайтеры, маркетологи и владельцы сайтов.',
      summary: 'Лучший выбор для тех, кто ценит время и качество контента.',
      parameters: [
        { label: 'Язык', value: 'Русский / English' },
        { label: 'Цена', value: 'От $19/мес' },
        { label: 'Сложность', value: 'Легко' }
      ]
    }
  },
  {
    id: 'ai-2',
    slug: 'resource-ai-2',
    name: 'GPT Helper',
    logo: 'https://picsum.photos/id/102/200/200',
    rating: 4.7,
    externalUrl: 'https://example.com',
    category: 'ai',
    shortDescription: 'Удобный ассистент для повседневных задач и кодинга.',
    publishDate: '2024-05-21',
    detailedReview: {
      intro: 'Ваш личный помощник в мире искусственного интеллекта.',
      fullDescription: 'Описание второго ресурса...',
      advantages: ['Умный поиск', 'Помощь с кодом'],
      targetAudience: 'Программисты и студенты.',
      summary: 'Незаменимый инструмент для работы с информацией.',
      parameters: [
        { label: 'Язык', value: 'English' },
        { label: 'Цена', value: 'Бесплатно' },
        { label: 'Сложность', value: 'Средне' }
      ]
    }
  },
  {
    id: 'ai-3',
    slug: 'resource-ai-3',
    name: 'GPT Helper',
    logo: 'https://picsum.photos/id/102/200/200',
    rating: 4.7,
    externalUrl: 'https://example.com',
    category: 'ai',
    shortDescription: 'Удобный ассистент для повседневных задач и кодинга.',
    publishDate: '2024-05-21',
    detailedReview: {
      intro: 'Ваш личный помощник в мире искусственного интеллекта.',
      fullDescription: 'Описание второго ресурса...',
      advantages: ['Умный поиск', 'Помощь с кодом'],
      targetAudience: 'Программисты и студенты.',
      summary: 'Незаменимый инструмент для работы с информацией.',
      parameters: [
        { label: 'Язык', value: 'English' },
        { label: 'Цена', value: 'Бесплатно' },
        { label: 'Сложность', value: 'Средне' }
      ]
    }
  },
  {
    id: 'ai-4',
    slug: 'resource-ai-4',
    name: 'GPT Helper',
    logo: 'https://picsum.photos/id/102/200/200',
    rating: 4.7,
    externalUrl: 'https://example.com',
    category: 'ai',
    shortDescription: 'Удобный ассистент для повседневных задач и кодинга.',
    publishDate: '2024-05-21',
    detailedReview: {
      intro: 'Ваш личный помощник в мире искусственного интеллекта.',
      fullDescription: 'Описание второго ресурса...',
      advantages: ['Умный поиск', 'Помощь с кодом'],
      targetAudience: 'Программисты и студенты.',
      summary: 'Незаменимый инструмент для работы с информацией.',
      parameters: [
        { label: 'Язык', value: 'English' },
        { label: 'Цена', value: 'Бесплатно' },
        { label: 'Сложность', value: 'Средне' }
      ]
    }
  },
  {
    id: 'ai-5',
    slug: 'resource-ai-5',
    name: 'GPT Helper',
    logo: 'https://picsum.photos/id/102/200/200',
    rating: 4.7,
    externalUrl: 'https://example.com',
    category: 'ai',
    shortDescription: 'Удобный ассистент для повседневных задач и кодинга.',
    publishDate: '2024-05-21',
    detailedReview: {
      intro: 'Ваш личный помощник в мире искусственного интеллекта.',
      fullDescription: 'Описание второго ресурса...',
      advantages: ['Умный поиск', 'Помощь с кодом'],
      targetAudience: 'Программисты и студенты.',
      summary: 'Незаменимый инструмент для работы с информацией.',
      parameters: [
        { label: 'Язык', value: 'English' },
        { label: 'Цена', value: 'Бесплатно' },
        { label: 'Сложность', value: 'Средне' }
      ]
    }
  }
  // Добавьте сюда еще 98 объектов по аналогии...
];
