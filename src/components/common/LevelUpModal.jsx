import React from 'react';
import { useGame } from '../../context/GameContext';
import { Trophy, Zap, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export const LevelUpModal = () => {
  const { levelUpData, setLevelUpData } = useGame();

  if (!levelUpData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-gradient-to-b from-[#161d33] to-[#0d1222] border-2 border-cyan-400/50 rounded-2xl p-6 text-center shadow-2xl shadow-cyan-500/20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Animated Badge Icon */}
          <div className="relative my-4">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-bounce">
              <Trophy className="w-12 h-12 text-white stroke-[2.5]" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full text-xs font-black tracking-wide border-2 border-[#161d33]">
              LVL {levelUpData.level}
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">
            Phenomenal Progress!
          </span>
          <h2 className="text-2xl font-black text-white font-display mb-1">
            LEVEL UP REACHED!
          </h2>
          <p className="text-sm text-slate-300 mb-6">
            You progressed from <span className="text-slate-400 line-through">{levelUpData.oldTitle}</span> to{' '}
            <span className="text-cyan-300 font-bold">{levelUpData.title}</span>!
          </p>

          {/* Perks Unlocked Card */}
          <div className="w-full bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 mb-6 text-left space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Unlocked Privileges & Rewards
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>New Career Roadmap Tier Nodes Unlocked</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>+100 Milestone Bonus Experience Points</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Higher Prestige Badge on Platform Leaderboard</span>
            </div>
          </div>

          <button
            onClick={() => setLevelUpData(null)}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
          >
            <span>Claim Rewards & Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
