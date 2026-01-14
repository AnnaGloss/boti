
// Import React to support React.FC namespace usage
import React from 'react';
import { resources } from '../data';
import ReviewCard from '../components/ReviewCard';

const ReviewList: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      <section className="border-b border-slate-200 pb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Архив подробных обзоров</h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Глубокое погружение в каждый ресурс нашего каталога. Мы анализируем функции, цены и юзабилити, чтобы помочь вам сделать выбор.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ReviewCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;