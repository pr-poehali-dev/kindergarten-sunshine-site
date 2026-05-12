export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 mt-12">
      {/* Wave top */}
      <div className="h-8 bg-white" style={{
        clipPath: 'ellipse(55% 100% at 50% 0%)'
      }} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Logo block */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">☀️</div>
              <div>
                <div className="font-pacifico text-xl">Солнышко</div>
                <div className="text-xs opacity-80 font-nunito">Детский сад · МДОУ</div>
              </div>
            </div>
            <p className="text-sm opacity-90 font-nunito leading-relaxed">
              Муниципальное дошкольное образовательное учреждение. Лицензия № 12345 от 01.01.2020
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-nunito font-800 text-lg mb-3">📍 Контакты</h3>
            <div className="space-y-2 text-sm font-nunito opacity-90">
              <p>📍 ул. Солнечная, д. 5, г. Солнечногорск</p>
              <p>📞 +7 (800) 123-45-67</p>
              <p>✉️ solnyshko@edu.ru</p>
              <p>🕐 Пн–Пт: 7:00–19:00</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-nunito font-800 text-lg mb-3">🔗 Быстрые ссылки</h3>
            <div className="space-y-1.5 text-sm font-nunito">
              <button className="block opacity-90 hover:opacity-100 hover:underline transition-opacity">📄 Документы</button>
              <button className="block opacity-90 hover:opacity-100 hover:underline transition-opacity">🌱 Записать ребёнка</button>
              <button className="block opacity-90 hover:opacity-100 hover:underline transition-opacity">📰 Новости</button>
              <button className="block opacity-90 hover:opacity-100 hover:underline transition-opacity">👩‍🏫 Педагоги</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm font-nunito text-white/80">
          © 2026 МДОУ Детский сад «Солнышко». Все права защищены. 🌟
        </div>
      </div>
    </footer>
  );
}
