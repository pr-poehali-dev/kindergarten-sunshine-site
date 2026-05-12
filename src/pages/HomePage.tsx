const heroImg = 'https://cdn.poehali.dev/projects/89bce8a3-ab08-4b2f-996f-9a545e53a8b6/files/1932c8b8-112e-4d8f-aaa3-13449fd66e15.jpg';
const classImg = 'https://cdn.poehali.dev/projects/89bce8a3-ab08-4b2f-996f-9a545e53a8b6/files/35328880-a178-40f6-9dd6-6a48a5b6b9f4.jpg';

const features = [
  { emoji: '🎨', title: 'Творческое развитие', desc: 'Рисование, лепка, аппликация — раскрываем таланты каждого ребёнка' },
  { emoji: '🌿', title: 'Экологическое воспитание', desc: 'Учим любить и беречь природу с раннего детства' },
  { emoji: '🧠', title: 'Умственное развитие', desc: 'Математика, логика, подготовка к школе по ФГОС' },
  { emoji: '🏃', title: 'Физическая активность', desc: 'Спортзал, бассейн, прогулки на свежем воздухе каждый день' },
  { emoji: '🎵', title: 'Музыкальное воспитание', desc: 'Пение, танцы, знакомство с музыкальными инструментами' },
  { emoji: '🍎', title: 'Здоровое питание', desc: 'Сбалансированное меню, 5 приёмов пищи, только свежие продукты' },
];

const news = [
  { date: '10 мая 2026', emoji: '🌸', title: 'Праздник весны и труда', desc: 'Наши воспитанники подготовили яркое выступление к празднику!' },
  { date: '5 мая 2026', emoji: '🎖️', title: 'День Победы', desc: 'Торжественная линейка и возложение цветов к мемориалу города.' },
  { date: '28 апреля 2026', emoji: '📚', title: 'День открытых дверей', desc: 'Приглашаем будущих воспитанников и их родителей познакомиться с садиком.' },
];

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 overflow-hidden rounded-3xl pb-10 mb-2">
        {/* Decorative shapes */}
        <div className="absolute top-4 right-8 text-5xl animate-float opacity-60">🌤️</div>
        <div className="absolute bottom-8 right-4 text-4xl animate-wiggle opacity-40">🦋</div>

        <div className="px-6 pt-8 pb-4 grid gap-6 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur rounded-full px-4 py-1.5 text-sm font-nunito font-700 text-orange-700 mb-4">
              🏆 Лучший детский сад района 2025
            </div>
            <h1 className="font-pacifico text-4xl lg:text-5xl text-white drop-shadow-md mb-4 leading-tight">
              Детский сад<br/>
              <span className="text-yellow-200">«Солнышко»</span>
            </h1>
            <p className="font-nunito font-600 text-white/90 text-lg mb-6 leading-relaxed">
              Место, где каждый ребёнок раскрывается, как цветок под лучами солнца. 
              Любовь, забота и творчество — каждый день! 🌻
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onPageChange('contacts')}
                className="bg-white text-orange-500 font-nunito font-800 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base"
              >
                🌱 Записать ребёнка
              </button>
              <button
                onClick={() => onPageChange('about')}
                className="bg-white/30 backdrop-blur text-white font-nunito font-700 px-6 py-3 rounded-2xl border-2 border-white/60 hover:bg-white/40 transition-all text-base"
              >
                Узнать больше →
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { val: '25+', label: 'лет работы' },
                { val: '250', label: 'воспитанников' },
                { val: '30+', label: 'педагогов' },
                { val: '10', label: 'групп' },
              ].map((s) => (
                <div key={s.val} className="bg-white/30 backdrop-blur rounded-2xl px-4 py-2 text-center">
                  <div className="font-pacifico text-2xl text-white">{s.val}</div>
                  <div className="text-xs font-nunito font-600 text-white/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60">
              <img src={heroImg} alt="Дети в садике" className="w-full h-72 lg:h-96 object-cover" />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-3 -left-3 bg-white rounded-2xl shadow-lg px-3 py-2 font-nunito font-700 text-sm text-green-600 animate-bounce-soft">
              ✅ Лицензировано МОН
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-lg px-3 py-2 font-nunito font-700 text-sm text-orange-500 animate-float">
              ⭐ Рейтинг 5/5
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10">
        <div className="text-center mb-10">
          <h2 className="font-pacifico text-3xl text-orange-500 mb-2">Наши программы</h2>
          <p className="font-nunito text-gray-600 text-lg">Всестороннее развитие с первых лет жизни</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-hover bg-white rounded-3xl p-6 border-2 border-yellow-100 shadow-md cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{f.emoji}</div>
              <h3 className="font-nunito font-800 text-gray-800 text-lg mb-2">{f.title}</h3>
              <p className="font-nunito text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-10 rounded-3xl">
        <div className="px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-pacifico text-3xl text-orange-500">Новости и объявления</h2>
            <button
              onClick={() => onPageChange('news')}
              className="font-nunito font-700 text-green-500 hover:text-green-600 flex items-center gap-1 text-sm"
            >
              Все новости →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {news.map((n, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl p-5 shadow-md border border-blue-100">
                <div className="text-3xl mb-3">{n.emoji}</div>
                <div className="text-xs font-nunito font-600 text-gray-400 mb-1.5">{n.date}</div>
                <h3 className="font-nunito font-800 text-gray-800 text-base mb-2">{n.title}</h3>
                <p className="font-nunito text-gray-500 text-sm leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom image + CTA */}
      <section className="py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src={classImg} alt="Занятие в группе" className="w-full h-72 object-cover" />
          </div>
          <div>
            <div className="text-4xl mb-4 animate-wiggle inline-block">🌟</div>
            <h2 className="font-pacifico text-3xl text-orange-500 mb-4">Запишите вашего ребёнка к нам!</h2>
            <p className="font-nunito text-gray-600 text-base leading-relaxed mb-6">
              Приходите к нам на день открытых дверей — познакомьтесь с педагогами, 
              увидите, как живут наши малыши, и убедитесь, что мы — семья! 🤗
            </p>
            <ul className="space-y-2 mb-6">
              {['Индивидуальный подход к каждому ребёнку', 'Опытные и любящие педагоги', 'Современная материально-техническая база', 'Безопасность и комфорт 24/7'].map((item) => (
                <li key={item} className="flex items-start gap-2 font-nunito text-gray-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onPageChange('contacts')}
              className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-nunito font-800 px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base"
            >
              📞 Связаться с нами
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}