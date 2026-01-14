
// Import React to support React.FC namespace usage
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs">
                E
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-800">ExpertReview</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Глубокие и непредвзятые обзоры инструментов, которые формируют современную цифровую экономику. Помогаем принимать верные решения.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Витрина</Link></li>
              <li><Link to="/reviews" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Все обзоры</Link></li>
              <li><Link to="/about" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Методология</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Правовая информация</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/contacts" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Контакты</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} ExpertReview. Все права защищены.</p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-400 uppercase tracking-widest">SEO Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;