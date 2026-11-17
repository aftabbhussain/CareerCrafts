import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { ACHIEVEMENTS, LEADERBOARD } from '../data/mockData';
import {
  Trophy,
  Award,
  Crown,
  Flame,
  Zap,
  Lock,
  CheckCircle2,
  Users,
  Star,
  Layers,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const AchievementsPage = () => {
  const { user } = useGame();
  const [leaderboardTab, setLeaderboardTab] = useState('weekly'); // 'weekly', 'monthly', 'allTime'

  const leaderboardList = LEADERBOARD[leaderboardTab] || LEADERBOARD.weekly;

  return (
    <div className="space-y-10 animate-fadeIn pb-16">
      {/* Header */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1">
            <Trophy className="w-3 h-3 text-purple-400" />
            <span>Gamification & Recognition Engine</span>
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
          Achievements & Student Leaderboard
        </h1>
        <p className="text-xs text-slate-400 mt-1 max-w-xl">
          Earn verifiable badges, rise through prestige ranks, and track your milestone standings.
        </p>
      </div>

      {/* SECTION 1: BADGES & ACHIEVEMENTS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-white font-display flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Milestone Badges</span>
            </h2>
            <p className="text-xs text-slate-400">
              Collect all 8 badges to reach Grandmaster prestige status.
            </p>
          </div>

          <div className="text-xs font-bold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
            {user.claimedAchievementIds?.length || 4} / {ACHIEVEMENTS.length} Badges Claimed
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((ach) => {
            const isUnlocked = user.claimedAchievementIds?.includes(ach.id) || ach.unlocked;

            return (
              <div
                key={ach.id}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-[#12192e] to-[#0f1424] border-purple-500/40 shadow-xl shadow-purple-950/20'
                    : 'bg-slate-950/60 border-slate-800/80 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        ach.rarity === 'Legendary'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : ach.rarity === 'Epic'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}
                    >
                      {ach.rarity}
                    </span>

                    <span className="text-[11px] font-bold text-amber-300">
                      +{ach.xpBonus} XP
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold ${
                        isUnlocked
                          ? 'bg-gradient-to-tr from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                          : 'bg-slate-900 text-slate-600 border border-slate-800'
                      }`}
                    >
                      {isUnlocked ? <Trophy className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white font-display leading-tight">
                        {ach.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 block">{ach.category}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  {isUnlocked ? (
                    <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Unlocked</span>
                    </span>
                  ) : (
                    <span className="text-slate-500 font-medium">
                      Progress: {ach.progress || 'Locked'}
                    </span>
                  )}

                  {isUnlocked && (
                    <span className="text-[10px] text-slate-500 font-mono">
                      {ach.unlockedDate || 'Verified'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: LEADERBOARD */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0f1424] border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-white font-display flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-400" />
              <span>Academic Cohort Leaderboard</span>
            </h2>
            <p className="text-xs text-slate-400">
              Transparent XP standings across participating SAI-I students.
            </p>
          </div>

          {/* Timeframe Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 self-start sm:self-auto">
            <button
              onClick={() => setLeaderboardTab('weekly')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                leaderboardTab === 'weekly'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setLeaderboardTab('monthly')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                leaderboardTab === 'monthly'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setLeaderboardTab('allTime')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                leaderboardTab === 'allTime'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Time
            </button>
          </div>
        </div>

        {/* Leaderboard Table / Cards */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase font-bold text-slate-400">
                <th className="pb-3 pl-3">Rank</th>
                <th className="pb-3">Student Contributor</th>
                <th className="pb-3">Rank Level</th>
                <th className="pb-3 text-right">Quests Done</th>
                <th className="pb-3 text-right pr-4">Total XP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {leaderboardList.map((st) => {
                const isCurrentUser = st.isUser;

                return (
                  <tr
                    key={st.rank}
                    className={`transition ${
                      isCurrentUser
                        ? 'bg-cyan-500/10 font-semibold'
                        : 'hover:bg-slate-900/50'
                    }`}
                  >
                    {/* Rank Number */}
                    <td className="py-3.5 pl-3">
                      <div className="flex items-center gap-1.5">
                        {st.rank === 1 ? (
                          <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shadow-md">
                            1
                          </div>
                        ) : st.rank === 2 ? (
                          <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-950 flex items-center justify-center font-black text-xs shadow-md">
                            2
                          </div>
                        ) : st.rank === 3 ? (
                          <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-black text-xs shadow-md">
                            3
                          </div>
                        ) : (
                          <span className="font-mono text-slate-400 pl-2">#{st.rank}</span>
                        )}
                      </div>
                    </td>

                    {/* Student Info */}
                    <td className="py-3.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={st.avatar}
                          alt={st.name}
                          className="w-8 h-8 rounded-xl object-cover border border-slate-700"
                        />
                        <div>
                          <div className="font-bold text-white flex items-center gap-1.5">
                            <span>{st.name}</span>
                            {isCurrentUser && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500 text-slate-950 font-black uppercase">
                                You
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">{st.branch}</span>
                        </div>
                      </div>
                    </td>

                    {/* Level */}
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-bold">
                        Lvl {st.level} • {st.badge}
                      </span>
                    </td>

                    {/* Quests */}
                    <td className="py-3.5 text-right font-mono text-slate-300">
                      {st.quests}
                    </td>

                    {/* Total XP */}
                    <td className="py-3.5 text-right pr-4 font-mono font-bold text-amber-300">
                      {st.xp.toLocaleString()} XP
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="text-[11px] text-slate-500 italic pt-2">
          * Cohort leaderboard simulation for the Society Academia Internship demonstration.
        </div>
      </div>
    </div>
  );
};
