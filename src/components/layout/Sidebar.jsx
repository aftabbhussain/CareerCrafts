import React from 'react';
import { useGame } from '../../context/GameContext';
import {
  LayoutDashboard,
  Dna,
  Compass,
  GitBranch,
  CalendarCheck,
  Trophy,
  User,
  Home,
  LogOut,
  Sparkles,
  Flame,
  Zap,
  Info
} from 'lucide-react';

export const Sidebar = ({ isOpen, onClose }) => {
  const { currentPage, setCurrentPage, user, setShowCreditsModal, resetDemo } = useGame();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'dna', label: 'My Creative DNA', icon: Dna, badge: user.archetype.replace('The ', '') },
    { id: 'careers', label: 'Career Discovery', icon: Compass, badge: 'AI Match' },
    { id: 'skill-tree', label: 'Skill Tree RPG', icon: GitBranch, badge: 'Interactive' },
    { id: 'quests', label: 'Daily Quests', icon: CalendarCheck, badge: `${user.completedQuestIds?.length || 0}/6` },
    { id: 'achievements', label: 'Achievements & Ranks', icon: Trophy, badge: null },
    { id: 'profile', label: 'My Profile', icon: User, badge: null },
  ];

  const handleNav = (pageId) => {
    setCurrentPage(pageId);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-[#0a0d18] border-r border-slate-800/80 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Logo & App Header */}
        <div>
          <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => handleNav('landing')}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition">
                SAI
              </div>
              <div>
                <span className="font-display font-extrabold text-sm text-white tracking-wider block">
                  SAI-I PLATFORM
                </span>
                <span className="text-[11px] font-medium text-cyan-400 block -mt-0.5">
                  Youth Skill Matrix
                </span>
              </div>
            </button>
          </div>

          {/* User Mini Card */}
          <div className="p-4 mx-3 my-3 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#12192e] border border-slate-800/80 shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-xl object-cover border border-cyan-500/50"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-xs text-white truncate">{user.name}</div>
                <div className="text-[11px] text-cyan-400 font-medium truncate flex items-center gap-1">
                  <Sparkles className="w-3 h-3 flex-shrink-0" />
                  <span>{user.archetype}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Level {user.level} {user.levelTitle}</span>
              <span className="font-bold text-cyan-300 flex items-center gap-0.5">
                <Zap className="w-3 h-3 fill-cyan-400" />
                {user.xp} XP
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="px-3 space-y-1">
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Student Workspace
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-cyan-500/30 text-cyan-200'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Utility Actions */}
        <div className="p-3 border-t border-slate-800/80 space-y-1 bg-[#070912]">
          <button
            onClick={() => handleNav('landing')}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-900/60 transition"
          >
            <Home className="w-4 h-4 text-slate-500" />
            <span>Public Landing Page</span>
          </button>

          <button
            onClick={() => setShowCreditsModal(true)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-cyan-400 hover:bg-slate-900/60 transition"
          >
            <Info className="w-4 h-4 text-cyan-500" />
            <span>SAI-I Team & Credits</span>
          </button>

          <div className="pt-2 border-t border-slate-900">
            <button
              onClick={resetDemo}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
            >
              <LogOut className="w-4 h-4" />
              <span>Reset Demo State</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
