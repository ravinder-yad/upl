import React, { useState, useEffect } from 'react';

// Custom Hook for Animating Numbers
const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo for smoother ending
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
};

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-4 font-sans select-none pb-12">
      
      {/* Main Hero Card */}
      <div 
        className="relative bg-[#171A21] rounded-3xl overflow-hidden shadow-xl border-[6px] border-white flex flex-col items-center pt-8 pb-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(255, 192, 36, 0.1) 0%, transparent 50%),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 8px)
          `
        }}
      >
        {/* Glow effect in background just behind UPL */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[250px] h-[100px] bg-[#FFC024] opacity-[0.15] blur-[40px] pointer-events-none"></div>

        {/* Top Status Pill */}
        <div className="relative z-10 bg-[#1F232D] border border-white/5 rounded-full px-5 py-2 flex items-center gap-3 text-[9px] md:text-[10px] font-bold text-gray-300 tracking-wider">
          <span className="flex items-center gap-1.5 text-white">
            <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
            SEASON 2 LIVE
          </span>
          <span className="opacity-30">|</span>
          <span>10 FRANCHISES</span>
          <span className="opacity-30">|</span>
          <span>107 PLAYERS</span>
        </div>

        {/* Huge UPL Logo Text */}
        <div className="relative mt-12 mb-6 flex justify-center z-10">
          <h1 
            className="text-[120px] md:text-[160px] font-black leading-none tracking-tight text-transparent bg-clip-text"
            style={{
              fontFamily: '"Impact", "Arial Black", sans-serif',
              backgroundImage: 'linear-gradient(to bottom, #FFE58F 0%, #FFC107 50%, #E0A800 100%)',
              filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.5))',
              transform: 'scaleY(1.1)'
            }}
          >
            UPL
          </h1>
          {/* Season Pill */}
          <div className="absolute right-[-10px] md:right-[-25px] bottom-[20px] border border-[#FFC024] rounded-full px-3 py-1 bg-[#1F232D] z-20 shadow-md">
            <span className="text-[#FFC024] text-[10px] md:text-[11px] font-black tracking-widest uppercase">SEASON II</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-[9px] md:text-[10px] font-bold tracking-[0.25em] mb-10 z-10 text-center">
          UNIVERSAL PREMIER LEAGUE <span className="mx-2 opacity-30">•</span> HITWICKET PLATFORM
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 w-full px-4 z-10">
          <button className="bg-gradient-to-b from-[#FF8C33] to-[#E65C00] text-white text-[10px] md:text-[11px] font-black px-6 py-2.5 rounded-lg shadow-[0_4px_15px_rgba(230,92,0,0.3)] hover:brightness-110 transition-all uppercase tracking-wide">
            PLAYER LOGIN
          </button>
          <button className="bg-[#1F232D] border border-white/5 text-white text-[10px] md:text-[11px] font-bold px-6 py-2.5 rounded-lg hover:bg-[#2A2F3C] transition-colors uppercase tracking-wide">
            REGISTER
          </button>
          <button className="bg-[#1F232D] border border-white/5 text-white text-[10px] md:text-[11px] font-bold px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-[#2A2F3C] transition-colors uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></span>
            AUCTION LIVE
          </button>
          <button className="bg-[#1F232D] border border-white/5 text-white text-[10px] md:text-[11px] font-bold px-6 py-2.5 rounded-lg hover:bg-[#2A2F3C] transition-colors uppercase tracking-wide">
            CONSTITUTION
          </button>
        </div>

        {/* Stats Grid */}
        <div className="w-full grid grid-cols-3 border-t border-white/5 bg-[#1F232D]/30 relative z-10">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center py-6 md:py-8">
            <h3 
              className="text-[36px] md:text-[50px] font-black leading-none text-[#FFC107] drop-shadow-md"
              style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}
            >
              <AnimatedNumber end={10} duration={2000} />
            </h3>
            <span className="text-[#8e98ac] text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
              FRANCHISES
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center py-6 md:py-8 border-l border-white/5">
            <h3 
              className="text-[36px] md:text-[50px] font-black leading-none text-[#FFC107] drop-shadow-md"
              style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}
            >
              <AnimatedNumber end={107} duration={2500} />
            </h3>
            <span className="text-[#8e98ac] text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
              PLAYERS
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center py-6 md:py-8 border-l border-white/5">
            <h3 
              className="text-[36px] md:text-[50px] font-black leading-none text-[#FFC107] drop-shadow-md"
              style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}
            >
              <AnimatedNumber end={274} duration={3000} />
            </h3>
            <span className="text-[#8e98ac] text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
              MATCHES
            </span>
          </div>
          
        </div>
      </div>

      {/* Second Card: Organized By */}
      <div className="w-full relative rounded-2xl overflow-hidden shadow-sm p-[1.5px] mt-2 group cursor-pointer"
           style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6, #eab308, #ef4444)' }}>
        <div className="bg-[#121A2B] w-full h-full rounded-[14px] p-5 md:p-6 flex items-center justify-between transition-colors">
          <div className="flex items-center gap-5 md:gap-6">
            {/* Logo */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-[1.5px] border-dashed border-[#FFD13B] flex items-center justify-center text-[#FFD13B] font-black text-[15px] md:text-[17px] tracking-widest shadow-[0_0_15px_rgba(255,209,59,0.15)] group-hover:bg-[#FFD13B]/10 transition-colors">
              UAS
            </div>
            <div className="flex flex-col">
              <span className="text-[#FFD13B] text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] uppercase mb-1">Organized By</span>
              <span className="text-white text-[22px] md:text-[26px] font-black tracking-wide uppercase leading-none" style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}>Universal Allstars</span>
              <span className="text-[#8e98ac] text-[11px] md:text-[12px] font-bold mt-1.5 group-hover:text-white transition-colors">Official UPL Season 2 Constitution &rarr;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card: Hindi Version */}
      <div className="w-full bg-gradient-to-r from-[#FFFDF8] to-[#FDF3D5] border border-[#E9D6A1] rounded-2xl p-5 md:p-6 flex items-center justify-between cursor-pointer group shadow-sm mt-2">
        <div className="flex items-center gap-5 md:gap-6">
          <div className="text-[32px] md:text-[36px] font-black text-[#5C4505]" style={{ fontFamily: 'Times New Roman, serif' }}>
            IN
          </div>
          <div className="flex flex-col">
            <span className="text-[#2e2202] font-black text-[16px] md:text-[18px] uppercase tracking-tight">UPL Constitution — Hindi Version</span>
            <span className="text-[#7A611B] text-[11px] md:text-[13px] font-bold mt-1">Read the full constitution in Devanagari Hindi</span>
          </div>
        </div>
        <div className="text-[#967924] group-hover:translate-x-1 transition-transform mr-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* WhatsApp Card */}
      <div className="w-full bg-[#1FAF6B] rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer group shadow-sm mt-3 relative overflow-hidden">
        <div className="flex items-center gap-4 md:gap-5 relative z-10">
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/10 shadow-inner">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.01 2.01c-5.52 0-10 4.48-10 10 0 1.94.55 3.75 1.5 5.25L2.5 21.5l4.35-1.04c1.47.88 3.22 1.39 5.16 1.39 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.17 14.36c-.23.63-1.14 1.15-1.74 1.25-.56.09-1.32.22-3.87-.83-3.04-1.26-5.01-4.44-5.17-4.66-.16-.21-1.24-1.64-1.24-3.13 0-1.49.77-2.22 1.05-2.52.28-.29.61-.37.82-.37.21 0 .42.01.6.01.21 0 .49-.08.77.62.29.74 1.01 2.46 1.1 2.65.09.19.15.42.02.66-.13.25-.19.4-.38.63-.19.23-.41.51-.57.69-.19.21-.39.43-.16.83.23.4 1.01 1.67 2.16 2.7 1.48 1.33 2.73 1.74 3.13 1.93.4.19.63.15.87-.13.23-.27 1.01-1.18 1.28-1.58.27-.4.54-.33.91-.2.37.13 2.34 1.1 2.74 1.3.4.19.67.29.76.45.1.16.1.95-.13 1.58z" />
            </svg>
          </div>
          <div className="flex flex-col text-white">
            <span className="font-extrabold text-[16px] md:text-[18px] tracking-tight">Join the UPL WhatsApp Group</span>
            <span className="text-white/90 text-[11px] md:text-[12px] font-medium mt-0.5">Updates, fixtures, results & announcements</span>
          </div>
        </div>
        <div className="text-white group-hover:translate-x-1 transition-transform relative z-10 mr-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Teams Analysis Card */}
      <div className="w-full bg-gradient-to-r from-[#2F1F5E] to-[#4A208D] rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer group shadow-sm mt-3 relative overflow-hidden">
        <div className="flex items-center gap-4 md:gap-5 relative z-10">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-black/20 shadow-inner">
            <span className="text-[26px] drop-shadow-md">📊</span>
          </div>
          <div className="flex flex-col text-white">
            <span className="font-extrabold text-[16px] md:text-[18px] tracking-tight">Teams Analysis</span>
            <span className="text-white/80 text-[11px] md:text-[12px] font-medium mt-0.5">Squad power, batting vs bowling, radar profiles & tier rankings</span>
          </div>
        </div>
        <div className="text-white group-hover:translate-x-1 transition-transform relative z-10 mr-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* 2x3 Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-3">
        
        {/* Players */}
        <div className="bg-[#125B36] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">👥</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">ALL REGISTERED PLAYERS</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>PLAYERS</span>
              <span className="text-white text-[12px] font-semibold mt-1">107 registered</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Star-Ups */}
        <div className="bg-gradient-to-br from-[#CDA028] to-[#A07A18] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">⭐</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">LIVE 24H COOLDOWN TRACKER</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>STAR-UPS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Public log · Constitution §6.11</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Standings */}
        <div className="bg-[#124D7B] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">🏆</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">+FAIR PLAY / PENALTY SAVER TABLES</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>STANDINGS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Full points table</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Hall of Fame */}
        <div className="bg-gradient-to-br from-[#EE9D1C] to-[#CA7B0D] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">👑</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">UPL LEGENDS · PAST CHAMPIONS</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>HALL OF FAME</span>
              <span className="text-white text-[12px] font-semibold mt-1">Season-by-season tribute</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Champions */}
        <div className="bg-gradient-to-br from-[#AE2721] to-[#801712] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">🏆</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">CROWNED FRANCHISES · BY SEASON</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>CHAMPIONS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Title winners of UPL</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Captains & Squads */}
        <div className="bg-[#14797B] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-80">👥</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">TEAM-WISE ROSTERS · BY FRANCHISE</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>CAPTAINS & SQUADS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Every team's lineup & players</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

      </div>

      {/* Quick Links Section */}
      <div className="w-full bg-[#FCFAEE] border border-[#EBE4D5] rounded-xl p-5 mt-4 shadow-sm relative z-10">
        <h3 className="text-[#333] font-extrabold text-[15px] mb-4">Quick Links</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'STANDINGS', 'RESULTS', 'SCHEDULE', 'PLAYERS', 'WITHDRAWN', 'EXTRAS', 'CHAMPIONS', 'HALL OF FAME',
            'RECORDS', 'POT', 'SQUADS', 'FAIR PLAY', 'PENALTIES', 'RETENTION', 'PLAYOFFS', 'AWARDS',
            'RULES', 'STAR-UPS', 'CONSTITUTION', 'CONSTITUTION (HINDI)', 'PLAYER LOGIN'
          ].map(link => (
            <button key={link} className="bg-white border border-[#E5E0D5] text-[#333] text-[10px] md:text-[11px] font-bold px-4 py-2.5 rounded-md hover:bg-[#F5F0E1] transition-colors shadow-sm flex-1 md:flex-none text-center whitespace-nowrap">
              {link}
            </button>
          ))}
        </div>
      </div>

      {/* The 10 Franchises Section */}
      <div className="w-full bg-white border border-[#EAEAEA] rounded-xl p-5 mt-4 shadow-sm relative z-10">
        <h3 className="text-[#333] font-extrabold text-[15px] mb-4">The 10 Franchises</h3>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {[
            { id: 'CSK', name: 'CHENNAI', color: '#FACC15', text: 'black' },
            { id: 'DC', name: 'DELHI', color: '#3B82F6', text: 'white' },
            { id: 'GT', name: 'GUJARAT', color: '#0F172A', text: 'white' },
            { id: 'KKR', name: 'KOLKATA', color: '#6D28D9', text: 'white', active: true },
            { id: 'LSG', name: 'LUCKNOW', color: '#06B6D4', text: 'white' },
            { id: 'MI', name: 'MUMBAI', color: '#1D4ED8', text: 'white' },
            { id: 'PBKS', name: 'PUNJAB', color: '#DC2626', text: 'white' },
            { id: 'RCB', name: 'BANGALO...', color: '#991B1B', text: 'white' },
            { id: 'RR', name: 'RAJASTHAN', color: '#DB2777', text: 'white' },
            { id: 'SRH', name: 'HYDERAB...', color: '#EA580C', text: 'white' },
          ].map(f => (
            <div key={f.id} className={`flex flex-col items-center justify-center p-2 rounded-xl border ${f.active ? 'border-[#d4af37] bg-[#fdfbf6]' : 'border-gray-200 bg-white'} cursor-pointer hover:shadow-md transition-shadow min-w-[75px]`}>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center font-black text-[13px] tracking-tight" style={{ backgroundColor: f.color, color: f.text }}>
                {f.id}
              </div>
              <span className="text-[9px] font-extrabold text-gray-500 mt-2 tracking-wider">{f.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center mt-10 mb-4 w-full">
        <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-[#e0d6b8]"></div>
        <div className="flex gap-1.5 px-3">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
        </div>
        <div className="h-[1px] w-1/3 bg-gradient-to-l from-transparent to-[#e0d6b8]"></div>
      </div>

    </div>
  );
};

export default HomePage;
