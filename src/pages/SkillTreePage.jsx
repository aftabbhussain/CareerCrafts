import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { SKILL_TREES, CAREER_PATHS } from '../data/mockData';
import {
  GitBranch,
  CheckCircle2,
  Lock,
  Zap,
  Sparkles,
  ArrowRight,
  Clock,
  Compass,
  Layers,
  Award,
  ChevronDown
} from 'lucide-react';

export const SkillTreePage = () => {
  const {
    activeCareer,
    setActiveCareer,
    user,
    setSelectedSkillModal,
    unlockSkill
  } = useGame();

  const currentTree = SKILL_TREES[activeCareer] || SKILL_TREES['frontend-dev'];

  // Calculate completion percentage for this active tree
  let totalSkillsInTree = 0;
  let completedSkillsInTree = 0;

  currentTree.levels.forEach((lvl) => {
    lvl.skills.forEach((sk) => {
      totalSkillsInTree += 1;
      if (user.completedSkillIds?.includes(sk.id)) {
        completedSkillsInTree += 1;
      }
    });
  });

  const completionPercent = Math.round(
    (completedSkillsInTree / Math.max(1, totalSkillsInTree)) * 100
  );

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Header & Career Track Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
              <GitBranch className="w-3 h-3" />
              <span>Interactive RPG Skill Graph</span>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
            Career Mastery Roadmap
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Click available nodes to inspect study resources and master skills to unlock advanced tiers.
          </p>
        </div>

        {/* Career Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {Object.keys(SKILL_TREES).map((careerKey) => {
            const isSelected = activeCareer === careerKey;
            const careerObj = CAREER_PATHS.find((c) => c.id === careerKey);

            return (
              <button
                key={careerKey}
                onClick={() => setActiveCareer(careerKey)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{careerObj?.title || careerKey}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress & Tree HUD Bar */}
      <div className="p-5 rounded-2xl bg-[#0f1424] border border-cyan-500/20 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
            Current Roadmap Track
          </span>
          <h2 className="text-lg font-black text-white font-display flex items-center gap-2">
            <span>{currentTree.title}</span>
            <span className="text-xs font-normal text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-lg border border-cyan-500/20">
              {currentTree.roleTag}
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-4 sm:w-64">
          <div className="flex-1">
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-400">Roadmap Mastery</span>
              <span className="text-cyan-400 font-bold font-mono">
                {completedSkillsInTree}/{totalSkillsInTree} ({completionPercent}%)
              </span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-xs bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
        <span className="text-slate-500 font-semibold text-[10px] uppercase">Node Legend:</span>
        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
            <CheckCircle2 className="w-2.5 h-2.5" />
          </div>
          <span>Completed & Mastered</span>
        </div>
        <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
          <div className="w-3 h-3 rounded-full bg-cyan-500/20 border border-cyan-400 animate-pulse" />
          <span>Available to Master</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 font-semibold">
          <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
          <span>Prerequisites Locked</span>
        </div>
      </div>

      {/* RPG Tiers & Interactive Nodes Graph */}
      <div className="space-y-10 relative">
        {currentTree.levels.map((tier, tierIdx) => (
          <div key={tier.id} className="relative">
            {/* Tier Header Banner */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center font-black text-cyan-400 text-xs">
                T{tierIdx + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-display">{tier.title}</h3>
                <p className="text-xs text-slate-400">{tier.description}</p>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-800 to-transparent ml-4" />
            </div>

            {/* Nodes Grid within Tier */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
              {tier.skills.map((skill) => {
                const isCompleted = user.completedSkillIds?.includes(skill.id);
                const prereqsMet =
                  !skill.prerequisites ||
                  skill.prerequisites.length === 0 ||
                  skill.prerequisites.every((id) => user.completedSkillIds?.includes(id));

                const isLocked = !isCompleted && !prereqsMet;
                const isAvailable = !isCompleted && prereqsMet;

                return (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkillModal(skill)}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group ${
                      isCompleted
                        ? 'bg-slate-900/60 border-emerald-500/40 hover:border-emerald-400 shadow-lg shadow-emerald-950/20'
                        : isAvailable
                        ? 'bg-gradient-to-br from-[#12192e] to-[#0f1424] border-cyan-500/60 hover:border-cyan-400 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/20'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 opacity-60'
                    }`}
                  >
                    {/* Corner Status Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {skill.category}
                      </span>

                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Mastered</span>
                        </span>
                      ) : isAvailable ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-cyan-300 bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-400 animate-pulse">
                          <Zap className="w-3 h-3 fill-cyan-400" />
                          <span>Ready (+{skill.xpReward} XP)</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                          <Lock className="w-3 h-3" />
                          <span>Locked</span>
                        </span>
                      )}
                    </div>

                    {/* Skill Title & Info */}
                    <h4 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                      {skill.description}
                    </p>

                    {/* Footer Info */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{skill.estimatedHours}</span>
                      </div>

                      <div className="font-bold text-xs text-amber-300">
                        +{skill.xpReward} XP
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connecting Visual SVG Lines between Tiers */}
            {tierIdx < currentTree.levels.length - 1 && (
              <div className="w-full flex items-center justify-center my-6">
                <div className="flex flex-col items-center">
                  <div className="w-[2px] h-6 bg-gradient-to-b from-cyan-500/50 to-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow-cyan" />
                  <div className="w-[2px] h-6 bg-gradient-to-b from-slate-800 to-cyan-500/50" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
