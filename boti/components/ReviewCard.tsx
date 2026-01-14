
import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../types';
import StarRating from './StarRating';

interface ReviewCardProps {
  resource: Resource;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ resource }) => {
  return (
    <article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col h-full">
      <div className="aspect-video relative overflow-hidden bg-slate-100">
        <img src={resource.logo} alt={resource.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm">
          <StarRating rating={resource.rating} />
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-indigo-50 text-indigo-600 tracking-wide">
            {resource.category.replace('-', ' ')}
          </span>
          <time className="text-xs text-slate-400">{resource.publishDate}</time>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{resource.name} Review</h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {resource.detailedReview.intro}
        </p>
        <div className="mt-auto">
          <Link
            to={`/reviews/${resource.slug}`}
            className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 gap-1 group/link"
          >
            Read Full Review
            <svg className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
