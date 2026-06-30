import React, { useState } from 'react';

const Stats = () => {
  const [activeTab, setActiveTab] = useState('');

  const statCategories = [
    ['PLAYERS', 'MATCHES', 'ALL RECORDS'],
    ['TOP SCORES', 'MOST RUNS', 'WICKETS'],
    ['50S & 75S', 'BEST R/B', 'ECONOMY'],
    ['PLAYER OF TOURN.', 'SCHEDULE', 'SQUADS'],
    ['FAIR PLAY', 'PENALTIES', 'PLAYOFFS'],
    ['STAR-UPS', 'AWARDS', 'RULES']
  ];

  const players = [
    { rank: 1, team: 'DC', name: 'KOH JACKMAN', m: '7M', stat: '2.713', color: '#3B82F6' },
    { rank: 2, team: 'SRH', name: 'UK_CSK11', m: '7M', stat: '2.446', color: '#F97316' },
    { rank: 3, team: 'LSG', name: 'NWO I RYOMEN SUKUNA', m: '7M', stat: '2.432', color: '#06B6D4' },
    { rank: 4, team: 'GT', name: 'Sky@ndhraking', m: '7M', stat: '2.423', color: '#0F172A' },
    { rank: 5, team: 'KKR', name: 'BW II Bangladesh', m: '7M', stat: '2.395', color: '#6D28D9' },
    { rank: 6, team: 'KKR', name: 'BW II Sylhet Titans', m: '7M', stat: '2.363', color: '#6D28D9' },
    { rank: 7, team: 'SRH', name: 'NWO II DARINDA', m: '7M', stat: '2.311', color: '#F97316' },
    { rank: 8, team: 'MI', name: 'Erix', m: '7M', stat: '2.291', color: '#1E3A8A' },
    { rank: 9, team: 'CSK', name: 'UK_Knights XI', m: '7M', stat: '2.251', color: '#FACC15' },
    { rank: 10, team: 'RCB', name: 'UAS Tymag', m: '7M', stat: '2.198', color: '#B91C1C' },
    { rank: 11, team: 'PBKS', name: 'Khalsa Warriors', m: '6M', stat: '2.100', color: '#EF4444' },
    { rank: 12, team: 'RR', name: 'Royal Rajput', m: '7M', stat: '2.050', color: '#DB2777' },
  ];

  return (
    <div className="w-full flex flex-col pb-6">
      <div className="bg-white rounded-[14px] shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 p-2 md:p-5 overflow-hidden">
        
        {/* Navigation Grid */}
        <div className="w-full mb-6 flex flex-col gap-2">
          {statCategories.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-3 gap-2 w-full">
              {row.map((cat) => {
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`
                      group relative py-2.5 md:py-3 px-1 border rounded-md text-center flex items-center justify-center
                      transition-all duration-200 outline-none
                      ${isActive 
                        ? 'border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-white' 
                        : 'border-[#F0EBE1] bg-white hover:bg-gray-50'
                      }
                    `}
                  >
                    <span className={`
                      font-black text-[9px] md:text-[11px] uppercase tracking-wider relative z-10
                      ${isActive ? 'text-[#1D4ED8]' : 'text-gray-900 group-hover:text-[#F17B1B]'}
                    `}>
                      {cat}
                    </span>
                    
                    {/* Active State Underline */}
                    {isActive && (
                      <div className="absolute bottom-0 left-4 right-4 md:left-8 md:right-8 h-[2.5px] bg-[#F17B1B] rounded-t-full"></div>
                    )}
                    
                    {/* Hover State Underline (inactive only) */}
                    {!isActive && (
                      <div className="absolute bottom-0 left-4 right-4 md:left-8 md:right-8 h-[2.5px] bg-[#F17B1B]/60 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
          {/* Points Button Full Width */}
          <button
            onClick={() => setActiveTab('POINTS')}
            className={`
              group relative py-2.5 md:py-3 px-1 border rounded-md text-center flex items-center justify-center w-full
              transition-all duration-200 outline-none
              ${activeTab === 'POINTS' 
                ? 'border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-white' 
                : 'border-[#F0EBE1] bg-white hover:bg-gray-50'
              }
            `}
          >
            <span className={`
              font-black text-[9px] md:text-[11px] uppercase tracking-wider relative z-10
              ${activeTab === 'POINTS' ? 'text-[#1D4ED8]' : 'text-gray-900 group-hover:text-[#F17B1B]'}
            `}>
              POINTS
            </span>
            
            {/* Active State Underline */}
            {activeTab === 'POINTS' && (
              <div className="absolute bottom-0 left-1/4 right-1/4 h-[2.5px] bg-[#F17B1B] rounded-t-full"></div>
            )}
            
            {/* Hover State Underline (inactive only) */}
            {activeTab !== 'POINTS' && (
              <div className="absolute bottom-0 left-1/4 right-1/4 h-[2.5px] bg-[#F17B1B]/60 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            )}
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-[#F1F5F9] text-gray-500 font-bold text-[10px] md:text-[11px] py-2.5 px-4 rounded-md mb-2">
          UPL Season 2 | 104 players | Sorted by R/B
        </div>

        {/* Players List */}
        <div className="flex flex-col w-full border border-gray-100 rounded-lg overflow-hidden">
          {players.map((player) => (
            <div 
              key={player.rank} 
              className="group relative flex items-center justify-between py-3.5 px-3 md:px-5 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {/* Left colored border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" style={{ backgroundColor: player.color }}></div>
              
              <div className="flex items-center flex-1">
                <span className="text-[11px] md:text-[13px] text-gray-500 font-bold w-6 md:w-8 shrink-0">{player.rank}</span>
                <div className="w-6 h-6 md:w-7 md:h-7 rounded flex items-center justify-center text-white text-[8px] md:text-[9px] font-black mr-3 md:mr-4 shadow-sm shrink-0" style={{ backgroundColor: player.color }}>
                  {player.team}
                </div>
                <span className="text-[12px] md:text-[14px] text-gray-800 font-bold truncate">{player.name}</span>
              </div>

              <div className="flex items-center gap-3 md:gap-5 shrink-0 pl-2">
                <span className="text-[10px] md:text-[12px] text-gray-400 font-bold">{player.m}</span>
                <span className="text-[13px] md:text-[15px] text-[#1D4ED8] font-black">{player.stat}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Stats;
