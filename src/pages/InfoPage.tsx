interface InfoPageProps {
  section: string;
}

const sectionContent: Record<string, { title: string; emoji: string; content: React.ReactNode }> = {
  basic: {
    title: 'Основные сведения', emoji: '📋',
    content: (
      <div className="space-y-4 font-nunito text-gray-700">
        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-200">
          <h3 className="font-800 text-gray-800 mb-3">Общая информация</h3>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-yellow-100">
              {[
                ['Полное наименование', 'Муниципальное дошкольное образовательное учреждение детский сад «Солнышко»'],
                ['Краткое наименование', 'МДОУ детский сад «Солнышко»'],
                ['Тип', 'Детский сад'],
                ['Учредитель', 'Администрация Солнечногорского района'],
                ['Год основания', '1999'],
                ['Лицензия', '№ 12345 от 01.01.2020'],
                ['ИНН', '5000000000'],
                ['ОГРН', '1000000000000'],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td className="py-2 pr-4 text-gray-500 font-600 w-1/3">{k}</td>
                  <td className="py-2 font-700 text-gray-800">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  structure: {
    title: 'Структура и органы управления', emoji: '🏛️',
    content: (
      <div className="space-y-4 font-nunito text-gray-700">
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
          <h3 className="font-800 text-gray-800 mb-4">Структура организации</h3>
          <div className="space-y-3">
            {[
              { role: '👤 Заведующая', name: 'Громова Светлана Александровна' },
              { role: '📊 Педагогический совет', name: 'Высший орган управления' },
              { role: '👨‍👩‍👧 Родительский комитет', name: 'Общественный совет' },
              { role: '💼 Попечительский совет', name: 'Совет учреждения' },
            ].map((item) => (
              <div key={item.role} className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm">
                <span className="font-700 text-gray-800 text-sm">{item.role}</span>
                <span className="text-gray-500 text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  documents: {
    title: 'Документы', emoji: '📄',
    content: (
      <div className="space-y-3 font-nunito">
        {[
          { name: 'Устав МДОУ детский сад «Солнышко»', date: '2020', type: 'PDF' },
          { name: 'Лицензия на образовательную деятельность', date: '2020', type: 'PDF' },
          { name: 'Свидетельство о государственной аккредитации', date: '2021', type: 'PDF' },
          { name: 'Основная образовательная программа', date: '2024', type: 'PDF' },
          { name: 'Адаптированная образовательная программа', date: '2024', type: 'PDF' },
          { name: 'Годовой план работы на 2025–2026 уч.год', date: '2025', type: 'PDF' },
          { name: 'Публичный отчёт заведующей', date: '2025', type: 'PDF' },
        ].map((doc) => (
          <div key={doc.name} className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors card-hover">
            <div className="flex items-center gap-3">
              <div className="text-2xl">📄</div>
              <div>
                <div className="font-700 text-gray-800 text-sm">{doc.name}</div>
                <div className="text-gray-400 text-xs">{doc.date} · {doc.type}</div>
              </div>
            </div>
            <button className="text-orange-500 font-700 text-sm hover:text-orange-600 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-xl transition-colors">
              ⬇ Скачать
            </button>
          </div>
        ))}
      </div>
    )
  },
  education: {
    title: 'Образование', emoji: '🎓',
    content: (
      <div className="space-y-4 font-nunito text-gray-700">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Уровень образования', value: 'Дошкольное общее образование' },
            { title: 'Форма обучения', value: 'Очная' },
            { title: 'Язык обучения', value: 'Русский' },
            { title: 'Срок обучения', value: 'От 1 года до 7 лет' },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-2xl p-4 border border-green-200">
              <div className="text-xs text-green-600 font-700 mb-1">{item.title}</div>
              <div className="font-800 text-gray-800">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-200">
          <h3 className="font-800 text-gray-800 mb-2">Реализуемые программы</h3>
          <ul className="space-y-1 text-sm">
            <li>✅ Основная общеобразовательная программа дошкольного образования</li>
            <li>✅ Адаптированная образовательная программа для детей с ОВЗ</li>
            <li>✅ Дополнительные программы (кружки, секции)</li>
          </ul>
        </div>
      </div>
    )
  },
  management: {
    title: 'Руководство', emoji: '👤',
    content: (
      <div className="space-y-4 font-nunito">
        {[
          { name: 'Громова Светлана Александровна', role: 'Заведующая', exp: 'Стаж: 20 лет', edu: 'Высшее педагогическое образование', phone: '+7 (800) 123-45-67', emoji: '👩‍💼' },
          { name: 'Николаева Ольга Ивановна', role: 'Заместитель по воспитательной работе', exp: 'Стаж: 15 лет', edu: 'Высшее педагогическое образование', phone: '+7 (800) 123-45-68', emoji: '👩‍🏫' },
          { name: 'Смирнова Татьяна Юрьевна', role: 'Заместитель по АХР', exp: 'Стаж: 10 лет', edu: 'Высшее экономическое образование', phone: '+7 (800) 123-45-69', emoji: '👩‍💼' },
        ].map((p) => (
          <div key={p.name} className="card-hover bg-white rounded-3xl p-5 shadow-md border-2 border-yellow-100">
            <div className="flex items-start gap-4">
              <div className="text-5xl">{p.emoji}</div>
              <div className="flex-1">
                <div className="font-nunito font-800 text-gray-800 text-lg">{p.name}</div>
                <div className="text-orange-500 font-700 text-sm mb-2">{p.role}</div>
                <div className="text-gray-500 text-sm space-y-1">
                  <div>📚 {p.edu}</div>
                  <div>⏱️ {p.exp}</div>
                  <div>📞 {p.phone}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  },
  staff: {
    title: 'Педагогический состав', emoji: '👩‍🏫',
    content: (
      <div className="font-nunito">
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { num: '30+', label: 'педагогов' },
            { num: '85%', label: 'высшая категория' },
            { num: '15+', label: 'средний стаж' },
          ].map((s) => (
            <div key={s.label} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-4 text-center border-2 border-yellow-200">
              <div className="font-pacifico text-3xl text-orange-500">{s.num}</div>
              <div className="text-gray-600 text-sm font-700">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {[
            { name: 'Иванова Мария Александровна', role: 'Воспитатель, ясельная группа', category: 'Высшая категория', emoji: '👩‍🏫' },
            { name: 'Петрова Надежда Владимировна', role: 'Воспитатель, 1-я мл. группа', category: 'Высшая категория', emoji: '👩‍🏫' },
            { name: 'Козлова Татьяна Сергеевна', role: 'Музыкальный руководитель', category: '1-я категория', emoji: '🎵' },
            { name: 'Белов Андрей Николаевич', role: 'Инструктор по физической культуре', category: '1-я категория', emoji: '🏃' },
            { name: 'Орлова Светлана Петровна', role: 'Учитель-логопед', category: 'Высшая категория', emoji: '🗣️' },
            { name: 'Медведева Анна Сергеевна', role: 'Педагог-психолог', category: '1-я категория', emoji: '🧠' },
          ].map((t) => (
            <div key={t.name} className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.emoji}</span>
                <div>
                  <div className="font-700 text-gray-800 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
              <span className="bg-green-100 text-green-700 font-700 text-xs px-2 py-1 rounded-lg whitespace-nowrap ml-2">
                {t.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  material: {
    title: 'Материально-техническое обеспечение. Доступная среда', emoji: '🏫',
    content: (
      <div className="space-y-4 font-nunito text-gray-700">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { emoji: '🏫', title: 'Здание', value: 'Типовое 2-этажное здание, построено в 1999 г., капремонт 2018 г.' },
            { emoji: '🌳', title: 'Территория', value: '2,5 га. Благоустроенные прогулочные площадки для каждой группы' },
            { emoji: '🎭', title: 'Музыкальный зал', value: '120 кв.м. Современное звуковое и световое оборудование' },
            { emoji: '🏋️', title: 'Спортивный зал', value: '80 кв.м. Полное спортивное оснащение' },
            { emoji: '🖥️', title: 'Кабинеты', value: '2 методических кабинета, кабинет логопеда, психолога' },
            { emoji: '♿', title: 'Доступная среда', value: 'Пандусы, поручни, тактильные указатели для детей с ОВЗ' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="font-800 text-gray-800 mb-1">{item.title}</div>
              <div className="text-gray-500 text-sm">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  paid: {
    title: 'Платные образовательные услуги', emoji: '💳',
    content: (
      <div className="space-y-3 font-nunito">
        {[
          { name: 'Кружок «Юный художник»', desc: 'Рисование, живопись, основы изобразительного искусства', price: '1 200 ₽/мес', age: '3–7 лет' },
          { name: 'Логоритмика', desc: 'Развитие речи через движение и музыку', price: '900 ₽/мес', age: '2–5 лет' },
          { name: 'Английский язык', desc: 'Раннее изучение английского в игровой форме', price: '1 500 ₽/мес', age: '4–7 лет' },
          { name: 'Шахматы', desc: 'Развитие логики и стратегического мышления', price: '800 ₽/мес', age: '5–7 лет' },
          { name: 'Ритмика и танцы', desc: 'Хореография, основы классического и народного танца', price: '1 100 ₽/мес', age: '3–7 лет' },
        ].map((s) => (
          <div key={s.name} className="card-hover bg-white rounded-2xl p-5 shadow-sm border-2 border-yellow-100">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-800 text-gray-800 mb-1">{s.name}</div>
                <div className="text-gray-500 text-sm mb-1">{s.desc}</div>
                <div className="text-xs bg-blue-100 text-blue-600 font-700 px-2 py-0.5 rounded-lg inline-block">
                  👶 {s.age}
                </div>
              </div>
              <div className="text-orange-500 font-pacifico text-lg ml-4 whitespace-nowrap">{s.price}</div>
            </div>
          </div>
        ))}
        <div className="bg-orange-50 rounded-2xl p-4 border border-orange-200 text-sm text-orange-700 font-700">
          📋 Для записи обратитесь к администратору или заполните форму на странице «Контакты»
        </div>
      </div>
    )
  },
  'finance-2026': { title: 'Финансово-хозяйственная деятельность — 2026', emoji: '📊', content: <FinanceTable year="2026" /> },
  'finance-2025': { title: 'Финансово-хозяйственная деятельность — 2025', emoji: '📊', content: <FinanceTable year="2025" /> },
  'finance-2024': { title: 'Финансово-хозяйственная деятельность — 2024', emoji: '📊', content: <FinanceTable year="2024" /> },
  vacancies: {
    title: 'Вакантные места для приёма (перевода)', emoji: '🚪',
    content: (
      <div className="font-nunito">
        <div className="bg-green-50 rounded-2xl p-4 border border-green-200 mb-4 text-green-700 font-700">
          ℹ️ Сведения обновлены: 12.05.2026
        </div>
        <div className="space-y-3">
          {[
            { group: 'Ясельная группа (1–2 года)', free: 2 },
            { group: '1-я младшая группа (2–3 года)', free: 0 },
            { group: '2-я младшая группа (3–4 года)', free: 3 },
            { group: 'Средняя группа (4–5 лет)', free: 1 },
            { group: 'Старшая группа (5–6 лет)', free: 0 },
            { group: 'Подготовительная группа (6–7 лет)', free: 2 },
          ].map((item) => (
            <div key={item.group} className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <span className="font-700 text-gray-800 text-sm">{item.group}</span>
              <span className={`font-800 text-sm px-3 py-1 rounded-full ${item.free > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                {item.free > 0 ? `✅ ${item.free} места` : '❌ Мест нет'}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  scholarships: {
    title: 'Стипендии и материальная поддержка', emoji: '🎁',
    content: (
      <div className="space-y-3 font-nunito text-gray-700">
        <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-200">
          <p className="text-sm leading-relaxed">
            В МДОУ детский сад «Солнышко» стипендии не предусмотрены в связи с дошкольным уровнем образования.
            Для семей предусмотрены следующие виды поддержки:
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>💰 Компенсация части родительской платы (от 20% до 70%)</li>
            <li>🆓 Бесплатные места для детей-сирот и детей ОВЗ</li>
            <li>🎯 Льготная очередь для многодетных семей</li>
          </ul>
        </div>
      </div>
    )
  },
  international: {
    title: 'Международное сотрудничество', emoji: '🌍',
    content: (
      <div className="font-nunito text-gray-700">
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
          <p className="text-sm leading-relaxed">
            МДОУ детский сад «Солнышко» не осуществляет международную деятельность в отчётном периоде.
          </p>
        </div>
      </div>
    )
  },
  nutrition: {
    title: 'Организация питания', emoji: '🍽️',
    content: (
      <div className="space-y-4 font-nunito text-gray-700">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { emoji: '🍳', title: 'Завтрак', time: '08:30' },
            { emoji: '🥐', title: '2-й завтрак', time: '10:30' },
            { emoji: '🍲', title: 'Обед', time: '12:30' },
            { emoji: '🥛', title: 'Полдник', time: '15:30' },
            { emoji: '🥗', title: 'Ужин', time: '17:30' },
          ].map((meal) => (
            <div key={meal.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
              <span className="text-3xl">{meal.emoji}</span>
              <div>
                <div className="font-800 text-gray-800">{meal.title}</div>
                <div className="text-gray-500 text-sm">🕐 {meal.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
          <h3 className="font-800 text-gray-800 mb-2">Принципы питания</h3>
          <ul className="space-y-1 text-sm">
            <li>✅ Меню согласовано с Роспотребнадзором</li>
            <li>✅ Учитываются аллергии и индивидуальные потребности</li>
            <li>✅ Только свежие, проверенные продукты</li>
            <li>✅ Меню вывешивается ежедневно на стенде и сайте</li>
          </ul>
        </div>
      </div>
    )
  },
  standards: {
    title: 'Образовательные стандарты и требования', emoji: '📚',
    content: (
      <div className="space-y-3 font-nunito text-gray-700">
        {[
          { title: 'ФГОС ДО', desc: 'Федеральный государственный образовательный стандарт дошкольного образования (Приказ МОН РФ № 1155 от 17.10.2013)', type: 'Стандарт' },
          { title: 'Санитарные правила СП 2.4.3648-20', desc: 'Санитарно-эпидемиологические требования к организациям воспитания и обучения', type: 'СанПиН' },
          { title: 'Профессиональный стандарт педагога', desc: 'Требования к квалификации педагогических работников', type: 'Стандарт' },
          { title: 'ФОП ДО', desc: 'Федеральная образовательная программа дошкольного образования (2023)', type: 'Программа' },
        ].map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm border-2 border-blue-100">
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 font-700 text-xs px-2 py-1 rounded-lg flex-shrink-0">{s.type}</span>
              <div>
                <div className="font-800 text-gray-800 mb-1">{s.title}</div>
                <div className="text-gray-500 text-sm">{s.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  },
};

function FinanceTable({ year }: { year: string }) {
  const rows = [
    ['Субсидии на выполнение муниципального задания', year === '2026' ? '8 500 000' : year === '2025' ? '7 900 000' : '7 200 000'],
    ['Субсидии на иные цели', year === '2026' ? '1 200 000' : year === '2025' ? '980 000' : '850 000'],
    ['Приносящая доход деятельность (платные услуги)', year === '2026' ? '450 000' : year === '2025' ? '380 000' : '320 000'],
    ['Расходы на оплату труда', year === '2026' ? '5 800 000' : year === '2025' ? '5 400 000' : '5 000 000'],
    ['Расходы на питание', year === '2026' ? '1 500 000' : year === '2025' ? '1 350 000' : '1 200 000'],
    ['Прочие расходы', year === '2026' ? '2 850 000' : year === '2025' ? '2 530 000' : '2 170 000'],
  ];
  return (
    <div className="font-nunito">
      <div className="bg-orange-50 rounded-2xl p-4 border border-orange-200 mb-4 text-orange-700 font-700 text-sm">
        📊 Плановые показатели финансово-хозяйственной деятельности на {year} год (руб.)
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
              <th className="text-left p-3 font-800">Показатель</th>
              <th className="text-right p-3 font-800">Сумма, ₽</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map(([k, v]) => (
              <tr key={k} className="hover:bg-yellow-50 transition-colors">
                <td className="p-3 text-gray-700">{k}</td>
                <td className="p-3 text-right font-800 text-gray-800">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function InfoPage({ section }: InfoPageProps) {
  const data = sectionContent[section];

  if (!data) {
    return (
      <div className="py-20 text-center">
        <div className="text-6xl mb-4">🌟</div>
        <h2 className="font-pacifico text-2xl text-orange-500 mb-2">Выберите раздел</h2>
        <p className="font-nunito text-gray-500">Используйте меню слева для навигации</p>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 border-2 border-yellow-200 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{data.emoji}</span>
          <h1 className="font-pacifico text-2xl text-orange-500">{data.title}</h1>
        </div>
      </div>
      {data.content}
    </div>
  );
}
