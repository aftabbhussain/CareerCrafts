import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { DAILY_QUESTS } from '../data/mockData';
import {
  CalendarCheck,
  Zap,
  Clock,
  CheckCircle2,
  Filter,
  ArrowRight,
  Flame,
  Brain,
  Code2,
  Sparkles,
  MessageSquare,
  Compass,
  Palette
} from 'lucide-react';

export const DailyQuestsPage = () => {
  const { user, setActiveQuestModal, completeQuest } = useGame();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'available', 'completed'

  const categories = [
    'All',
    'Technical Skills',
    'Creative Thinking',
    'Logical Reasoning',
    'Communication',
    'Career Preparation'
  ];

  const filteredQuests = DAILY_QUESTS.filter((quest) => {
    const isCompleted = user.completedQuestIds?.includes(quest.id);

    const matchesCategory =
      selectedCategory === 'All' || quest.category === selectedCategory;

    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'completed' && isCompleted) ||
      (filterStatus === 'available' && !isCompleted);

    return matchesCategory && matchesStatus;
  });

  const completedCount = user.completedQuestIds?.length || 0;
  const totalQuests = DAILY_QUESTS.length;

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Page Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-400" />
              <span>Daily Gamified Quest Board</span>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
            Daily Learning Challenges
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Complete daily quests to reinforce practical coding, problem-solving, and career habits.
          </p>
        </div>

        {/* Quick Streak & Progress HUD */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#0f1424] border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Flame className="w-5 h-5 fill-amber-400 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Current Streak</span>
              <span className="text-sm font-black text-amber-300">{user.streak} Days Running</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#0f1424] border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
              {completedCount}/{totalQuests}
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Today's Quests</span>
              <span className="text-sm font-black text-cyan-300">{Math.round((completedCount/totalQuests)*100)}% Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Status Toggle Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              filterStatus === 'all'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All ({DAILY_QUESTS.length})
          </button>
          <button
            onClick={() => setFilterStatus('available')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              filterStatus === 'available'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setFilterStatus('completed')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              filterStatus === 'completed'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Quests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredQuests.map((quest) => {
          const isCompleted = user.completedQuestIds?.includes(quest.id);

          return (
            <div
              key={quest.id}
              className={`rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between relative group ${
                isCompleted
                  ? 'bg-slate-900/40 border-emerald-500/30'
                  : 'bg-[#0f1424] border-slate-800 hover:border-cyan-500/40 shadow-lg'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      quest.category === 'Technical Skills'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : quest.category === 'Creative Thinking'
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : quest.category === 'Logical Reasoning'
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : quest.category === 'Communication'
                        ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {quest.category}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    <Zap className="w-3 h-3 fill-amber-400" />
                    <span>+{quest.xpReward} XP</span>
                  </span>
                </div>

                {/* Quest Title */}
                <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-cyan-300 transition leading-snug">
                  {quest.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {quest.description}
                </p>

                {quest.objective && (
                  <div className="text-[11px] bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 text-slate-300 mb-4">
                    <span className="text-cyan-400 font-semibold block text-[10px] uppercase mb-0.5">Focus Objective</span>
                    {quest.objective}
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{quest.timeEstimate}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-semibold">
                    {quest.difficulty}
                  </span>
                </div>

                {isCompleted ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Claimed</span>
                  </span>
                ) : (
                  <button
                    onClick={() => setActiveQuestModal(quest)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition transform active:scale-95"
                  >
                    <span>Start Quest</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
