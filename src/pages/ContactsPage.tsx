import { useState } from 'react';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', phone: '', child: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-pink-400 to-orange-400 py-8 px-4 text-center rounded-3xl mb-2">
        <div className="text-5xl mb-3">📍</div>
        <h1 className="font-pacifico text-3xl text-white mb-2">Контакты</h1>
        <p className="font-nunito text-white/90 text-base">Мы рады ответить на все ваши вопросы!</p>
      </div>

      <div className="py-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <h2 className="font-pacifico text-2xl text-orange-500 mb-6">Наши контакты</h2>
            <div className="space-y-4">
              {[
                { emoji: '📍', title: 'Адрес', value: 'ул. Солнечная, д. 5, г. Солнечногорск, Московская область, 141503' },
                { emoji: '📞', title: 'Телефон', value: '+7 (800) 123-45-67' },
                { emoji: '✉️', title: 'Email', value: 'solnyshko@edu.ru' },
                { emoji: '🕐', title: 'Режим работы', value: 'Понедельник – Пятница: 7:00 – 19:00' },
                { emoji: '👤', title: 'Заведующая', value: 'Светлана Александровна Громова' },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-yellow-100">
                  <div className="text-3xl">{c.emoji}</div>
                  <div>
                    <div className="font-nunito font-700 text-gray-500 text-xs mb-0.5">{c.title}</div>
                    <div className="font-nunito font-700 text-gray-800 text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 rounded-3xl overflow-hidden border-2 border-yellow-200 shadow-md">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🗺️</div>
                  <p className="font-nunito font-700 text-gray-600">Карта будет здесь</p>
                  <p className="font-nunito text-gray-400 text-sm">ул. Солнечная, д. 5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-pacifico text-2xl text-orange-500 mb-6">Записать ребёнка</h2>
            {sent ? (
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl p-10 text-center border-2 border-green-200">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-pacifico text-xl text-green-600 mb-2">Заявка отправлена!</h3>
                <p className="font-nunito text-gray-600">Мы свяжемся с вами в ближайшее время. Ждём вас в нашем садике! ☀️</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-nunito font-700 px-6 py-2.5 rounded-2xl"
                >
                  Отправить ещё раз
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name', label: 'Ваше имя', placeholder: 'Иванова Анна Петровна', type: 'text', required: true },
                  { key: 'phone', label: 'Телефон', placeholder: '+7 (999) 000-00-00', type: 'tel', required: true },
                  { key: 'child', label: 'Имя и возраст ребёнка', placeholder: 'Миша, 3 года', type: 'text', required: false },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block font-nunito font-700 text-gray-700 text-sm mb-1">{f.label}</label>
                    <input
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full border-2 border-yellow-200 focus:border-orange-400 rounded-2xl px-4 py-3 font-nunito text-sm outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-nunito font-700 text-gray-700 text-sm mb-1">Сообщение</label>
                  <textarea
                    placeholder="Ваш вопрос или пожелание..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-2 border-yellow-200 focus:border-orange-400 rounded-2xl px-4 py-3 font-nunito text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-nunito font-800 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-base"
                >
                  🌱 Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}