import React from 'react';
import { useGame } from '../../context/GameContext';
import { LEVELS } from '../../data/mockData';
import {
  Flame,
  Zap,
  RotateCcw,
  Info,
  Menu,
  Shield,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const { user, resetDemo, setShowCreditsModal, currentPage, setCurrentPage } = useGame();

  // Find next level info
  const currentLevelObj = LEVELS.find((l) => l.level === user.level) || LEVELS[0];
  const nextLevelObj = LEVELS.find((l) => l.level === user.level + 1) || currentLevelObj;
  
  const xpCurrentTier = user.xp - currentLevelObj.minXp;
  const xpSpanTier = Math.max(1, nextLevelObj.minXp - currentLevelObj.minXp);
  const progressPercent = Math.min(100, Math.max(5, Math.round((xpCurrentTier / xpSpanTier) * 100)));

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0d17]/80 backdrop-blur-xl border-b border-slate-800/80 px-4 lg:px-8 py-3 flex items-center justify-between transition-all">
      {/* Left: Mobile Toggle & Brand/Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setCurrentPage('landing')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-black text-sm tracking-tighter">
            SAI
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-sm text-white tracking-wide">
                SAI-I PLATFORM
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20 uppercase tracking-wider">
                Youth Skills
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block -mt-0.5">
              Society Academia Internship
            </span>
          </div>
        </div>
      </div>

      {/* Center: Live Level & XP Progress Indicator (visible on md+) */}
      <div className="hidden md:flex items-center gap-4 bg-slate-900/60 border border-slate-800/90 rounded-2xl px-4 py-2">
        {/* Level Badge */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-black text-white shadow-sm shadow-cyan-500/30">
            {user.level}
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Rank Status</div>
            <div className="text-xs font-bold text-white flex items-center gap-1">
              <span>{user.levelTitle}</span>
            </div>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="w-36 lg:w-44">
          <div className="flex items-center justify-between text-[10px] font-semibold mb-1">
            <span className="text-cyan-400 flex items-center gap-0.5">
              <Zap className="w-3 h-3 fill-cyan-400" />
              {user.xp} XP
            </span>
            <span className="text-slate-400">{nextLevelObj.minXp} XP</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 shadow-glow-cyan"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-300 text-xs font-bold">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
          <span>{user.streak}d Streak</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Project Credits & Team Modal Button */}
        <button
          onClick={() => setShowCreditsModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition"
          title="SAI-I Academic Project & Team Information"
        >
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">SAI-I Team</span>
        </button>

        {/* Reset Demo State Button */}
        <button
          onClick={resetDemo}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-400 hover:text-amber-400 transition"
          title="Reset demo data to default state"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Reset Demo</span>
        </button>

        {/* Profile Avatar Trigger */}
        <button
          onClick={() => setCurrentPage('profile')}
          className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition group"
        >
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-7 h-7 rounded-lg object-cover border border-cyan-500/40"
          />
          <div className="text-left hidden sm:block">
            <span className="block text-xs font-bold text-white group-hover:text-cyan-300 transition leading-tight">
              {user.name.split(' ')[0]}
            </span>
            <span className="block text-[10px] text-slate-400 leading-none">
              {user.archetype}
            </span>
          </div>
        </button>
      </div>
    </header>
  );
};
