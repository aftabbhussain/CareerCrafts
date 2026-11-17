import React from 'react';
import { useGame } from '../context/GameContext';
import {
  LEVELS,
  DAILY_QUESTS,
  WEEKLY_ACTIVITY,
  ACHIEVEMENTS,
  SKILL_TREES,
  CAREER_PATHS
} from '../data/mockData';
import {
  Zap,
  Flame,
  CheckCircle2,
  Lock,
  GitBranch,
  Trophy,
  ArrowRight,
  Sparkles,
  Brain,
  Clock,
  Compass,
  ChevronRight,
  TrendingUp,
  Target,
  Award
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';

export const DashboardPage = () => {
  const {
    user,
    completeQuest,
    setActiveQuestModal,
    setSelectedSkillModal,
    setCurrentPage,
    setActiveCareer
  } = useGame();

  // Dynamic greeting based on current local hour
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const currentLevelObj = LEVELS.find((l) => l.level === user.level) || LEVELS[0];
  const nextLevelObj = LEVELS.find((l) => l.level === user.level + 1) || currentLevelObj;
  
  const xpCurrentTier = user.xp - currentLevelObj.minXp;
  const xpSpanTier = Math.max(1, nextLevelObj.minXp - currentLevelObj.minXp);
  const progressPercent = Math.min(100, Math.max(5, Math.round((xpCurrentTier / xpSpanTier) * 100)));

  // 3 Primary Daily Quests for the dashboard
  const featuredQuests = DAILY_QUESTS.slice(0, 3);

  // Recommended next skill: first available uncompleted skill in user's active career
  const activeTree = SKILL_TREES[user.activeCareerGoal] || SKILL_TREES['frontend-dev'];
  let recommendedSkill = null;
  for (const tier of activeTree.levels) {
    for (const sk of tier.skills) {
      if (!user.completedSkillIds?.includes(sk.id)) {
        recommendedSkill = sk;
        break;
      }
    }
    if (recommendedSkill) break;
  }

  // Active career details
  const activeCareerData =
    CAREER_PATHS.find((c) => c.id === user.activeCareerGoal) || CAREER_PATHS[0];

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* 1. Welcome & Rank Overview Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#11182c] via-[#0f172a] to-[#181533] border border-cyan-500/30 p-6 sm:p-8 overflow-hidden shadow-2xl shadow-cyan-950/40">
        {/* Glow circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-sm">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                <span>{user.archetype}</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Level {user.level} {user.levelTitle}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              {getGreeting()}, {user.name.split(' ')[0]}! 👋
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Ready to level up your engineering skills today? Complete your daily quests to maintain your <span className="text-amber-400 font-bold">{user.streak}-day streak</span>!
            </p>
          </div>

          {/* Quick CTA to Skill Tree */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => setCurrentPage('skill-tree')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 transition transform active:scale-95"
            >
              <GitBranch className="w-4 h-4" />
              <span>Resume Skill Tree</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage('quests')}
              className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <span>All Daily Quests</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Key Statistics Cards (5 Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {/* Stat 1: Current Level */}
        <div className="p-4 rounded-2xl bg-[#0f1424] border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>Rank Level</span>
            <div className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
              {user.level}
            </div>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-black text-white font-display">
              Lvl {user.level}
            </div>
            <div className="text-[11px] text-cyan-400 font-medium truncate">
              {user.levelTitle}
            </div>
          </div>
        </div>

        {/* Stat 2: Total XP & Progress */}
        <div className="p-4 rounded-2xl bg-[#0f1424] border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>Total XP</span>
            <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-black text-white font-display flex items-baseline gap-1">
              <span>{user.xp}</span>
              <span className="text-[10px] text-slate-500 font-normal">/ {nextLevelObj.minXp}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1.5">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stat 3: Learning Streak */}
        <div className="p-4 rounded-2xl bg-[#0f1424] border border-slate-800 hover:border-amber-500/40 transition flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>Active Streak</span>
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-black text-amber-300 font-display">
              {user.streak} Days
            </div>
            <div className="text-[11px] text-slate-400">
              🔥 Keep it burning!
            </div>
          </div>
        </div>

        {/* Stat 4: Quests Completed */}
        <div className="p-4 rounded-2xl bg-[#0f1424] border border-slate-800 hover:border-purple-500/40 transition flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>Quests Done</span>
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-black text-white font-display">
              {user.completedQuestsCount}
            </div>
            <div className="text-[11px] text-purple-300">
              {user.completedQuestIds?.length || 0} active today
            </div>
          </div>
        </div>

        {/* Stat 5: Skills Unlocked */}
        <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#0f1424] border border-slate-800 hover:border-emerald-500/40 transition flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
            <span>Skills Mastered</span>
            <GitBranch className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-black text-white font-display">
              {user.unlockedSkillsCount}
            </div>
            <div className="text-[11px] text-emerald-400">
              Across Career Tracks
            </div>
          </div>
        </div>
      </div>

      {/* 3. Daily Quests Section (Featured 3 Quests) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black text-white font-display">
                Today's Daily Quests
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Resets Daily
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Micro-learning challenges to sharpen logic, code, and design thinking.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('quests')}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition"
          >
            <span>View All Quests</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredQuests.map((quest) => {
            const isCompleted = user.completedQuestIds?.includes(quest.id);

            return (
              <div
                key={quest.id}
                className={`p-5 rounded-2xl border transition duration-200 flex flex-col justify-between relative overflow-hidden ${
                  isCompleted
                    ? 'bg-slate-900/40 border-emerald-500/30'
                    : 'bg-[#0f1424] border-slate-800 hover:border-cyan-500/40 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        quest.category === 'Technical Skills'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : quest.category === 'Creative Thinking'
                          ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      {quest.category}
                    </span>

                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                      <Zap className="w-3.5 h-3.5 fill-amber-400" />
                      <span>+{quest.xpReward} XP</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                    {quest.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {quest.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{quest.timeEstimate}</span>
                  </div>

                  {isCompleted ? (
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold px-3 py-1.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Claimed</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveQuestModal(quest)}
                      className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition transform active:scale-95"
                    >
                      <span>Start Quest</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Two-Column Mid Section: Activity Analytics & Next Skill Node */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity Chart (2 Cols) */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-[#0f1424] border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Weekly XP Velocity & Quest Activity</span>
              </h3>
              <p className="text-xs text-slate-400">
                Experience points accumulated over the last 7 calendar days.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-cyan-400">+670 XP</span>
              <span className="block text-[10px] text-slate-500">This Week</span>
            </div>
          </div>

          {/* Recharts Bar Chart */}
          <div className="h-52 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={WEEKLY_ACTIVITY} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis
                  dataKey="day"
                  stroke="#475569"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#475569"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(255, 255, 255, 0.04)' }}
                  contentStyle={{
                    backgroundColor: '#111827',
                    borderColor: '#374151',
                    borderRadius: '12px',
                    fontSize: '11px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value} XP`, 'Gained']}
                />
                <Bar dataKey="xp" radius={[6, 6, 0, 0]}>
                  {WEEKLY_ACTIVITY.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.day === 'Sat' || entry.day === 'Thu' ? '#00f2fe' : '#3b82f6'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Average: 95 XP / day</span>
            <span className="text-emerald-400 font-semibold">18% above cohort average</span>
          </div>
        </div>

        {/* Recommended Next Skill Card (1 Col) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#12182b] to-[#0c101c] border border-cyan-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400">
                Recommended Next Step
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Tier 3 Node
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1.5 font-display">
              {recommendedSkill?.title || 'Global State Management'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {recommendedSkill?.description || 'Learn Zustand and Context APIs to handle complex multi-module web applications.'}
            </p>

            <div className="space-y-2 text-xs mb-4">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                <span className="text-slate-400">Prerequisites</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Satisfied</span>
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                <span className="text-slate-400">Reward</span>
                <span className="text-amber-300 font-bold">+{recommendedSkill?.xpReward || 180} XP</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (recommendedSkill) {
                setSelectedSkillModal(recommendedSkill);
              } else {
                setCurrentPage('skill-tree');
              }
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition"
          >
            <span>Inspect & Unlock Skill</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5. Bottom Section: Active Career Progress & Recent Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Career Pathway Summary */}
        <div className="p-6 rounded-3xl bg-[#0f1424] border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Active Career Roadmap
                </span>
              </div>
              <span className="text-xs font-bold text-cyan-400">
                {activeCareerData.matchPercentage}% Archetype Match
              </span>
            </div>

            <h4 className="text-lg font-bold text-white mb-1 font-display">
              {activeCareerData.title}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {activeCareerData.description}
            </p>

            <div className="mb-4">
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-400">Roadmap Completion</span>
                <span className="text-cyan-400 font-bold">67% (6 / 9 Nodes)</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => setCurrentPage('careers')}
              className="text-xs font-semibold text-slate-400 hover:text-white"
            >
              Explore Other Careers
            </button>
            <button
              onClick={() => setCurrentPage('skill-tree')}
              className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-bold text-xs flex items-center gap-1.5 transition"
            >
              <span>View Interactive Tree</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Recently Unlocked Achievements Showcase */}
        <div className="p-6 rounded-3xl bg-[#0f1424] border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Unlocked Achievements
                </span>
              </div>
              <button
                onClick={() => setCurrentPage('achievements')}
                className="text-xs font-bold text-purple-400 hover:text-purple-300"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              {ACHIEVEMENTS.slice(0, 3).map((ach) => (
                <div
                  key={ach.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">{ach.title}</h5>
                      <p className="text-[11px] text-slate-400 leading-tight">{ach.description}</p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-amber-300 font-mono">
                    +{ach.xpBonus} XP
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 mt-3 text-[11px] text-slate-500 italic">
            * Complete quests & skill nodes to unlock legendary badges.
          </div>
        </div>
      </div>

      {/* 6. Daily Motivation Quote */}
      <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center text-xs text-slate-400">
        <span className="text-cyan-400 font-bold mr-1.5">Daily Motivation:</span>
        "Small, consistent daily quests compound into formidable technical superpowers. Keep your streak alive!"
      </div>
    </div>
  );
};
