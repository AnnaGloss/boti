
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto py-20 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Сотрудничество</h1>
        <p className="text-xl text-slate-500">Напишите нам, если вам нужна реклама</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-12 shadow-sm text-center space-y-8">
        <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-indigo-600">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.81 7.74-3.35 3.69-1.54 4.45-1.81 4.95-1.81.11 0 .36.03.52.16.13.11.17.26.19.37.02.1.03.22.02.34z"/>
          </svg>
        </div>
        
        <p className="text-slate-600 max-w-sm mx-auto">
          Мы открыты для предложений по размещению рекламы, партнерских материалов и интеграций. Самый быстрый способ связи — Telegram.
        </p>

        <a 
          href="https://t.me/annaradoniy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200"
        >
          Написать в Telegram
        </a>
      </div>

      <div className="text-center text-sm text-slate-400">
        Мы обычно отвечаем в течение нескольких часов.
      </div>
    </div>
  );
};

export default Contact;
