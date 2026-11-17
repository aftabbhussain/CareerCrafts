import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { ASSESSMENT_QUESTIONS, ARCHETYPES } from '../data/mockData';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Brain,
  Zap,
  Target,
  Compass,
  Star,
  Layers,
  GraduationCap
} from 'lucide-react';

export const OnboardingPage = () => {
  const { completeOnboarding, setCurrentPage } = useGame();

  const [step, setStep] = useState(1); // 1: Personal, 2: Interests, 3: Assessment, 4: Results

  // Form State
  const [formData, setFormData] = useState({
    name: 'Aftab Hussain',
    educationLevel: 'Undergraduate (3rd Year)',
    branch: 'Computer Science & Engineering',
    interests: ['Frontend Engineering', 'UI/UX Design', 'AI Applications'],
    existingSkills: ['JavaScript', 'HTML/CSS', 'React Basics'],
    answers: {} // { [questionId]: { archetype, scoreKey } }
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Available selectable interests
  const interestOptions = [
    'Frontend Engineering',
    'UI/UX Design',
    'Artificial Intelligence',
    'Data Science & Analytics',
    'Game Development',
    'Cybersecurity',
    'Cloud Computing',
    'Product Management',
    'Mobile App Dev',
    'Blockchain & Web3'
  ];

  // Available selectable skills
  const skillOptions = [
    'JavaScript',
    'Python',
    'HTML/CSS',
    'React Basics',
    'SQL Databases',
    'Figma Prototyping',
    'Git & GitHub',
    'C++ / Java',
    'Public Speaking',
    'Problem Solving'
  ];

  const handleInterestToggle = (item) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(item);
      return {
        ...prev,
        interests: exists ? prev.interests.filter((i) => i !== item) : [...prev.interests, item]
      };
    });
  };

  const handleSkillToggle = (item) => {
    setFormData((prev) => {
      const exists = prev.existingSkills.includes(item);
      return {
        ...prev,
        existingSkills: exists ? prev.existingSkills.filter((s) => s !== item) : [...prev.existingSkills, item]
      };
    });
  };

  const handleSelectAnswer = (questionId, option) => {
    setFormData((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: option
      }
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate archetype based on answers
      calculateArchetype();
    }
  };

  // Determine dominant archetype
  const calculateArchetype = () => {
    const counts = {
      'The Innovator': 0,
      'The Builder': 0,
      'The Visionary': 0,
      'The Strategist': 0
    };

    Object.values(formData.answers).forEach((ans) => {
      if (ans?.archetype && counts[ans.archetype] !== undefined) {
        counts[ans.archetype] += 1;
      }
    });

    // Default to The Innovator if tied
    let maxCount = -1;
    let chosenArchetype = 'The Innovator';

    Object.entries(counts).forEach(([archetype, count]) => {
      if (count > maxCount) {
        maxCount = count;
        chosenArchetype = archetype;
      }
    });

    setFormData((prev) => ({
      ...prev,
      selectedArchetype: chosenArchetype
    }));

    setStep(4); // Move to results step
  };

  const handleFinishOnboarding = () => {
    completeOnboarding({
      name: formData.name,
      educationLevel: formData.educationLevel,
      branch: formData.branch,
      interests: formData.interests,
      existingSkills: formData.existingSkills,
      selectedArchetype: formData.selectedArchetype || 'The Innovator'
    });
  };

  const determinedArchetypeData =
    ARCHETYPES[formData.selectedArchetype || 'The Innovator'] || ARCHETYPES['The Innovator'];

  return (
    <div className="min-h-screen bg-[#070912] text-slate-100 flex flex-col justify-between p-4 sm:p-8">
      {/* Top Header */}
      <div className="max-w-3xl w-full mx-auto flex items-center justify-between pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-black text-white text-xs">
            SAI
          </div>
          <div>
            <h1 className="font-display font-bold text-sm text-white">Student Onboarding</h1>
            <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">
              Step {step} of 4 • {step === 1 ? 'Profile' : step === 2 ? 'Skills' : step === 3 ? 'Assessment' : 'Archetype Reveal'}
            </span>
          </div>
        </div>

        <button
          onClick={() => setCurrentPage('landing')}
          className="text-xs text-slate-400 hover:text-white"
        >
          Exit to Home
        </button>
      </div>

      {/* Main Form Body */}
      <div className="max-w-2xl w-full mx-auto my-8 flex-1 flex flex-col justify-center">
        {/* STEP 1: Personal Information */}
        {step === 1 && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="mb-6">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                Personal Foundation
              </span>
              <h2 className="text-2xl font-black text-white font-display">
                Tell us about your academic track
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                This helps customize your simulated learning roadmaps and quest recommendations.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Aftab Hussain"
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Current Education Level
                  </label>
                  <select
                    value={formData.educationLevel}
                    onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  >
                    <option>Undergraduate (1st Year)</option>
                    <option>Undergraduate (2nd Year)</option>
                    <option>Undergraduate (3rd Year)</option>
                    <option>Undergraduate (Final Year)</option>
                    <option>Postgraduate / Master's</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Field or Branch of Study
                  </label>
                  <input
                    type="text"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    placeholder="e.g. Computer Science & Engineering"
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition"
              >
                <span>Continue to Interests</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Interests & Skills */}
        {step === 2 && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="mb-6">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-1">
                Passions & Capabilities
              </span>
              <h2 className="text-2xl font-black text-white font-display">
                What excites you in tech?
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Select your interest areas and any skills you already have familiarity with.
              </p>
            </div>

            {/* Interests Chips */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Areas of Interest
              </label>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((opt) => {
                  const selected = formData.interests.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => handleInterestToggle(opt)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
                        selected
                          ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-sm'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Existing Skills Chips */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Existing Skills You Know
              </label>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((opt) => {
                  const selected = formData.existingSkills.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => handleSkillToggle(opt)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
                        selected
                          ? 'bg-purple-500/20 border border-purple-400 text-purple-300 shadow-sm'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition"
              >
                <span>Begin Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Scenario Assessment */}
        {step === 3 && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Scenario Challenge {currentQuestionIndex + 1} of {ASSESSMENT_QUESTIONS.length}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {Math.round(((currentQuestionIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100)}% Complete
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-snug mb-6">
              {ASSESSMENT_QUESTIONS[currentQuestionIndex].question}
            </h3>

            {/* Scenario Options */}
            <div className="space-y-3">
              {ASSESSMENT_QUESTIONS[currentQuestionIndex].options.map((opt, idx) => {
                const currentAns = formData.answers[ASSESSMENT_QUESTIONS[currentQuestionIndex].id];
                const isSelected = currentAns?.text === opt.text;

                return (
                  <button
                    key={idx}
                    onClick={() =>
                      handleSelectAnswer(ASSESSMENT_QUESTIONS[currentQuestionIndex].id, opt)
                    }
                    className={`w-full p-4 rounded-2xl text-left border text-xs sm:text-sm transition flex items-start gap-3 ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-glow-cyan'
                        : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected ? 'border-cyan-400 bg-cyan-400 text-slate-950' : 'border-slate-600'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex((prev) => prev - 1);
                  } else {
                    setStep(2);
                  }
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNextQuestion}
                disabled={!formData.answers[ASSESSMENT_QUESTIONS[currentQuestionIndex].id]}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>
                  {currentQuestionIndex === ASSESSMENT_QUESTIONS.length - 1
                    ? 'Analyze My Archetype'
                    : 'Next Scenario'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Results Reveal */}
        {step === 4 && (
          <div className="bg-slate-900/80 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-fadeIn text-center relative overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Assessment Analysis Complete</span>
            </div>

            <h2 className="text-3xl font-black text-white font-display mb-1">
              {determinedArchetypeData.title}
            </h2>
            <p className="text-cyan-300 font-semibold text-xs mb-4">
              {determinedArchetypeData.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto mb-6">
              {determinedArchetypeData.description}
            </p>

            {/* Skill Breakdown Indicators */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-left mb-6 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Simulated Creative Competency Indicators
              </span>

              {Object.entries(determinedArchetypeData.stats).map(([stat, val]) => (
                <div key={stat}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="capitalize text-slate-300">{stat.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-cyan-400 font-mono font-bold">{val}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{ width: `${val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended Careers */}
            <div className="text-left mb-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                Recommended Career Matches
              </span>
              <div className="flex flex-wrap gap-2">
                {determinedArchetypeData.recommendedCareers.map((c, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-[10px] text-slate-400 italic mb-6">
              * Note: This is an illustrative academic prototype simulation, not a standardized psychometric exam.
            </div>

            {/* Enter Dashboard Action */}
            <button
              onClick={handleFinishOnboarding}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 transition transform active:scale-95"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Claim +100 Onboarding XP & Enter Student Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-3xl w-full mx-auto text-center pt-4 border-t border-slate-800 text-[11px] text-slate-500">
        Society Academia Internship (SAI-I) Prototype • Developed by CSE Students
      </div>
    </div>
  );
};
