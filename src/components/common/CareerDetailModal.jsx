import React from 'react';
import { useGame } from '../../context/GameContext';
import { X, CheckCircle2, TrendingUp, DollarSign, Target, Compass, Sparkles, BookOpen } from 'lucide-react';

export const CareerDetailModal = () => {
  const { selectedCareerModal, setSelectedCareerModal, setCareerGoal, user, setCurrentPage } = useGame();

  if (!selectedCareerModal) return null;

  const career = selectedCareerModal;
  const isCurrentGoal = user.activeCareerGoal === career.id;

  const handleSetGoalAndNavigate = () => {
    setCareerGoal(career.id);
    setSelectedCareerModal(null);
    setCurrentPage('skill-tree');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#111728] border border-slate-700/80 rounded-2xl p-6 shadow-2xl text-left overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {career.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" />
                {career.matchPercentage}% Archetype Match
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white font-display">{career.title}</h3>
          </div>
          <button
            onClick={() => setSelectedCareerModal(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="py-4 space-y-5 overflow-y-auto pr-1">
          <p className="text-sm text-slate-300 leading-relaxed">
            {career.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase mb-1">Market Demand</span>
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <TrendingUp className="w-4 h-4" />
                <span>{career.demand}</span>
              </div>
            </div>

            <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase mb-1">Industry Salary Band</span>
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <DollarSign className="w-4 h-4" />
                <span>{career.averageSalary}</span>
              </div>
            </div>

            <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[10px] uppercase mb-1">Simulated Match</span>
              <div className="flex items-center gap-1.5 font-bold text-cyan-300">
                <Target className="w-4 h-4" />
                <span>Top Recommended</span>
              </div>
            </div>
          </div>

          {/* Required Competencies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Core Skills & Tools Required
            </h4>
            <div className="flex flex-wrap gap-2">
              {career.skillsRequired.map((skillName, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/70"
                >
                  {skillName}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap Description */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Curated Learning Pathway</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {career.roadmapSummary}
            </p>
          </div>

          <div className="text-[11px] text-slate-400 italic">
            * Note: Match ratings and salary bands are realistic simulated projections for the SAI-I academic showcase.
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3 flex-shrink-0">
          <button
            onClick={() => setSelectedCareerModal(null)}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            Back
          </button>

          <div className="flex items-center gap-3">
            {isCurrentGoal ? (
              <button
                onClick={() => {
                  setSelectedCareerModal(null);
                  setCurrentPage('skill-tree');
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2 hover:bg-cyan-500/30 transition"
              >
                <Compass className="w-4 h-4" />
                <span>View Live Skill Tree</span>
              </button>
            ) : (
              <button
                onClick={handleSetGoalAndNavigate}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition transform active:scale-95"
              >
                <Target className="w-4 h-4" />
                <span>Set as Active Career Goal</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
