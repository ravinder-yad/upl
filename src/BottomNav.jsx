import { useState } from 'react';
import { Home, Sparkles, AlignJustify, Star, LogIn } from 'lucide-react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('HOME');

  const navItems = [
    {
      id: 'HOME',
      label: 'HOME',
      icon: <Home size={22} strokeWidth={2.5} />
    },
    {
      id: 'MATCHES',
      label: 'MATCHES',
      icon: <Sparkles size={22} strokeWidth={2.5} />
    },
    {
      id: 'TABLE',
      label: 'TABLE',
      icon: <AlignJustify size={22} strokeWidth={2.5} />
    },
    {
      id: 'STATS',
      label: 'STATS',
      icon: <Star size={22} strokeWidth={2.5} />
    },
    {
      id: 'LOGIN',
      label: 'LOGIN',
      icon: <LogIn size={22} strokeWidth={2.5} />
    }
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto w-[96%] max-w-[650px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex justify-around items-center h-[64px] z-50">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="relative flex flex-col items-center justify-center h-full w-[20%] outline-none group"
          >
            {/* Top Indicator */}
            {isActive && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#F17B1B] rounded-b-full"></div>
            )}
            
            <div className={`mb-1 mt-1 transition-all duration-200 ${isActive ? 'text-[#F17B1B] scale-110 drop-shadow-sm' : 'text-[#64748b] group-hover:text-[#F17B1B] group-hover:scale-105'}`}>
              {item.icon}
            </div>
            
            <span
              className={`text-[9px] md:text-[10px] font-extrabold tracking-wide transition-colors ${
                isActive ? 'text-[#F17B1B]' : 'text-[#64748b] group-hover:text-[#F17B1B]'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
