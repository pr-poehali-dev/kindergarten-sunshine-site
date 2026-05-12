const sunImg = 'https://cdn.poehali.dev/projects/89bce8a3-ab08-4b2f-996f-9a545e53a8b6/files/33786492-b232-4015-b581-d9e71fcf806c.jpg';

export default function AboutPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-300 to-orange-300 py-8 px-4 text-center rounded-3xl mb-2">
        <div className="text-5xl mb-3">💛</div>
        <h1 className="font-pacifico text-3xl text-white mb-2">О нашем детском садике</h1>
        <p className="font-nunito text-white/90 text-base">Тёплый дом для ваших детей с 1999 года</p>
      </div>

      <div className="py-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          <div>
            <h2 className="font-pacifico text-2xl text-orange-500 mb-4">Наша миссия</h2>
            <div className="space-y-4 font-nunito text-gray-700 leading-relaxed">
              <p>
                Муниципальное дошкольное образовательное учреждение детский сад «Солнышко» 
                основано в <strong>1999 году</strong>. За 25 лет работы через наши двери прошли 
                тысячи счастливых детей.
              </p>
              <p>
                Наша цель — создать для каждого ребёнка радостное, насыщенное детство, 
                где он растёт здоровым, любознательным и уверенным в себе.
              </p>
              <p>
                Мы работаем по примерной основной образовательной программе дошкольного 
                образования в соответствии с требованиями ФГОС ДО.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src={sunImg} alt="Детский сад Солнышко" className="w-full h-64 object-cover" />
          </div>
        </div>

        {/* Values */}
        <h2 className="font-pacifico text-2xl text-orange-500 mb-6 text-center">Наши ценности</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { emoji: '❤️', title: 'Любовь', desc: 'Каждый ребёнок чувствует тепло и заботу' },
            { emoji: '🌱', title: 'Развитие', desc: 'Всестороннее развитие через игру и творчество' },
            { emoji: '🤝', title: 'Партнёрство', desc: 'Тесное сотрудничество с семьёй' },
            { emoji: '🌟', title: 'Качество', desc: 'Высокий стандарт дошкольного образования' },
          ].map((v) => (
            <div key={v.title} className="card-hover bg-white rounded-3xl p-5 shadow-md border-2 border-yellow-100 text-center">
              <div className="text-4xl mb-3">{v.emoji}</div>
              <h3 className="font-nunito font-800 text-gray-800 mb-1">{v.title}</h3>
              <p className="font-nunito text-gray-500 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 border-2 border-yellow-200">
          <h2 className="font-pacifico text-2xl text-orange-500 mb-6">🏆 Наши достижения</h2>
          <ul className="space-y-3 font-nunito text-gray-700">
            {[
              '🥇 Победитель регионального конкурса "Лучший детский сад" 2024, 2025',
              '✅ Аккредитация по всем образовательным программам',
              '🌍 Участник международной программы раннего развития',
              '🎨 Дипломант областного конкурса детского творчества',
              '🌿 Сертификат «Зелёный сад» за экологическое воспитание',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5">{item.split(' ')[0]}</span>
                <span>{item.split(' ').slice(1).join(' ')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}