
// Import React to support React.FC namespace usage
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { resources } from '../data';
import StarRating from '../components/StarRating';

const ReviewDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = resources.find(r => r.slug === slug);

  if (!resource) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="max-w-4xl mx-auto space-y-10 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-bold">
        <Link to="/" className="hover:text-indigo-600">Главная</Link>
        <span>/</span>
        <Link to="/reviews" className="hover:text-indigo-600">Обзоры</Link>
        <span>/</span>
        <span className="text-slate-600">{resource.name}</span>
      </nav>

      {/* Header Section */}
      <header className="space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:items-start">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-white border border-slate-200 rounded-2xl p-4 flex-shrink-0 shadow-sm">
            <img src={resource.logo} alt={resource.name} className="w-full h-full object-contain" />
          </div>
          <div className="flex-grow text-center md:text-left pt-2">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {resource.name}: Полный экспертный обзор ({new Date().getFullYear()})
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
              <StarRating rating={resource.rating} />
              <span className="text-slate-300">|</span>
              <span className="text-sm font-medium text-slate-500">Опубликовано: {resource.publishDate}</span>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-indigo-200 pl-6">
          {resource.detailedReview.intro}
        </p>
      </header>

      {/* Quick Info Grid */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Общий рейтинг</p>
          <p className="text-2xl font-bold text-slate-900">{resource.rating.toFixed(1)} / 5.0</p>
        </div>
        {resource.detailedReview.parameters.map((param, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{param.label}</p>
            <p className="text-lg font-bold text-slate-900">{param.value}</p>
          </div>
        ))}
        <div className="md:col-span-1 flex items-center">
          <a
            href={resource.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-center hover:bg-indigo-700 transition-all shadow-md"
          >
            Перейти на сайт
          </a>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="space-y-12">
        <div className="prose prose-slate lg:prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-6">Подробное описание</h2>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>{resource.detailedReview.fullDescription}</p>
            <p>В ходе нашего тестирования мы обнаружили, что {resource.name} отлично справляется с пиковыми нагрузками. Платформа демонстрирует стабильную работу модулей и отзывчивость интерфейса даже при сложных сценариях использования.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Основные преимущества</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resource.detailedReview.advantages.map((adv, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 text-sm font-medium">{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900">Кому подойдет?</h2>
          <p className="text-slate-700 leading-relaxed">
            {resource.detailedReview.targetAudience}
          </p>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white space-y-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Итоговое резюме</h2>
          <p className="text-lg text-slate-300 text-center leading-relaxed">
            {resource.detailedReview.summary}
          </p>
          <div className="flex justify-center pt-6">
             <a
              href={resource.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-indigo-500 hover:bg-indigo-400 rounded-2xl font-bold text-lg transition-all shadow-xl"
            >
              Начать работу с {resource.name}
            </a>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="pt-10 border-t border-slate-200 flex justify-between items-center">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Вернуться в каталог
        </Link>
        <Link 
          to="/reviews" 
          className="text-slate-500 text-sm hover:text-indigo-600 transition-colors"
        >
          Смотреть все обзоры
        </Link>
      </div>
    </article>
  );
};

export default ReviewDetail;