import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { X, CheckCircle2, Clock, Zap, Target, Sparkles, AlertCircle } from 'lucide-react';

export const QuestActiveModal = () => {
  const { activeQuestModal, setActiveQuestModal, completeQuest, user } = useGame();
  const [submission, setSubmission] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!activeQuestModal) return null;

  const quest = activeQuestModal;
  const isCompleted = user.completedQuestIds?.includes(quest.id);

  const handleComplete = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      completeQuest(quest.id);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#111728] border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-950/50 text-left overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {quest.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                {quest.difficulty} Difficulty
              </span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">{quest.title}</h3>
          </div>
          <button
            onClick={() => setActiveQuestModal(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-4 space-y-4">
          <div className="flex items-center gap-4 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <Clock className="w-4 h-4" />
              <span>{quest.timeEstimate}</span>
            </div>
            <div className="h-4 w-[1px] bg-slate-700" />
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Zap className="w-4 h-4 fill-amber-400" />
              <span>+{quest.xpReward} XP Reward</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Quest Briefing & Challenge
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/80">
              {quest.description}
            </p>
          </div>

          {quest.objective && (
            <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-xl p-3 flex items-start gap-2.5 text-xs text-cyan-200">
              <Target className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5 text-cyan-300">Core Objective:</span>
                <span>{quest.objective}</span>
              </div>
            </div>
          )}

          {/* Solution input workspace */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              Your Learning Reflection or Solution Notes (Optional)
            </label>
            <textarea
              rows={3}
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              placeholder="Type your brief thoughts, key takeaways, or code snippet here..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition resize-none"
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => setActiveQuestModal(null)}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            Cancel
          </button>

          {isCompleted ? (
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Quest Already Completed</span>
            </div>
          ) : (
            <button
              onClick={handleComplete}
              disabled={submitting}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/30 flex items-center gap-2 transition transform active:scale-95 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Validating Quest...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Submit & Claim +{quest.xpReward} XP</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
