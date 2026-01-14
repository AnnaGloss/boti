
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">О нашем каталоге</h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Мы помогаем преодолеть разрыв между сложными техническими характеристиками софта и реальными потребностями бизнеса.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Наша миссия</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Наша цель — обеспечить прозрачность на рынке SaaS. В условиях, когда ежегодно запускаются тысячи новых инструментов, мы помогаем ЛПР находить качественные ресурсы без лишних затрат времени на пробы и ошибки.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Система оценки</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Каждый ресурс оценивается по 15 критериям, включая производительность, безопасность, прозрачность ценообразования и скорость ответа техподдержки. Наш рейтинг — это взвешенное среднее этих показателей.
          </p>
        </div>
      </div>

      <section className="bg-white rounded-3xl p-10 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Методология экспертов</h2>
        <div className="space-y-6 text-slate-600">
          <p>
            В отличие от автоматических агрегаторов, наши обзоры пишутся экспертами, которые проводят не менее 20 часов «руками» в каждом инструменте. Мы проверяем все заявления вендоров и сверяем их с реальным пользовательским опытом.
          </p>
          <p>
            Порядок ресурсов в наших списках определяется сочетанием текущей популярности и нашего внутреннего «Коэффициента эффективности», который измеряет качество результата относительно стоимости подписки.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
