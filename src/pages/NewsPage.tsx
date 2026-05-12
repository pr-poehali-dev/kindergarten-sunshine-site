import { useState } from 'react';

const allNews = [
  {
    id: 1, date: '10 мая 2026', emoji: '🌸', category: 'Праздник',
    title: 'Праздник весны и труда',
    desc: 'Наши воспитанники подготовили яркое выступление к празднику! Дети танцевали, пели песни и радовали гостей своими талантами. Огромное спасибо родителям за поддержку и помощь в подготовке костюмов.',
    tag: 'event'
  },
  {
    id: 2, date: '5 мая 2026', emoji: '🎖️', category: 'Событие',
    title: 'День Победы',
    desc: 'Торжественная линейка и возложение цветов к мемориалу города. Воспитанники старших групп рассказали стихи о Великой Отечественной войне. Память героев будет жить вечно!',
    tag: 'event'
  },
  {
    id: 3, date: '28 апреля 2026', emoji: '📚', category: 'Объявление',
    title: 'День открытых дверей',
    desc: 'Приглашаем будущих воспитанников и их родителей познакомиться с детским садом. Вы сможете посетить занятия, познакомиться с педагогами и задать все интересующие вопросы.',
    tag: 'announcement'
  },
  {
    id: 4, date: '20 апреля 2026', emoji: '🎨', category: 'Творчество',
    title: 'Выставка детских рисунков «Весна идёт!»',
    desc: 'В холле детского сада открылась выставка рисунков наших воспитанников на тему весны. Все работы выполнены самостоятельно и поражают своей яркостью и фантазией.',
    tag: 'activity'
  },
  {
    id: 5, date: '15 апреля 2026', emoji: '🌿', category: 'Экология',
    title: 'Посадили деревья на участке',
    desc: 'В рамках экологической акции «Посади дерево» воспитанники средних и старших групп посадили молодые яблони и вишни на территории детского сада.',
    tag: 'activity'
  },
  {
    id: 6, date: '8 апреля 2026', emoji: '📋', category: 'Объявление',
    title: 'Меню на апрель утверждено',
    desc: 'Уважаемые родители! Ознакомьтесь с обновлённым меню на апрель 2026 года. Все блюда составлены с учётом норм питания для дошкольников и согласованы с Роспотребнадзором.',
    tag: 'announcement'
  },
];

const tags = [
  { id: 'all', label: 'Все', emoji: '📋' },
  { id: 'event', label: 'События', emoji: '🎉' },
  { id: 'announcement', label: 'Объявления', emoji: '📢' },
  { id: 'activity', label: 'Активности', emoji: '🌟' },
];

export default function NewsPage() {
  const [activeTag, setActiveTag] = useState('all');

  const filtered = activeTag === 'all' ? allNews : allNews.filter(n => n.tag === activeTag);

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 py-10 px-4 text-center">
        <div className="text-5xl mb-3">📰</div>
        <h1 className="font-pacifico text-3xl text-white mb-2">Новости и объявления</h1>
        <p className="font-nunito text-white/90 text-base">Всегда в курсе жизни детского сада «Солнышко»</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTag(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-nunito font-700 text-sm transition-all
                ${activeTag === t.id
                  ? 'bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-md'
                  : 'bg-white text-gray-600 border-2 border-yellow-200 hover:border-orange-300'
                }`}
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        {/* News Cards */}
        <div className="space-y-5">
          {filtered.map((n, i) => (
            <div
              key={n.id}
              className="card-hover bg-white rounded-3xl p-6 shadow-md border border-yellow-100 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 animate-bounce-soft">{n.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="bg-orange-100 text-orange-600 font-nunito font-700 text-xs px-3 py-1 rounded-full">
                      {n.category}
                    </span>
                    <span className="text-gray-400 font-nunito text-xs">{n.date}</span>
                  </div>
                  <h3 className="font-nunito font-800 text-gray-800 text-lg mb-2">{n.title}</h3>
                  <p className="font-nunito text-gray-600 text-sm leading-relaxed">{n.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="font-nunito font-700 text-gray-500 text-lg">Новостей пока нет</p>
          </div>
        )}
      </div>
    </div>
  );
}
