const groups = [
  { emoji: '🍼', name: 'Ясельная группа', age: '1–2 года', count: 15, teacher: 'Иванова М.А.', desc: 'Адаптация к детскому коллективу, сенсорное развитие, первые шаги' },
  { emoji: '🐣', name: '1-я младшая группа', age: '2–3 года', count: 20, teacher: 'Петрова Н.В.', desc: 'Развитие речи, сенсорика, знакомство с окружающим миром' },
  { emoji: '🐥', name: '2-я младшая группа', age: '3–4 года', count: 25, teacher: 'Сидорова Е.П.', desc: 'Игровая деятельность, первые художественные навыки, физическое развитие' },
  { emoji: '🌸', name: 'Средняя группа', age: '4–5 лет', count: 25, teacher: 'Козлова Т.С.', desc: 'Познавательное развитие, логика, театрализованная деятельность' },
  { emoji: '🌻', name: 'Старшая группа', age: '5–6 лет', count: 25, teacher: 'Новикова А.В.', desc: 'Подготовка к школе, чтение, письмо, математика' },
  { emoji: '🎓', name: 'Подготовительная группа', age: '6–7 лет', count: 25, teacher: 'Морозова И.К.', desc: 'Интенсивная подготовка к школьному обучению, проектная деятельность' },
];

export default function GroupsPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-400 to-blue-400 py-8 px-4 text-center rounded-3xl mb-2">
        <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
        <h1 className="font-pacifico text-3xl text-white mb-2">Наши группы</h1>
        <p className="font-nunito text-white/90 text-base">10 любящих коллективов для детей от 1 до 7 лет</p>
      </div>

      <div className="py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <div
              key={g.name}
              className="card-hover bg-white rounded-3xl p-6 shadow-md border-2 border-green-100 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{g.emoji}</div>
              <h3 className="font-nunito font-800 text-gray-800 text-lg mb-1">{g.name}</h3>
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-green-100 text-green-700 font-nunito font-700 text-xs px-3 py-1 rounded-full">
                  👶 {g.age}
                </span>
                <span className="bg-blue-100 text-blue-700 font-nunito font-700 text-xs px-3 py-1 rounded-full">
                  {g.count} детей
                </span>
              </div>
              <p className="font-nunito text-gray-500 text-sm leading-relaxed mb-3">{g.desc}</p>
              <div className="border-t border-gray-100 pt-3">
                <span className="font-nunito text-xs text-gray-400">Воспитатель:</span>
                <span className="font-nunito font-700 text-gray-700 text-sm ml-1">{g.teacher}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}