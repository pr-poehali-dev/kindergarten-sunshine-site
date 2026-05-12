import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная', icon: 'Home', emoji: '🏠' },
  { id: 'about', label: 'О садике', icon: 'Heart', emoji: '💛' },
  { id: 'groups', label: 'Группы', icon: 'Users', emoji: '👨‍👩‍👧‍👦' },
  { id: 'news', label: 'Новости', icon: 'Newspaper', emoji: '📰' },
  { id: 'gallery', label: 'Галерея', icon: 'Image', emoji: '🎨' },
  { id: 'contacts', label: 'Контакты', icon: 'MapPin', emoji: '📍' },
];

export default function Header({ activePage, onPageChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white text-sm font-nunito font-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">📞 +7 (800) 123-45-67</span>
            <span className="hidden sm:flex items-center gap-1">✉️ solnyshko@edu.ru</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">🕐 Пн–Пт: 7:00–19:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-lg border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform animate-bounce-soft">
              ☀️
            </div>
            <div>
              <div className="font-pacifico text-xl text-orange-500 leading-tight">Солнышко</div>
              <div className="text-xs text-gray-500 font-nunito font-600">Детский сад · МДОУ</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-nunito font-700 text-sm transition-all duration-200
                  ${activePage === item.id
                    ? 'bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-md scale-105'
                    : 'text-gray-600 hover:bg-yellow-50 hover:text-orange-500'
                  }`}
              >
                <span className="text-base">{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => onPageChange('contacts')}
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-nunito font-800 px-5 py-2.5 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm"
            >
              🌱 Записать ребёнка
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-orange-400 hover:bg-orange-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-yellow-50 border-t border-yellow-200 px-4 py-4 flex flex-col gap-2 animate-fade-in-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onPageChange(item.id); setMobileOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-nunito font-700 text-left transition-all
                  ${activePage === item.id
                    ? 'bg-gradient-to-r from-orange-400 to-yellow-400 text-white'
                    : 'text-gray-700 hover:bg-white'
                  }`}
              >
                <span className="text-xl">{item.emoji}</span>
                {item.label}
              </button>
            ))}
            <button className="mt-2 bg-gradient-to-r from-green-400 to-green-500 text-white font-nunito font-800 px-5 py-3 rounded-2xl">
              🌱 Записать ребёнка
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
