import { useState } from 'react';
import Header from '@/components/Header';
import InfoSidebar from '@/components/InfoSidebar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import GroupsPage from '@/pages/GroupsPage';
import NewsPage from '@/pages/NewsPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactsPage from '@/pages/ContactsPage';
import InfoPage from '@/pages/InfoPage';

const INFO_PAGES = ['basic', 'structure', 'documents', 'education', 'management', 'staff',
  'material', 'paid', 'finance', 'finance-2026', 'finance-2025', 'finance-2024',
  'vacancies', 'scholarships', 'international', 'nutrition', 'standards'];

export default function Index() {
  const [activePage, setActivePage] = useState('home');
  const [activeSection, setActiveSection] = useState('basic');

  const isInfoPage = INFO_PAGES.includes(activePage);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setActivePage(section);
    window.scrollTo(0, 0);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onPageChange={handlePageChange} />;
      case 'about': return <AboutPage />;
      case 'groups': return <GroupsPage />;
      case 'news': return <NewsPage />;
      case 'gallery': return <GalleryPage />;
      case 'contacts': return <ContactsPage />;
      default:
        if (INFO_PAGES.includes(activePage)) return <InfoPage section={activePage} />;
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background bubble-bg flex flex-col">
      <Header activePage={activePage} onPageChange={handlePageChange} />

      <main className="flex-1">
        {/* Floating decorations */}
        <div className="fixed right-4 bottom-24 text-3xl animate-float-slow pointer-events-none opacity-40 hidden lg:block">🌈</div>
        <div className="fixed right-8 bottom-48 text-2xl animate-wiggle pointer-events-none opacity-30 hidden lg:block">⭐</div>

        {isInfoPage ? (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-6 items-start">
              <InfoSidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
              <div className="flex-1 min-w-0 animate-fade-in-up">
                {renderPage()}
              </div>
            </div>
          </div>
        ) : (
          <>
            {renderPage()}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-6 border-2 border-yellow-200">
                <h2 className="font-pacifico text-xl text-orange-500 mb-4">
                  🏫 Сведения об образовательной организации
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {[
                    { id: 'basic', label: 'Основные сведения', emoji: '📋' },
                    { id: 'documents', label: 'Документы', emoji: '📄' },
                    { id: 'education', label: 'Образование', emoji: '🎓' },
                    { id: 'staff', label: 'Педагогический состав', emoji: '👩‍🏫' },
                    { id: 'paid', label: 'Платные услуги', emoji: '💳' },
                    { id: 'vacancies', label: 'Вакантные места', emoji: '🚪' },
                    { id: 'nutrition', label: 'Питание', emoji: '🍽️' },
                    { id: 'standards', label: 'Стандарты', emoji: '📚' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSectionChange(item.id)}
                      className="flex items-center gap-2 bg-white hover:bg-orange-50 border-2 border-yellow-200 hover:border-orange-300 rounded-2xl px-3 py-2.5 text-left transition-all font-nunito font-700 text-sm text-gray-700 hover:text-orange-500"
                    >
                      <span>{item.emoji}</span>
                      <span className="leading-tight text-xs">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
