import React from 'react';
import { useGame } from '../../context/GameContext';
import { CheckCircle2, AlertCircle, Info, Trophy, X, Zap } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useGame();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const isAchievement = toast.type === 'achievement';
        const isSuccess = toast.type === 'success';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto transform transition-all duration-300 ease-out translate-y-0 opacity-100 flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-xl ${
              isAchievement
                ? 'bg-gradient-to-r from-purple-950/90 to-indigo-950/90 border-purple-500/50 shadow-purple-900/40'
                : isSuccess
                ? 'bg-slate-900/90 border-cyan-500/40 shadow-cyan-950/50'
                : 'bg-slate-900/90 border-slate-700/60 shadow-black/50'
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {isAchievement ? (
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Trophy className="w-4 h-4" />
                </div>
              ) : isSuccess ? (
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <Info className="w-4 h-4" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-white truncate">{toast.title}</h4>
                {toast.xp > 0 && (
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 text-xs font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    <Zap className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                    +{toast.xp} XP
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
