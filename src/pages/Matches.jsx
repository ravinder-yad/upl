import React, { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';

const Matches = () => {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'list'

  const matchesData = [
    {
      id: 355, type: 'GOLD', typeColor: 'bg-[#D97706]', md: 'MD 10', dateFull: 'Sun, Jul 05', dateShort: 'JUL 05', time: '08:30 PM',
      team1: { id: 'MI', name: 'MUMBAI INDIANS', score: '185/4', overs: '20', color: '#1E3A8A', isWinner: true },
      team2: { id: 'CSK', name: 'CHENNAI SUPER KINGS', score: '170/8', overs: '20', color: '#FACC15', isWinner: false },
      resultText: 'MI WON BY 15 RUNS', margin: '+15 runs'
    },
    {
      id: 354, type: 'SILV', typeColor: 'bg-[#6B7280]', md: 'MD 10', dateFull: 'Sat, Jul 04', dateShort: 'JUL 04', time: '04:00 PM',
      team1: { id: 'DC', name: 'DELHI CAPITALS', score: '162/7', overs: '20', color: '#3B82F6', isWinner: false },
      team2: { id: 'GT', name: 'GUJARAT TITANS', score: '165/3', overs: '18.2', color: '#0F172A', isWinner: true },
      resultText: 'GT WON BY 7 WICKETS', margin: '+7 wkts'
    },
    {
      id: 353, type: 'GOLD', typeColor: 'bg-[#D97706]', md: 'MD 9', dateFull: 'Fri, Jul 03', dateShort: 'JUL 03', time: '08:00 PM',
      team1: { id: 'KKR', name: 'KOLKATA KNIGHT RIDERS', score: '210/5', overs: '20', color: '#6D28D9', isWinner: true },
      team2: { id: 'RCB', name: 'ROYAL CHALLENGERS', score: '198/9', overs: '20', color: '#B91C1C', isWinner: false },
      resultText: 'KKR WON BY 12 RUNS', margin: '+12 runs'
    },
    {
      id: 352, type: 'GOLD', typeColor: 'bg-[#D97706]', md: 'MD 9', dateFull: 'Thu, Jul 02', dateShort: 'JUL 02', time: '08:00 PM',
      team1: { id: 'LSG', name: 'LUCKNOW SUPER GIANTS', score: '175/6', overs: '20', color: '#06B6D4', isWinner: true },
      team2: { id: 'PBKS', name: 'PUNJAB KINGS', score: '171/8', overs: '20', color: '#EF4444', isWinner: false },
      resultText: 'LSG WON BY 4 RUNS', margin: '+4 runs'
    },
    {
      id: 351, type: 'SILV', typeColor: 'bg-[#6B7280]', md: 'MD 8', dateFull: 'Wed, Jul 01', dateShort: 'JUL 01', time: '07:30 PM',
      team1: { id: 'RR', name: 'RAJASTHAN ROYALS', score: '190/3', overs: '20', color: '#DB2777', isWinner: false },
      team2: { id: 'SRH', name: 'SUNRISERS HYDERABAD', score: '191/4', overs: '19.1', color: '#F97316', isWinner: true },
      resultText: 'SRH WON BY 6 WICKETS', margin: '+6 wkts'
    },
    {
      id: 350, type: 'GOLD', typeColor: 'bg-[#D97706]', md: 'MD 8', dateFull: 'Tue, Jun 30', dateShort: 'JUN 30', time: '08:00 PM',
      team1: { id: 'CSK', name: 'CHENNAI SUPER KINGS', score: '145/9', overs: '20', color: '#FACC15', isWinner: false },
      team2: { id: 'KKR', name: 'KOLKATA KNIGHT RIDERS', score: '148/2', overs: '16.4', color: '#6D28D9', isWinner: true },
      resultText: 'KKR WON BY 8 WICKETS', margin: '+8 wkts'
    },
    {
      id: 349, type: 'SILV', typeColor: 'bg-[#6B7280]', md: 'MD 7', dateFull: 'Mon, Jun 29', dateShort: 'JUN 29', time: '08:00 PM',
      team1: { id: 'RCB', name: 'ROYAL CHALLENGERS', score: '220/3', overs: '20', color: '#B91C1C', isWinner: true },
      team2: { id: 'DC', name: 'DELHI CAPITALS', score: '205/8', overs: '20', color: '#3B82F6', isWinner: false },
      resultText: 'RCB WON BY 15 RUNS', margin: '+15 runs'
    },
    {
      id: 348, type: 'GOLD', typeColor: 'bg-[#D97706]', md: 'MD 7', dateFull: 'Sun, Jun 28', dateShort: 'JUN 28', time: '04:00 PM',
      team1: { id: 'GT', name: 'GUJARAT TITANS', score: '155/6', overs: '20', color: '#0F172A', isWinner: false },
      team2: { id: 'LSG', name: 'LUCKNOW SUPER GIANTS', score: '156/5', overs: '19.4', color: '#06B6D4', isWinner: true },
      resultText: 'LSG WON BY 5 WICKETS', margin: '+5 wkts'
    },
    {
      id: 347, type: 'SILV', typeColor: 'bg-[#6B7280]', md: 'MD 6', dateFull: 'Sat, Jun 27', dateShort: 'JUN 27', time: '08:00 PM',
      team1: { id: 'PBKS', name: 'PUNJAB KINGS', score: '188/5', overs: '20', color: '#EF4444', isWinner: true },
      team2: { id: 'RR', name: 'RAJASTHAN ROYALS', score: '176/9', overs: '20', color: '#DB2777', isWinner: false },
      resultText: 'PBKS WON BY 12 RUNS', margin: '+12 runs'
    },
    {
      id: 346, type: 'GOLD', typeColor: 'bg-[#D97706]', md: 'MD 6', dateFull: 'Fri, Jun 26', dateShort: 'JUN 26', time: '08:00 PM',
      team1: { id: 'SRH', name: 'SUNRISERS HYDERABAD', score: '200/4', overs: '20', color: '#F97316', isWinner: false },
      team2: { id: 'MI', name: 'MUMBAI INDIANS', score: '201/3', overs: '18.5', color: '#1E3A8A', isWinner: true },
      resultText: 'MI WON BY 7 WICKETS', margin: '+7 wkts'
    }
  ];

  return (
    <div className="w-full flex flex-col pb-6">
      
      {/* Top Filter Bar */}
      <div className="bg-white rounded-xl p-3 md:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select className="border border-gray-200 rounded-md text-sm px-3 py-2 bg-white text-gray-700 font-semibold focus:outline-none focus:border-blue-500 w-full md:w-auto min-w-[140px] cursor-pointer hover:border-blue-300 transition-colors">
            <option>All Teams</option>
            <option>CSK</option>
            <option>DC</option>
            <option>GT</option>
            <option>KKR</option>
            <option>LSG</option>
            <option>MI</option>
            <option>PBKS</option>
            <option>RR</option>
            <option>RCB</option>
            <option>SRH</option>
          </select>
          
          <div className="relative w-full md:w-auto flex-1 md:flex-none">
            <input 
              type="date" 
              className="border border-gray-200 rounded-md text-sm px-3 py-2 w-full focus:outline-none focus:border-blue-500 text-gray-700 font-semibold cursor-pointer hover:border-blue-300 transition-colors"
            />
          </div>
          
          <button className="bg-[#1E3A8A] text-white px-5 py-2 rounded-md font-bold text-sm w-full md:w-auto hover:bg-[#152960] hover:shadow-md transition-all">
            Filter
          </button>
        </div>

        <div className="flex items-center bg-gray-100 p-1 rounded-lg self-end md:self-auto border border-gray-200/60">
          <button 
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-md text-[13px] font-extrabold transition-all duration-200 ${
              viewMode === 'cards' ? 'bg-white text-[#1E3A8A] shadow-sm scale-105' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <LayoutGrid size={15} strokeWidth={2.5} /> Cards
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-md text-[13px] font-extrabold transition-all duration-200 ${
              viewMode === 'list' ? 'bg-white text-[#1E3A8A] shadow-sm scale-105' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <List size={15} strokeWidth={2.5} /> List
          </button>
        </div>
      </div>

      <div className="text-[#8e9cb0] font-black text-[11px] tracking-[0.1em] mb-4 ml-1">
        350 MATCHES
      </div>

      <div className="flex flex-col gap-4 md:gap-5">
        {matchesData.map((match) => {
          const winningTeam = match.team1.isWinner ? match.team1 : match.team2;
          
          return viewMode === 'cards' ? (
            /* Cards View */
            <div key={match.id} className="bg-white rounded-[14px] shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
              {/* Expanding Top Hover Line matching the winner */}
              <div className="absolute top-0 left-0 right-0 h-[4px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-30" style={{ backgroundColor: winningTeam.color }}></div>

              {/* Left Color Line Indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#121A2B] z-10"></div>

              {/* Card Header */}
              <div className="bg-[#121A2B] px-4 py-3 flex justify-between items-center ml-1.5">
                <div className="flex items-center gap-2">
                  <span className={`${match.typeColor} text-white text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wide`}>{match.type}</span>
                  <span className="bg-[#1E3A8A] text-white text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded border border-white/10">{match.md}</span>
                  <span className="text-[#FACC15] font-black text-[12px] md:text-[13px] ml-1">Match #{match.id}</span>
                </div>
                <div className="text-white/90 font-bold text-[9px] md:text-[11px]">
                  {match.dateFull} <span className="text-[#FACC15] ml-1.5">{match.time}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col px-5 md:px-6 py-5 gap-4 bg-white ml-1.5 relative border-b border-gray-100">
                <div className="absolute left-8 md:left-9 top-8 bottom-8 w-[1px] bg-gray-200 z-0 border-dashed border-l border-gray-300"></div>
                
                {/* Team 1 */}
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-md flex items-center justify-center text-white font-black text-[11px] shadow-sm border border-black/5" style={{ backgroundColor: match.team1.color }}>
                      {match.team1.id}
                    </div>
                    <span className={`font-black text-[14px] md:text-[15px] uppercase ${match.team1.isWinner ? 'text-[#125B36]' : 'text-gray-800'}`}>
                      {match.team1.name}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-black text-[18px] md:text-[20px] text-gray-900">{match.team1.score}</span>
                    <span className="text-[10px] md:text-[11px] font-bold text-gray-400">({match.team1.overs})</span>
                  </div>
                </div>
                
                {/* Team 2 */}
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-md flex items-center justify-center text-white font-black text-[11px] shadow-sm border border-black/5" style={{ backgroundColor: match.team2.color }}>
                      {match.team2.id}
                    </div>
                    <span className={`font-black text-[14px] md:text-[15px] uppercase ${match.team2.isWinner ? 'text-[#125B36]' : 'text-gray-800'}`}>
                      {match.team2.name}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-black text-[18px] md:text-[20px] text-gray-900">{match.team2.score}</span>
                    <span className="text-[10px] md:text-[11px] font-bold text-gray-400">({match.team2.overs})</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-[#FCFAEE] px-5 md:px-6 py-3 ml-1.5 flex justify-between items-center">
                <span className="font-black text-[11px] md:text-[12px] text-gray-900 tracking-wide uppercase">{match.resultText}</span>
                <span className="bg-[#1E3A8A] text-white text-[10px] md:text-[11px] font-bold px-3 py-1 rounded shadow-sm">{match.margin}</span>
              </div>
            </div>
          ) : (
            /* List View */
            <div key={match.id} className="relative bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-200 flex overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-auto md:h-20">
              
              {/* Expanding Top Hover Line matching the winner */}
              <div className="absolute top-0 left-0 right-0 h-[4px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-30" style={{ backgroundColor: winningTeam.color }}></div>

              {/* Left Box */}
              <div className="w-[60px] md:w-[70px] bg-[#121A2B] flex flex-col items-center justify-center py-3 shrink-0 border-r border-gray-800">
                <span className="text-[#FACC15] font-black text-[13px] md:text-[15px]">#{match.id}</span>
                <span className="text-white/60 font-bold text-[9px] md:text-[10px] uppercase tracking-widest mt-0.5">{match.dateShort}</span>
              </div>

              {/* Middle Section */}
              <div className="flex-1 flex flex-col h-full border-r border-gray-100">
                {/* Team 1 Row */}
                <div className={`flex-1 flex justify-between items-center px-3 md:px-5 py-2.5 md:py-0 border-b border-gray-100 ${match.team1.isWinner ? 'bg-[#F2FBF5]' : 'bg-white'}`}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center text-white font-black text-[8px] md:text-[9px]" style={{ backgroundColor: match.team1.color }}>
                      {match.team1.id}
                    </div>
                    <span className={`font-black text-[12px] md:text-[14px] uppercase ${match.team1.isWinner ? 'text-[#125B36]' : 'text-gray-700'}`}>
                      {match.team1.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className={`font-black text-[13px] md:text-[15px] ${match.team1.isWinner ? 'text-[#125B36]' : 'text-gray-700'}`}>{match.team1.score}</span>
                    {match.team1.isWinner && <span className="text-[#125B36] font-bold text-[12px] md:text-[14px]">✓</span>}
                  </div>
                </div>

                {/* Team 2 Row */}
                <div className={`flex-1 flex justify-between items-center px-3 md:px-5 py-2.5 md:py-0 ${match.team2.isWinner ? 'bg-[#F2FBF5]' : 'bg-white'}`}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center text-white font-black text-[8px] md:text-[9px]" style={{ backgroundColor: match.team2.color }}>
                      {match.team2.id}
                    </div>
                    <span className={`font-black text-[12px] md:text-[14px] uppercase ${match.team2.isWinner ? 'text-[#125B36]' : 'text-gray-700'}`}>
                      {match.team2.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className={`font-black text-[13px] md:text-[15px] ${match.team2.isWinner ? 'text-[#125B36]' : 'text-gray-700'}`}>{match.team2.score}</span>
                    {match.team2.isWinner && <span className="text-[#125B36] font-bold text-[12px] md:text-[14px]">✓</span>}
                  </div>
                </div>
              </div>

              {/* Right Box (Winner Badge) */}
              <div className="w-[85px] md:w-[110px] bg-white flex items-center justify-center shrink-0 px-2 relative z-10">
                <span className="border-[1.5px] border-[#34D399] text-[#10B981] font-black text-[9px] md:text-[11px] px-2 md:px-3 py-1 rounded-full uppercase tracking-wider bg-[#F2FBF5] text-center w-full">
                  {winningTeam.id} won
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Matches;
