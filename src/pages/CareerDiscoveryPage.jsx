import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CAREER_PATHS } from '../data/mockData';
import {
  Compass,
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Target,
  CheckCircle2
} from 'lucide-react';

export const CareerDiscoveryPage = () => {
  const { setSelectedCareerModal, user, setCareerGoal } = useGame();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engineering & UI', 'Creative Design', 'Intelligent Systems', 'Data & Analytics', 'Creative Tech', 'Hybrid / Innovation'];

  const filteredCareers = CAREER_PATHS.filter((career) => {
    const matchesSearch =
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.skillsRequired.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || career.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Page Header */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
            <Compass className="w-3 h-3" />
            <span>AI-Driven Career Guidance Engine</span>
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
          Explore Career Pathways
        </h1>
        <p className="text-xs text-slate-400 mt-1 max-w-xl">
          Discover modern technology tracks mapped against your archetype ({user.archetype}).
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by career, framework, or skill..."
            className="w-full bg-[#0f1424] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => {
          const isCurrentGoal = user.activeCareerGoal === career.id;

          return (
            <div
              key={career.id}
              className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between relative group ${
                isCurrentGoal
                  ? 'bg-gradient-to-br from-[#12192e] to-[#0f1424] border-cyan-500 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                  : 'bg-[#0f1424] border-slate-800 hover:border-slate-700 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Top Tags */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {career.category}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{career.matchPercentage}% Match</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-display mb-1.5 group-hover:text-cyan-300 transition">
                  {career.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {career.description}
                </p>

                {/* Demand & Compensation Mini Tags */}
                <div className="grid grid-cols-2 gap-2 text-[11px] mb-4">
                  <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 block">Demand</span>
                    <span className="font-bold text-emerald-400">{career.demand}</span>
                  </div>
                  <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 block">Salary Band</span>
                    <span className="font-bold text-amber-300 truncate block">{career.averageSalary.split('(')[0]}</span>
                  </div>
                </div>

                {/* Required Skills Chips */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Required Core Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {career.skillsRequired.slice(0, 4).map((skillName, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] bg-slate-900 text-slate-300 border border-slate-800 font-mono"
                      >
                        {skillName}
                      </span>
                    ))}
                    {career.skillsRequired.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] text-slate-500">
                        +{career.skillsRequired.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {isCurrentGoal ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Active Goal</span>
                  </span>
                ) : (
                  <button
                    onClick={() => setCareerGoal(career.id)}
                    className="text-xs font-semibold text-slate-400 hover:text-cyan-300 transition"
                  >
                    Set as Goal
                  </button>
                )}

                <button
                  onClick={() => setSelectedCareerModal(career)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-white font-bold text-xs flex items-center gap-1.5 transition"
                >
                  <span>Explore Role</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCareers.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-[#0f1424] border border-slate-800">
          <p className="text-sm text-slate-400">No careers matched your search query.</p>
        </div>
      )}
    </div>
  );
};
