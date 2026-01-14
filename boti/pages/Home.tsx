
// Import React to support React.FC namespace usage
import React from 'react';
import { categories, resources } from '../data';
import ResourceRow from '../components/ResourceRow';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Block */}
      <section className="text-center py-12 md:py-20 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Каталог экспертных обзоров цифровых ресурсов
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Ориентируйтесь в сложном мире SaaS и цифровых инструментов с помощью нашей аналитической витрины. Мы отбираем только эффективные платформы для вашего роста.
        </p>
      </section>

      {/* Categories & Showcase */}
      <div className="space-y-20">
        {categories.map((category) => {
          const categoryResources = resources.filter(r => r.category === category.id);
          
          return (
            <section key={category.id} className="space-y-8 scroll-mt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-indigo-600 pl-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{category.name}</h2>
                  <p className="text-slate-500 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {categoryResources.map((resource) => (
                  <ResourceRow key={resource.id} resource={resource} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* SEO Info Section */}
      <section className="bg-slate-900 text-slate-300 rounded-3xl p-8 md:p-12 mt-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">Почему стоит доверять нашему каталогу?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-indigo-400 mb-2">Непредвзятая оценка</h4>
              <p className="text-sm leading-relaxed">Мы не принимаем оплату за места в рейтинге. Наши баллы основаны на реальной производительности, отзывах пользователей и технических характеристиках.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-400 mb-2">Ежедневные обновления</h4>
              <p className="text-sm leading-relaxed">Мир софта меняется быстро. Наша команда ежедневно мониторит релизы и изменения цен, чтобы поддерживать актуальность каталога.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;