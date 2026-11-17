import React from 'react';
import { useGame } from '../../context/GameContext';
import { X, CheckCircle2, Clock, Zap, BookOpen, Lock, ShieldAlert, Award } from 'lucide-react';

export const SkillDetailModal = () => {
  const { selectedSkillModal, setSelectedSkillModal, unlockSkill, user } = useGame();

  if (!selectedSkillModal) return null;

  const skill = selectedSkillModal;
  const isCompleted = user.completedSkillIds?.includes(skill.id);
  
  // Check if prerequisites are completed
  const prerequisitesMet = !skill.prerequisites || skill.prerequisites.length === 0 || 
    skill.prerequisites.every((prereqId) => user.completedSkillIds?.includes(prereqId));

  const isLocked = !isCompleted && !prerequisitesMet;
  const isAvailable = !isCompleted && prerequisitesMet;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#111728] border border-slate-700/80 rounded-2xl p-6 shadow-2xl text-left overflow-hidden">
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : isAvailable
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 animate-pulse'
                : 'bg-slate-800 text-slate-500 border border-slate-700'
            }`}>
              {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : isAvailable ? <Zap className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${
                isCompleted ? 'text-emerald-400' : isAvailable ? 'text-cyan-400' : 'text-slate-500'
              }`}>
                {isCompleted ? 'Node Mastered' : isAvailable ? 'Ready to Learn & Complete' : 'Prerequisites Locked'}
              </span>
              <h3 className="text-xl font-bold text-white font-display">{skill.title}</h3>
            </div>
          </div>
          <button
            onClick={() => setSelectedSkillModal(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-4 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            {skill.description}
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Estimated Effort</span>
                <span className="font-semibold text-slate-200">{skill.estimatedHours || '10 Hours'}</span>
              </div>
            </div>

            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-center gap-2.5">
              <Award className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">XP Reward</span>
                <span className="font-semibold text-amber-300">+{skill.xpReward || 100} XP</span>
              </div>
            </div>
          </div>

          {/* Recommended Resource */}
          {skill.resource && (
            <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-3 flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-blue-300 block mb-0.5">Recommended Study Material</span>
                <span className="text-slate-300">{skill.resource}</span>
              </div>
            </div>
          )}

          {/* Prerequisite warning if locked */}
          {isLocked && (
            <div className="bg-rose-950/30 border border-rose-500/30 rounded-xl p-3 flex items-start gap-2.5 text-xs text-rose-300">
              <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5">Prerequisites Required:</span>
                <span>You must complete the preceding foundation skills before unlocking this advanced node.</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={() => setSelectedSkillModal(null)}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            Close
          </button>

          {isCompleted ? (
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Skill Completed (+{skill.xpReward} XP Earned)</span>
            </div>
          ) : isAvailable ? (
            <button
              onClick={() => unlockSkill(skill.id)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition transform active:scale-95"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Mark Completed & Earn +{skill.xpReward} XP</span>
            </button>
          ) : (
            <button
              disabled
              className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-500 font-medium text-xs border border-slate-700/50 cursor-not-allowed flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Prerequisites Required</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
