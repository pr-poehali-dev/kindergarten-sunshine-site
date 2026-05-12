import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface InfoSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'basic', label: 'Основные сведения', emoji: '📋' },
  { id: 'structure', label: 'Структура и органы управления образовательной организацией', emoji: '🏛️' },
  { id: 'documents', label: 'Документы', emoji: '📄' },
  { id: 'education', label: 'Образование', emoji: '🎓' },
  { id: 'management', label: 'Руководство', emoji: '👤' },
  { id: 'staff', label: 'Педагогический состав', emoji: '👩‍🏫' },
  { id: 'material', label: 'Материально-техническое обеспечение и оснащённость образовательного процесса. Доступная среда', emoji: '🏫' },
  { id: 'paid', label: 'Платные образовательные услуги', emoji: '💳' },
  {
    id: 'finance', label: 'Финансово-хозяйственная деятельность', emoji: '📊',
    children: [
      { id: 'finance-2026', label: '2026 год', emoji: '📅' },
      { id: 'finance-2025', label: '2025 год', emoji: '📅' },
      { id: 'finance-2024', label: '2024 год', emoji: '📅' },
    ]
  },
  { id: 'vacancies', label: 'Вакантные места для приёма (перевода)', emoji: '🚪' },
  { id: 'scholarships', label: 'Стипендии и иные виды материальной поддержки', emoji: '🎁' },
  { id: 'international', label: 'Международное сотрудничество', emoji: '🌍' },
  { id: 'nutrition', label: 'Организация питания', emoji: '🍽️' },
  { id: 'standards', label: 'Образовательные стандарты и требования', emoji: '📚' },
];

export default function InfoSidebar({ activeSection, onSectionChange }: InfoSidebarProps) {
  const [financeOpen, setFinanceOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`transition-all duration-300 ${collapsed ? 'w-12' : 'w-72'} flex-shrink-0`}>
      <div className="sticky top-36">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-t-2xl p-3 flex items-center justify-between">
          {!collapsed && (
            <div className="text-white font-nunito font-800 text-sm leading-tight">
              🏫 Сведения об образовательной организации
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors ml-auto flex-shrink-0"
          >
            <Icon name={collapsed ? 'ChevronRight' : 'ChevronLeft'} size={18} />
          </button>
        </div>

        {/* Menu */}
        {!collapsed && (
          <div className="bg-white rounded-b-2xl shadow-lg border border-yellow-100 overflow-hidden">
            <nav className="py-2">
              {menuItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => setFinanceOpen(!financeOpen)}
                        className={`sidebar-item w-full flex items-start gap-2 px-3 py-2.5 text-left text-sm font-nunito font-600 text-gray-700 hover:text-orange-500 transition-all
                          ${activeSection === item.id ? 'active' : ''}`}
                      >
                        <span className="text-base flex-shrink-0 mt-0.5">{item.emoji}</span>
                        <span className="flex-1 leading-tight">{item.label}</span>
                        <Icon name={financeOpen ? 'ChevronDown' : 'ChevronRight'} size={14} className="flex-shrink-0 mt-1" />
                      </button>
                      {financeOpen && (
                        <div className="bg-orange-50 border-l-2 border-orange-200 ml-4">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => onSectionChange(child.id)}
                              className={`sidebar-item w-full flex items-center gap-2 px-3 py-2 text-left text-sm font-nunito font-600 transition-all
                                ${activeSection === child.id ? 'active text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
                            >
                              <span className="text-sm">{child.emoji}</span>
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`sidebar-item w-full flex items-start gap-2 px-3 py-2.5 text-left text-sm font-nunito font-600 transition-all
                      ${activeSection === item.id ? 'active text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">{item.emoji}</span>
                    <span className="leading-tight">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}

        {/* Collapsed icons */}
        {collapsed && (
          <div className="bg-white rounded-b-2xl shadow-lg border border-yellow-100 py-2 flex flex-col items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCollapsed(false); onSectionChange(item.id); }}
                title={item.label}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm hover:bg-orange-50 transition-colors
                  ${activeSection === item.id ? 'bg-orange-100' : ''}`}
              >
                {item.emoji}
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
