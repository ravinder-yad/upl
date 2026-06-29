import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('UPL 2');
  const dropdownRef = useRef(null);

  const options = ['UPL 1', 'UPL 2', 'All Time'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#111928] h-14 flex items-center justify-between px-4 sm:px-6 z-[100] select-none shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-b border-white/5">
      {/* Left side: Logo */}
      <div className="flex items-center gap-2.5 cursor-pointer group">
        <div className="w-2 h-2 rounded-full bg-[#F17B1B] shadow-[0_0_8px_rgba(241,123,27,0.8)] group-hover:scale-110 transition-transform"></div>
        <span className="text-white font-black text-[15px] md:text-[17px] tracking-tight uppercase" style={{ fontFamily: '"Arial Black", "Inter", sans-serif' }}>
          UNIVERSAL PREMIER LEAGUE
        </span>
      </div>

      {/* Right side: Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between min-w-[100px] h-[34px] px-3 bg-white rounded-md text-[#1f2937] text-[13px] font-extrabold transition-all duration-200 outline-none ${
            isOpen ? 'ring-2 ring-[#F17B1B] ring-offset-2 ring-offset-[#111928]' : 'hover:bg-gray-50'
          }`}
        >
          {selected}
          <svg 
            className={`w-3.5 h-3.5 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#F17B1B]' : 'text-gray-500'}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-[140px] bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.2)] overflow-hidden border border-gray-100 origin-top-right animate-in fade-in zoom-in-95 duration-100">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-[13px] font-bold transition-colors ${
                  selected === option
                    ? 'bg-[#EBF5FF] text-[#1D4ED8]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
