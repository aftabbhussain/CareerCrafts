import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { ARCHETYPES } from '../data/mockData';
import {
  Brain,
  Sparkles,
  Zap,
  Target,
  CheckCircle2,
  AlertCircle,
  Compass,
  ArrowRight,
  Edit2,
  Check,
  Shield,
  Layers
} from 'lucide-react';

export const ArchetypePage = () => {
  const { user, updateUserProfile, setCurrentPage, setCareerGoal } = useGame();

  const [isEditingInterests, setIsEditingInterests] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState(user.interests || []);

  const archetypeKey = user.archetype || 'The Innovator';
  const archetypeData = ARCHETYPES[archetypeKey] || ARCHETYPES['The Innovator'];

  const allInterestChoices = [
    'Frontend Engineering',
    'UI/UX Design',
    'AI & Intelligent Systems',
    'Data Science & Analytics',
    'Game Development',
    'Cloud Architecture',
    'Web3 & Smart Contracts',
    'Cybersecurity Systems',
    'Product Management',
    'DevOps & CI/CD'
  ];

  const handleInterestToggle = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSaveInterests = () => {
    updateUserProfile({ interests: selectedInterests });
    setIsEditingInterests(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>Simulated Behavioral Profile</span>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
            My Creative DNA & Mindset
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Synthesized from your scenario assessment choices and learning interactions.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('onboarding')}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-2 self-start sm:self-auto"
        >
          <Brain className="w-4 h-4 text-cyan-400" />
          <span>Retake Assessment</span>
        </button>
      </div>

      {/* Main Archetype Card (Large Cyberpunk/Glass Card) */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#12182b] via-[#0d1222] to-[#17122b] border-2 border-cyan-500/40 p-6 sm:p-10 shadow-2xl shadow-cyan-950/40 overflow-hidden">
        {/* Glow Blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Archetype Title & Description */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-bold uppercase tracking-widest">
              <Brain className="w-3.5 h-3.5 text-cyan-400" />
              <span>Dominant Archetype</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              {archetypeData.title}
            </h2>
            <div className="text-base sm:text-lg font-semibold text-cyan-300">
              {archetypeData.tagline}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              {archetypeData.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-200">
                Student: <span className="text-white font-bold">{user.name}</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-200">
                Track: <span className="text-cyan-400 font-bold">{user.branch}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Skill Progress Indicators */}
          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Competency Breakdown</span>
              <span className="text-cyan-400 font-mono text-[10px]">AI-Calculated</span>
            </h3>

            {/* Creativity */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Creativity</span>
                </span>
                <span className="text-pink-400 font-mono font-bold">
                  {archetypeData.stats.creativity}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${archetypeData.stats.creativity}%` }}
                />
              </div>
            </div>

            {/* Logical Thinking */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span>Logical Thinking</span>
                </span>
                <span className="text-blue-400 font-mono font-bold">
                  {archetypeData.stats.logic}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  style={{ width: `${archetypeData.stats.logic}%` }}
                />
              </div>
            </div>

            {/* Problem Solving */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Problem Solving</span>
                </span>
                <span className="text-emerald-400 font-mono font-bold">
                  {archetypeData.stats.problemSolving}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full"
                  style={{ width: `${archetypeData.stats.problemSolving}%` }}
                />
              </div>
            </div>

            {/* Communication */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>Communication</span>
                </span>
                <span className="text-amber-400 font-mono font-bold">
                  {archetypeData.stats.communication}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                  style={{ width: `${archetypeData.stats.communication}%` }}
                />
              </div>
            </div>

            <div className="pt-2 text-[10px] text-slate-500 italic">
              * Indicative scores based on simulated scenario assessment.
            </div>
          </div>
        </div>
      </div>

      {/* Strengths & Growth Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Strengths */}
        <div className="p-6 rounded-3xl bg-[#0f1424] border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              Signature Superpowers & Strengths
            </h3>
          </div>

          <div className="space-y-2.5">
            {archetypeData.strengths.map((str, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                <span className="leading-relaxed">{str}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Areas */}
        <div className="p-6 rounded-3xl bg-[#0f1424] border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <AlertCircle className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              High-Leverage Growth Opportunities
            </h3>
          </div>

          <div className="space-y-2.5">
            {archetypeData.growthAreas.map((growth, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                <span className="leading-relaxed">{growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Career Tracks Based on Archetype */}
      <div className="p-6 rounded-3xl bg-[#0f1424] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Tailored Career Recommendations</span>
            </h3>
            <p className="text-xs text-slate-400">
              Roles aligned with the natural strengths of {archetypeData.title}.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('careers')}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Explore All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {archetypeData.recommendedCareers.map((careerName, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  High Affinity
                </span>
                <h4 className="text-sm font-bold text-white mb-2">{careerName}</h4>
              </div>
              <button
                onClick={() => setCurrentPage('careers')}
                className="text-xs font-semibold text-slate-400 hover:text-cyan-300 flex items-center gap-1 mt-2"
              >
                <span>View Details</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Editable Student Interests Section */}
      <div className="p-6 rounded-3xl bg-[#0f1424] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white font-display">
              My Selected Focus Areas & Interests
            </h3>
            <p className="text-xs text-slate-400">
              Update these anytime to fine-tune your simulated quest recommendations.
            </p>
          </div>

          <button
            onClick={() => {
              if (isEditingInterests) {
                handleSaveInterests();
              } else {
                setSelectedInterests(user.interests || []);
                setIsEditingInterests(true);
              }
            }}
            className="px-3.5 py-1.5 rounded-xl border border-slate-700 hover:border-cyan-500 text-xs font-semibold text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 transition"
          >
            {isEditingInterests ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Save Changes</span>
              </>
            ) : (
              <>
                <Edit2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Modify Interests</span>
              </>
            )}
          </button>
        </div>

        {isEditingInterests ? (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {allInterestChoices.map((interest) => {
                const selected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
                      selected
                        ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSaveInterests}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition"
              >
                Save Selected Interests
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {(user.interests || []).map((interest, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
              >
                {interest}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
