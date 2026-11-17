import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import {
  User,
  Brain,
  Zap,
  Flame,
  GitBranch,
  Edit2,
  Check,
  RotateCcw,
  Sparkles,
  Info,
  GraduationCap
} from 'lucide-react';

export const ProfilePage = () => {
  const { user, updateUserProfile, resetDemo, setShowCreditsModal, credits } = useGame();

  const [isEditing, setIsEditing] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: user.name,
    email: user.email || 'aftab.student@sai-i.edu',
    college: user.college || 'College of Engineering & Technology',
    branch: user.branch,
    bio: user.bio || 'Passionate computer science student exploring gamified learning pathways.'
  });

  const handleSave = () => {
    updateUserProfile(profileForm);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>Student Profile Record</span>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
            My Student Profile
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage your personal academic identity and portfolio settings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCreditsModal(true)}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>SAI-I Team Info</span>
          </button>

          <button
            onClick={resetDemo}
            className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-bold text-rose-300 transition flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>

      {/* Main Profile Info Card */}
      <div className="rounded-3xl bg-[#0f1424] border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0f1424]" />
            </div>

            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl font-black text-white font-display">{user.name}</h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  Lvl {user.level} {user.levelTitle}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{user.branch} • {user.college}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs font-bold text-purple-400 flex items-center gap-1">
                  <Brain className="w-3.5 h-3.5" />
                  <span>{user.archetype}</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{user.streak}-Day Streak</span>
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (isEditing) {
                handleSave();
              } else {
                setProfileForm({
                  name: user.name,
                  email: user.email || 'aftab.student@sai-i.edu',
                  college: user.college || 'College of Engineering & Technology',
                  branch: user.branch,
                  bio: user.bio || ''
                });
                setIsEditing(true);
              }
            }}
            className="px-4 py-2 rounded-xl border border-slate-700 hover:border-cyan-500 text-xs font-semibold text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 transition"
          >
            {isEditing ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Save Profile</span>
              </>
            ) : (
              <>
                <Edit2 className="w-4 h-4 text-cyan-400" />
                <span>Edit Profile</span>
              </>
            )}
          </button>
        </div>

        {/* Profile Details Form / View */}
        <div className="pt-6">
          {isEditing ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  value={profileForm.email}
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">College / Institution</label>
                <input
                  type="text"
                  value={profileForm.college}
                  onChange={(e) => setProfileForm({ ...profileForm, college: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Branch / Specialization</label>
                <input
                  type="text"
                  value={profileForm.branch}
                  onChange={(e) => setProfileForm({ ...profileForm, branch: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-400 mb-1">Career Bio / Goal</label>
                <textarea
                  rows={3}
                  value={profileForm.bio}
                  onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white resize-none"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  Save Profile Changes
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                  About Me / Career Bio
                </span>
                <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                  {user.bio || 'Passionate computer science student exploring gamified learning pathways.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                    Key Interests
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(user.interests || []).map((int, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs border border-slate-800">
                        {int}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                    Verified Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(user.existingSkills || []).map((sk, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/20">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Institutional Project Notice */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-cyan-400 block mb-0.5">
            Academic Context
          </span>
          <h3 className="text-sm font-bold text-white">
            {credits.program} • {credits.projectTitle}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Under the guidance of {credits.guide}. Built for college evaluation.
          </p>
        </div>

        <button
          onClick={() => setShowCreditsModal(true)}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition whitespace-nowrap"
        >
          View Team Roster
        </button>
      </div>
    </div>
  );
};
