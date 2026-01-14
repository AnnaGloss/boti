
// Import React to support React.FC namespace usage
import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../types';
import StarRating from './StarRating';

interface ResourceRowProps {
  resource: Resource;
}

const ResourceRow: React.FC<ResourceRowProps> = ({ resource }) => {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 p-4 md:p-6 hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-6">
      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-slate-50 rounded-lg overflow-hidden border border-slate-100">
        <img src={resource.logo} alt={resource.name} className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="flex-grow text-center md:text-left">
        <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">{resource.name}</h3>
        <p className="text-sm text-slate-500 line-clamp-2 max-w-xl mb-3">
          {resource.shortDescription}
        </p>
        <div className="flex justify-center md:justify-start">
          <StarRating rating={resource.rating} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
        <Link
          to={`/reviews/${resource.slug}`}
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors text-center"
        >
          Обзор
        </Link>
        <a
          href={resource.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors text-center"
        >
          Перейти
        </a>
      </div>
    </div>
  );
};

export default ResourceRow;