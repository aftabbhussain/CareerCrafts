import React from 'react';
import { useGame } from '../../context/GameContext';
import { Heart, Sparkles, GraduationCap } from 'lucide-react';

export const Footer = () => {
  const { setShowCreditsModal, credits } = useGame();

  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#070912] py-8 px-4 sm:px-8 mt-auto text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">
            SAI
          </div>
          <div>
            <div className="font-bold text-slate-200">
              {credits.projectTitle}
            </div>
            <div className="text-[11px] text-slate-500">
              Society Academia Internship (SAI-I) • Under the Guidance of {credits.guide}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowCreditsModal(true)}
            className="text-cyan-400 hover:text-cyan-300 font-medium hover:underline flex items-center gap-1.5"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Project Team & Guide Details</span>
          </button>
          <span className="text-slate-700">•</span>
          <span className="text-slate-500">Frontend Prototype v1.0</span>
        </div>
      </div>
    </footer>
  );
};
