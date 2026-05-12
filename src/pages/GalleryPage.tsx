const heroImg = 'https://cdn.poehali.dev/projects/89bce8a3-ab08-4b2f-996f-9a545e53a8b6/files/1932c8b8-112e-4d8f-aaa3-13449fd66e15.jpg';
const classImg = 'https://cdn.poehali.dev/projects/89bce8a3-ab08-4b2f-996f-9a545e53a8b6/files/35328880-a178-40f6-9dd6-6a48a5b6b9f4.jpg';
const sunImg = 'https://cdn.poehali.dev/projects/89bce8a3-ab08-4b2f-996f-9a545e53a8b6/files/33786492-b232-4015-b581-d9e71fcf806c.jpg';

const photos = [
  { src: heroImg, title: 'Праздник весны', date: 'Май 2026', emoji: '🌸' },
  { src: classImg, title: 'Занятие в группе', date: 'Апрель 2026', emoji: '🎨' },
  { src: sunImg, title: 'Наш логотип', date: '2026', emoji: '☀️' },
  { src: heroImg, title: 'Спортивный праздник', date: 'Март 2026', emoji: '🏃' },
  { src: classImg, title: 'Новогодний утренник', date: 'Декабрь 2025', emoji: '🎄' },
  { src: sunImg, title: 'День знаний', date: 'Сентябрь 2025', emoji: '📚' },
];

export default function GalleryPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 py-10 px-4 text-center">
        <div className="text-5xl mb-3">🎨</div>
        <h1 className="font-pacifico text-3xl text-white mb-2">Фотогалерея</h1>
        <p className="font-nunito text-white/90 text-base">Яркие моменты жизни нашего садика</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((p, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-3xl overflow-hidden shadow-md border-2 border-yellow-100 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative">
                <img src={p.src} alt={p.title} className="w-full h-52 object-cover" />
                <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-2 py-1 text-xl">
                  {p.emoji}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-nunito font-800 text-gray-800 text-base">{p.title}</h3>
                <p className="font-nunito text-gray-400 text-xs mt-1">{p.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
