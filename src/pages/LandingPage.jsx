import React from 'react';
import { useGame } from '../context/GameContext';
import {
  Sparkles,
  Zap,
  ArrowRight,
  Flame,
  GitBranch,
  Target,
  Trophy,
  Brain,
  Compass,
  CheckCircle2,
  Users,
  Shield,
  Layers,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

export const LandingPage = () => {
  const { setCurrentPage, resetDemo, setShowCreditsModal, credits } = useGame();

  const handleStartJourney = () => {
    setCurrentPage('onboarding');
  };

  const handleExploreDemo = () => {
    setCurrentPage('dashboard');
  };

  const features = [
    {
      title: 'AI-Powered Career Discovery',
      description: 'Synthesize your natural tendencies and technical affinities into tailored modern engineering and design pathways.',
      icon: Compass,
      tag: 'Smart Matching',
      gradient: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30'
    },
    {
      title: 'Interactive RPG Skill Trees',
      description: 'Unlock progressive learning nodes, satisfy prerequisites, and visualize your technical competency just like an RPG game.',
      icon: GitBranch,
      tag: 'RPG Progression',
      gradient: 'from-purple-500/20 to-indigo-500/10',
      border: 'border-purple-500/30'
    },
    {
      title: 'Daily Micro-Learning Quests',
      description: 'Replace overwhelming cramming with 15-minute bite-sized daily challenges that build real coding habits and streaks.',
      icon: Flame,
      tag: 'Habit Engine',
      gradient: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-500/30'
    },
    {
      title: 'XP, Levels & Hall of Fame',
      description: 'Earn experience points for every milestone, unlock legendary badges, and compete with peers on transparent academic leaderboards.',
      icon: Trophy,
      tag: 'Gamification',
      gradient: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30'
    },
    {
      title: 'Discover Your Creative DNA',
      description: 'Uncover whether you are an Innovator, Builder, Strategist, or Visionary through scenario-based situational assessments.',
      icon: Brain,
      tag: 'Archetype Profiling',
      gradient: 'from-pink-500/20 to-rose-500/10',
      border: 'border-pink-500/30'
    },
    {
      title: 'Academic & Industry Alignment',
      description: 'Developed under the Society Academia Internship (SAI-I) to prepare computer science students for high-impact real-world roles.',
      icon: GraduationCap,
      tag: 'SAI-I Initiative',
      gradient: 'from-blue-500/20 to-cyan-500/10',
      border: 'border-blue-500/30'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Discover Your Archetype',
      desc: 'Complete an interactive 4-question scenario assessment to reveal your primary creative mindset.'
    },
    {
      step: '02',
      title: 'Choose Your Career Path',
      desc: 'Explore curated roadmaps in Frontend, UI/UX, AI/ML, and Data with simulated industry match scores.'
    },
    {
      step: '03',
      title: 'Complete Daily Quests',
      desc: 'Engage with daily micro-challenges across logic, creativity, communication, and coding.'
    },
    {
      step: '04',
      title: 'Level Up Your Skill Tree',
      desc: 'Master prerequisite nodes, earn verifiable XP, and graduate from Apprentice to Industry Expert.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#070912] text-slate-100 overflow-hidden relative">
      {/* Background Neon Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[600px] left-[-200px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[1200px] right-[-200px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 flex items-center justify-center font-black text-white text-base shadow-lg shadow-cyan-500/30">
            SAI
          </div>
          <div>
            <span className="font-display font-extrabold text-sm sm:text-base tracking-wide text-white block">
              SAI-I PLATFORM
            </span>
            <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold block -mt-1">
              Group Youth Skill Development
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCreditsModal(true)}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition"
          >
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Project Details</span>
          </button>

          <button
            onClick={handleExploreDemo}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-cyan-300 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 transition shadow-sm"
          >
            Explore Demo
          </button>

          <button
            onClick={handleStartJourney}
            className="px-4 sm:px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/25 flex items-center gap-1.5"
          >
            <span>Start Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-glow-cyan animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Society Academia Internship (SAI-I) Capstone Project</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.1] mb-6">
          Your Future. <br className="hidden sm:block" />
          Your Skills. <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Your Game.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
          Transform academic ambiguity into an engaging RPG adventure. Discover your creative archetype, conquer daily challenges, advance through interactive skill trees, and graduate career-ready.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleStartJourney}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-2xl shadow-cyan-500/35 flex items-center justify-center gap-2.5 transition transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleExploreDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/60 text-slate-200 hover:text-white font-bold text-sm sm:text-base shadow-lg transition flex items-center justify-center gap-2"
          >
            <span>Explore Preconfigured Demo</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Quick Mock Hero Preview Card */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-slate-900/70 border border-slate-800 p-4 sm:p-6 shadow-2xl backdrop-blur-xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
            Interactive Gamified Student HUD
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-2">
            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-left">
              <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Student Rank</span>
              <div className="text-base font-extrabold text-white flex items-center gap-1.5">
                <span className="text-cyan-400">Level 5</span> Apprentice
              </div>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-left">
              <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Experience Points</span>
              <div className="text-base font-extrabold text-amber-300 flex items-center gap-1.5">
                <Zap className="w-4 h-4 fill-amber-400" /> 1,250 XP
              </div>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-left">
              <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Active Streak</span>
              <div className="text-base font-extrabold text-orange-400 flex items-center gap-1.5">
                <Flame className="w-4 h-4 fill-orange-400" /> 7 Days Fire
              </div>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-left">
              <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Creative DNA</span>
              <div className="text-base font-extrabold text-purple-300 flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-purple-400" /> The Innovator
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 border-t border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              The SAI-I Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              How the Gamified Engine Works
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Replacing generic advice with structured, bite-sized skill acquisition and visible game progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="relative bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-6 rounded-2xl transition group"
              >
                <div className="text-3xl font-black text-slate-800 group-hover:text-cyan-500/30 transition mb-3 font-display">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section className="py-20 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Designed for High-Performance Learning
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Every feature bridges modern industry expectations with interactive, motivational mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`bg-slate-900/60 rounded-2xl p-6 border ${feat.border} hover:scale-[1.02] transition duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Guidance & SAI-I Callout */}
      <section className="py-16 border-t border-slate-800/80 bg-gradient-to-b from-[#0e1322] to-[#070912]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center mb-5 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
            <GraduationCap className="w-7 h-7" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
            Society Academia Internship (SAI-I)
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Academic Project Demonstration
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
            Under the Guidance of <span className="text-white font-bold">{credits.guide}</span>. <br />
            Developed by CSE Students to illustrate how gamification and AI-inspired matching revolutionize youth career readiness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowCreditsModal(true)}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-2 transition"
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>View Full Student Development Team</span>
            </button>

            <button
              onClick={handleExploreDemo}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black transition shadow-lg shadow-cyan-500/25"
            >
              Launch Student Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
