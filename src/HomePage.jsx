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
    <div className="w-full flex flex-col gap-4 font-sans pb-12">
      
      {/* Main Hero Card exactly matching screenshot */}
      <div 
        className="relative bg-[#0c1017] rounded-[32px] overflow-hidden flex flex-col items-center pt-16 pb-12 shadow-2xl border-[6px] md:border-[8px] border-white"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(255, 196, 35, 0.08) 0%, transparent 60%),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 16px)
          `
        }}
      >
        {/* Top Pill seamlessly merging with the white border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white rounded-b-[20px] px-8 py-2 flex items-center gap-4 text-[9px] font-black text-[#555] tracking-[0.2em] z-20">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            SEASON 2 LIVE
          </span>
          <span className="opacity-30">•</span>
          <span>10 FRANCHISES</span>
          <span className="opacity-30">•</span>
          <span>108 PLAYERS</span>
        </div>

        {/* Huge UPL Logo Text with exact 3D effect */}
        <div className="relative mt-4 mb-4 flex justify-center z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-[#FFC423] opacity-[0.15] blur-[70px] pointer-events-none"></div>
          
          <h1 
            className="text-[140px] md:text-[200px] font-black leading-none tracking-[0.02em] select-text"
            style={{
              fontFamily: '"Impact", "Arial Black", sans-serif',
              background: 'linear-gradient(180deg, #FFF3BA 0%, #F5C538 40%, #C2870F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 1px 0 #b38219, 0 2px 0 #a67917, 0 3px 0 #996f15, 0 4px 0 #8c6614, 0 5px 0 #805d12, 0 6px 0 #735310, 0 7px 0 #66490e, 0 15px 20px rgba(0,0,0,0.8)',
              WebkitTextStroke: '1px rgba(255,255,255,0.1)'
            }}
          >
            UPL
          </h1>
          {/* Season Pill */}
          <div className="absolute right-[-10px] md:right-[-5px] bottom-[30px] md:bottom-[45px] border-2 border-[#F5C538] rounded-full px-5 py-1.5 bg-[#151B27] z-20 shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            <span className="text-[#F5C538] text-[11px] font-black tracking-[0.2em] uppercase select-text">SEASON II</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-[#8E97A6] text-[8.5px] md:text-[10px] font-bold tracking-[0.3em] mb-12 z-10 text-center uppercase select-text">
          UNIVERSAL PREMIER LEAGUE <span className="mx-2 opacity-40">-</span> HITWICKET PLATFORM
        </p>

        {/* Buttons matching image exactly */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 w-full px-4 z-10">
          <button className="bg-gradient-to-r from-[#FFB347] to-[#F17808] text-white text-[10px] font-black px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(241,120,8,0.5)] border border-[#FFC266] hover:scale-105 transition-transform uppercase tracking-wider">
            PLAYER LOGIN
          </button>
          <button className="bg-transparent border border-white/20 text-white text-[10px] font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wider">
            REGISTER
          </button>
          <button className="bg-transparent border border-white/20 text-white text-[10px] font-bold px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></span>
            AUCTION LIVE
          </button>
          <button className="bg-transparent border border-white/20 text-white text-[10px] font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors uppercase tracking-wider">
            CONSTITUTION
          </button>
        </div>

        {/* Bottom Stats Flex - Restored AnimatedNumber */}
        <div className="w-full flex justify-center items-center gap-10 md:gap-28 relative z-10 px-8">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center">
            <h3 
              className="text-[32px] md:text-[46px] font-black leading-none text-[#F5C538] select-text"
              style={{ fontFamily: '"Impact", "Arial Black", sans-serif', textShadow: '0px 2px 10px rgba(245,197,56,0.3)' }}
            >
              <AnimatedNumber end={10} duration={2000} />
            </h3>
            <span className="text-[#8E97A6] text-[9px] font-bold tracking-[0.25em] uppercase mt-3 select-text">
              FRANCHISES
            </span>
          </div>

          <div className="w-[1px] h-[35px] bg-gradient-to-b from-transparent via-[#F5C538]/30 to-transparent"></div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center">
            <h3 
              className="text-[32px] md:text-[46px] font-black leading-none text-[#F5C538] select-text"
              style={{ fontFamily: '"Impact", "Arial Black", sans-serif', textShadow: '0px 2px 10px rgba(245,197,56,0.3)' }}
            >
              <AnimatedNumber end={108} duration={2500} />
            </h3>
            <span className="text-[#8E97A6] text-[9px] font-bold tracking-[0.25em] uppercase mt-3 select-text">
              PLAYERS
            </span>
          </div>

          <div className="w-[1px] h-[35px] bg-gradient-to-b from-transparent via-[#F5C538]/30 to-transparent"></div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center">
            <h3 
              className="text-[32px] md:text-[46px] font-black leading-none text-[#F5C538] select-text"
              style={{ fontFamily: '"Impact", "Arial Black", sans-serif', textShadow: '0px 2px 10px rgba(245,197,56,0.3)' }}
            >
              <AnimatedNumber end={350} duration={3000} />
            </h3>
            <span className="text-[#8E97A6] text-[9px] font-bold tracking-[0.25em] uppercase mt-3 select-text">
              MATCHES
            </span>
          </div>
          
        </div>
      </div>

      {/* 4 Unified Main Action Cards */}
      <div className="w-full flex flex-col gap-3 mt-4">
        
        {/* Card 1: Organized By */}
        <div className="w-full bg-[#121A2B] rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer group shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-4 md:gap-5 relative z-10">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-[#FFD13B] font-black text-[15px] md:text-[17px] bg-black/30 shadow-inner flex-shrink-0 tracking-widest border border-[#FFD13B]/20">
              UAS
            </div>
            <div className="flex flex-col text-white">
              <span className="text-[#FFD13B] text-[9px] md:text-[10px] font-extrabold tracking-[0.2em] uppercase mb-1">Organized By</span>
              <span className="font-black text-[18px] md:text-[20px] uppercase">UNIVERSAL ALLSTARS</span>
              <span className="text-white/70 text-[11px] md:text-[12px] font-medium mt-0.5">Official UPL Season 2 Constitution</span>
            </div>
          </div>
          <div className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-transform relative z-10 mr-2 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Card 2: Hindi Version */}
        <div className="w-full bg-gradient-to-r from-[#FFFDF8] to-[#FDF3D5] border border-[#E9D6A1] rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer group shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-4 md:gap-5 relative z-10">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-[#5C4505] bg-black/5 shadow-inner flex-shrink-0 font-black text-[26px] md:text-[30px]" style={{ fontFamily: 'Times New Roman, serif' }}>
              IN
            </div>
            <div className="flex flex-col text-[#2e2202]">
              <span className="font-black text-[18px] md:text-[20px] uppercase">UPL CONSTITUTION (HINDI)</span>
              <span className="text-[#7A611B] text-[11px] md:text-[12px] font-medium mt-0.5">Read the full rulebook in Devanagari Hindi</span>
            </div>
          </div>
          <div className="text-[#967924] group-hover:text-[#5C4505] group-hover:translate-x-1 transition-transform relative z-10 mr-2 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Card 3: WhatsApp Group */}
        <div className="w-full bg-[#1FAF6B] rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer group shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-4 md:gap-5 relative z-10">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white bg-black/15 shadow-inner flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.01 2.01c-5.52 0-10 4.48-10 10 0 1.94.55 3.75 1.5 5.25L2.5 21.5l4.35-1.04c1.47.88 3.22 1.39 5.16 1.39 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.17 14.36c-.23.63-1.14 1.15-1.74 1.25-.56.09-1.32.22-3.87-.83-3.04-1.26-5.01-4.44-5.17-4.66-.16-.21-1.24-1.64-1.24-3.13 0-1.49.77-2.22 1.05-2.52.28-.29.61-.37.82-.37.21 0 .42.01.6.01.21 0 .49-.08.77.62.29.74 1.01 2.46 1.1 2.65.09.19.15.42.02.66-.13.25-.19.4-.38.63-.19.23-.41.51-.57.69-.19.21-.39.43-.16.83.23.4 1.01 1.67 2.16 2.7 1.48 1.33 2.73 1.74 3.13 1.93.4.19.63.15.87-.13.23-.27 1.01-1.18 1.28-1.58.27-.4.54-.33.91-.2.37.13 2.34 1.1 2.74 1.3.4.19.67.29.76.45.1.16.1.95-.13 1.58z" />
              </svg>
            </div>
            <div className="flex flex-col text-white">
              <span className="font-black text-[18px] md:text-[20px] uppercase">JOIN UPL WHATSAPP</span>
              <span className="text-white/85 text-[11px] md:text-[12px] font-medium mt-0.5">Live updates, fixtures, results & announcements</span>
            </div>
          </div>
          <div className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-transform relative z-10 mr-2 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Card 4: Teams Analysis */}
        <div className="w-full bg-gradient-to-r from-[#2F1F5E] to-[#4A208D] rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer group shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-4 md:gap-5 relative z-10">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white bg-black/20 shadow-inner flex-shrink-0">
              <span className="text-[26px] md:text-[30px] drop-shadow-md">📊</span>
            </div>
            <div className="flex flex-col text-white">
              <span className="font-black text-[18px] md:text-[20px] uppercase">TEAMS ANALYSIS</span>
              <span className="text-white/85 text-[11px] md:text-[12px] font-medium mt-0.5">Squad power, batting vs bowling, radar profiles & tier rankings</span>
            </div>
          </div>
          <div className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-transform relative z-10 mr-2 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

      </div>

      {/* Grid of Categories */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-3">
        
        {/* Players */}
        <div className="bg-[#125B36] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#22c55e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">👥</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">ALL REGISTERED PLAYERS</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>PLAYERS</span>
              <span className="text-white text-[12px] font-semibold mt-1">107 registered</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Star-Ups */}
        <div className="bg-gradient-to-br from-[#CDA028] to-[#A07A18] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#fde047] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">⭐</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">LIVE 24H COOLDOWN TRACKER</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>STAR-UPS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Public log · Constitution §6.11</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Standings */}
        <div className="bg-[#124D7B] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">🏆</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">+FAIR PLAY / PENALTY SAVER TABLES</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>STANDINGS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Full points table</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Hall of Fame */}
        <div className="bg-gradient-to-br from-[#EE9D1C] to-[#CA7B0D] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#fdba74] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">👑</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">UPL LEGENDS · PAST CHAMPIONS</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>HALL OF FAME</span>
              <span className="text-white text-[12px] font-semibold mt-1">Season-by-season tribute</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Champions */}
        <div className="bg-gradient-to-br from-[#AE2721] to-[#801712] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#f87171] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">🏆</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">CROWNED FRANCHISES · BY SEASON</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>CHAMPIONS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Title winners of UPL</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Captains & Squads */}
        <div className="bg-[#14797B] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#2dd4bf] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-80">👥</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">TEAM-WISE ROSTERS · BY FRANCHISE</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>CAPTAINS & SQUADS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Every team's lineup & players</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Match Centre */}
        <div className="bg-gradient-to-br from-[#E94B3C] to-[#C92A1D] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#fca5a5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">🏏</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">LIVE SCORES · RECENT RESULTS</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>MATCH CENTRE</span>
              <span className="text-white text-[12px] font-semibold mt-1">Live updates & scorecards</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Fixtures */}
        <div className="bg-gradient-to-br from-[#2C5F2D] to-[#144D14] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#4ade80] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">📅</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">LEAGUE SCHEDULE · PLAYOFFS</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>FIXTURES</span>
              <span className="text-white text-[12px] font-semibold mt-1">Upcoming matches & dates</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Records */}
        <div className="bg-gradient-to-br from-[#1C4E80] to-[#0D3055] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">📊</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">HIGHEST SCORES · MOST WICKETS</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>RECORDS</span>
              <span className="text-white text-[12px] font-semibold mt-1">All-time league milestones</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Awards */}
        <div className="bg-gradient-to-br from-[#D9A05B] to-[#B37932] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#fcd34d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">🏅</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">ORANGE CAP · PURPLE CAP · MVP</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>AWARDS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Season honors & trophies</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-gradient-to-br from-[#763626] to-[#501D11] rounded-xl p-5 flex items-center justify-between cursor-pointer group shadow-md hover:brightness-110 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#fca5a5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-black/10 rounded-full">
              <span className="text-2xl drop-shadow-lg opacity-90">🎯</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase mb-0.5">TOP BATSMEN · TOP BOWLERS</span>
              <span className="text-white font-black text-[22px] uppercase leading-none tracking-tight" style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}>TOP PERFORMERS</span>
              <span className="text-white text-[12px] font-semibold mt-1">Weekly & overall leaders</span>
            </div>
          </div>
          <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>

      </div>

      {/* Quick Links Section */}
      <div className="w-full bg-[#FCFAEE] border border-[#EBE4D5] rounded-xl p-5 mt-4 shadow-sm relative z-10">
        <h3 className="text-[#333] font-extrabold text-[15px] mb-4">Quick Links</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'STANDINGS', color: '#3B82F6' },
            { name: 'RESULTS', color: '#EF4444' },
            { name: 'SCHEDULE', color: '#10B981' },
            { name: 'PLAYERS', color: '#F59E0B' },
            { name: 'WITHDRAWN', color: '#6B7280' },
            { name: 'EXTRAS', color: '#8B5CF6' },
            { name: 'CHAMPIONS', color: '#EC4899' },
            { name: 'HALL OF FAME', color: '#F59E0B' },
            { name: 'RECORDS', color: '#06B6D4' },
            { name: 'POT', color: '#14B8A6' },
            { name: 'SQUADS', color: '#3B82F6' },
            { name: 'FAIR PLAY', color: '#10B981' },
            { name: 'PENALTIES', color: '#EF4444' },
            { name: 'RETENTION', color: '#8B5CF6' },
            { name: 'PLAYOFFS', color: '#F97316' },
            { name: 'AWARDS', color: '#EAB308' },
            { name: 'RULES', color: '#6366F1' },
            { name: 'STAR-UPS', color: '#EC4899' },
            { name: 'CONSTITUTION', color: '#8B5CF6' },
            { name: 'CONSTITUTION (HINDI)', color: '#F59E0B' },
            { name: 'PLAYER LOGIN', color: '#10B981' }
          ].map(link => (
            <button key={link.name} className="bg-white border border-[#E5E0D5] text-[#333] text-[10px] md:text-[11px] font-bold px-4 py-2.5 rounded-md hover:bg-[#F5F0E1] transition-colors shadow-sm flex-1 md:flex-none text-center whitespace-nowrap relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20" style={{ backgroundColor: link.color }}></div>
              <span className="relative z-10">{link.name}</span>
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
            <div key={f.id} className="relative overflow-hidden group flex flex-col items-center justify-center p-2 rounded-xl border border-gray-200 bg-white cursor-pointer hover:shadow-md transition-shadow min-w-[75px]">
              <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20" style={{ backgroundColor: f.color }}></div>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center font-black text-[13px] tracking-tight relative z-10" style={{ backgroundColor: f.color, color: f.text }}>
                {f.id}
              </div>
              <span className="text-[9px] font-extrabold text-gray-500 mt-2 tracking-wider relative z-10">{f.name}</span>
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
