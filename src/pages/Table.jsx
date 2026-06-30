import React from 'react';
import { Star } from 'lucide-react';

const Table = () => {
  const pointsTable = [
    { rank: 1, id: 'SRH', name: 'Sultan Riders Hyderabad', m: 70, w: 46, t: 1, l: 23, pts: 93, color: '#F97316' },
    { rank: 2, id: 'CSK', name: 'Chennai Super Knights', m: 70, w: 37, t: 1, l: 32, pts: 75, color: '#FACC15' },
    { rank: 3, id: 'KKR', name: 'Kolkata Knight Raiders', m: 70, w: 37, t: 1, l: 32, pts: 75, color: '#6D28D9' },
    { rank: 4, id: 'GT', name: 'Gujarat Thunderbolts', m: 71, w: 36, t: 0, l: 35, pts: 72, color: '#0F172A' },
    { rank: 5, id: 'LSG', name: 'Lucknow Super Gladiators', m: 70, w: 34, t: 2, l: 34, pts: 70, color: '#06B6D4' },
    { rank: 6, id: 'DC', name: 'Delhi Crusaders', m: 70, w: 34, t: 1, l: 35, pts: 69, color: '#3B82F6' },
    { rank: 7, id: 'RCB', name: 'Royal Crown Bangalore', m: 70, w: 33, t: 2, l: 35, pts: 68, color: '#B91C1C' },
    { rank: 8, id: 'PBKS', name: 'Punjab Khalsa Squad', m: 69, w: 33, t: 1, l: 35, pts: 67, color: '#EF4444' },
    { rank: 9, id: 'MI', name: 'Mumbai Dominators', m: 69, w: 32, t: 1, l: 36, pts: 65, color: '#1E3A8A' },
    { rank: 10, id: 'RR', name: 'Rajasthan Regals', m: 71, w: 23, t: 0, l: 48, pts: 46, color: '#DB2777' },
  ];

  const fairPlayTable = [
    { rank: 1, id: 'DC', name: 'Delhi Crusaders', entries: 15, fp: '+178', color: '#3B82F6' },
    { rank: 2, id: 'KKR', name: 'Kolkata Knight Raiders', entries: 15, fp: '+178', color: '#6D28D9' },
    { rank: 3, id: 'GT', name: 'Gujarat Thunderbolts', entries: 15, fp: '+176', color: '#0F172A' },
  ];

  return (
    <div className="w-full flex flex-col pb-6">
      <div className="bg-white rounded-[14px] shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 p-2 md:p-5 overflow-hidden">
        
        {/* Top Banner */}
        <div className="bg-[#FFF8F0] border border-[#FFEDD5] text-[#D97706] font-black text-[10px] md:text-[12px] text-center py-2.5 rounded-lg mb-4 tracking-wider">
          WIN: 2PTS, TIE: 1PT, LOSS: 0
        </div>

        {/* Main Points Table */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200">
          <table className="w-full min-w-[550px] border-collapse">
            <thead>
              <tr className="bg-[#121A2B] text-white font-black text-[10px] md:text-[11px] uppercase tracking-wider text-center">
                <th className="py-3 px-2 w-[40px] text-left pl-4 rounded-tl-lg">#</th>
                <th className="py-3 px-2 text-left">TEAM</th>
                <th className="py-3 px-2 w-[50px]">M</th>
                <th className="py-3 px-2 w-[50px]">W</th>
                <th className="py-3 px-2 w-[50px]">T</th>
                <th className="py-3 px-2 w-[50px]">L</th>
                <th className="py-3 px-2 w-[60px] pr-4 text-right rounded-tr-lg">PTS</th>
              </tr>
            </thead>
            <tbody>
              {pointsTable.map((team, idx) => (
                <React.Fragment key={team.id}>
                  <tr className={`
                    group relative transition-all duration-300
                    ${team.rank <= 4 ? 'bg-[#FCFAEE]' : 'bg-white'}
                    hover:bg-gray-50 hover:-translate-y-[1px] hover:shadow-sm cursor-pointer z-10
                  `}>
                    <td className="py-3 px-2 pl-4 border-b border-gray-100 relative">
                      {/* Left colored border on hover matching team color */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" style={{ backgroundColor: team.color }}></div>
                      
                      <div className="flex items-center gap-1">
                        {team.rank === 1 && <span className="text-[#FACC15] absolute -left-1 opacity-70 group-hover:opacity-100 transition-opacity"><Star size={12} fill="currentColor" /></span>}
                        <span className="font-black text-gray-900 text-[12px] md:text-[13px]">{team.rank}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-7 md:h-7 rounded flex items-center justify-center text-white font-black text-[9px] md:text-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] shrink-0" style={{ backgroundColor: team.color }}>
                          {team.id}
                        </div>
                        <span className="font-bold text-[12px] md:text-[14px] text-gray-800 whitespace-nowrap">{team.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 border-b border-gray-100 text-center font-black text-gray-700 text-[12px] md:text-[13px]">{team.m}</td>
                    <td className="py-3 px-2 border-b border-gray-100 text-center font-black text-gray-700 text-[12px] md:text-[13px]">{team.w}</td>
                    <td className="py-3 px-2 border-b border-gray-100 text-center font-black text-gray-700 text-[12px] md:text-[13px]">{team.t}</td>
                    <td className="py-3 px-2 border-b border-gray-100 text-center font-black text-gray-700 text-[12px] md:text-[13px]">{team.l}</td>
                    <td className="py-3 px-2 pr-4 border-b border-gray-100 text-right font-black text-[#1E3A8A] text-[13px] md:text-[15px]">{team.pts}</td>
                  </tr>
                  
                  {/* Dashed line after 4th rank (Playoff cutoff) */}
                  {team.rank === 4 && (
                    <tr>
                      <td colSpan="7" className="p-0 border-b-[2px] border-dashed border-[#F59E0B]/60"></td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Fair Play Table */}
        <div className="mt-8">
          <div className="bg-[#14532D] text-white flex justify-between items-center px-4 py-2.5 rounded-t-lg">
            <div className="flex items-center gap-2">
              <Star size={14} fill="#FACC15" className="text-[#FACC15]" />
              <span className="font-black text-[11px] md:text-[13px] tracking-widest uppercase">FAIR PLAY TOPPER STANDINGS</span>
            </div>
            <span className="font-bold text-[9px] md:text-[10px] text-white/80">Constitution §13.2.1</span>
          </div>
          
          <div className="bg-[#F0FDF4] px-4 py-2 text-[#166534] font-semibold text-[10px] md:text-[11px] border-x border-[#DCFCE7]">
            City with highest total Fair Play points qualifies for the <span className="font-black">Fair Play Showdown</span>. Max 25/day per city (Constitution §13.2.1).
          </div>
          
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200">
            <table className="w-full min-w-[500px] border-collapse border-b border-gray-100 rounded-b-lg">
              <thead>
                <tr className="bg-[#121A2B] text-white font-black text-[10px] md:text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-2 w-[40px] text-left pl-4">#</th>
                  <th className="py-3 px-2 text-left">TEAM</th>
                  <th className="py-3 px-2 w-[100px] text-center">ENTRIES</th>
                  <th className="py-3 px-2 w-[100px] pr-4 text-right">TOTAL FP</th>
                </tr>
              </thead>
              <tbody>
                {fairPlayTable.map((team) => (
                  <tr key={team.id} className={`
                    group relative transition-all duration-300
                    ${team.rank === 1 ? 'bg-[#FCFAEE]' : 'bg-white'}
                    border-b border-gray-100 hover:bg-gray-50 hover:-translate-y-[1px] hover:shadow-sm cursor-pointer
                  `}>
                    <td className="py-3 px-2 pl-4 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" style={{ backgroundColor: team.color }}></div>
                      
                      <div className="flex items-center gap-1">
                        {team.rank === 1 && <span className="text-[#FACC15] absolute -left-1 opacity-70 group-hover:opacity-100 transition-opacity"><Star size={12} fill="currentColor" /></span>}
                        <span className="font-black text-gray-900 text-[12px] md:text-[13px]">{team.rank}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-7 md:h-7 rounded flex items-center justify-center text-white font-black text-[9px] md:text-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] shrink-0" style={{ backgroundColor: team.color }}>
                          {team.id}
                        </div>
                        <span className="font-bold text-[12px] md:text-[14px] text-gray-800 whitespace-nowrap">{team.name}</span>
                        {team.rank === 1 && <span className="text-[#2563EB] text-[10px] font-bold ml-1 hover:underline cursor-pointer">date-wise</span>}
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center font-black text-gray-700 text-[12px] md:text-[13px]">{team.entries}</td>
                    <td className="py-3 px-2 pr-4 text-right font-black text-gray-900 text-[13px] md:text-[15px]">{team.fp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Table;
