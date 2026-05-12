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

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-6 items-start">
            <InfoSidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
            <div className="flex-1 min-w-0 animate-fade-in-up">
              {renderPage()}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}