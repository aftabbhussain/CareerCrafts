import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  INITIAL_USER,
  LEVELS,
  ARCHETYPES,
  DAILY_QUESTS,
  ACHIEVEMENTS,
  PROJECT_CREDITS,
  SKILL_TREES
} from '../data/mockData';

const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  // Navigation State
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('sai_page') || 'landing';
  });

  // User State
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('sai_user');
      return saved ? JSON.parse(saved) : INITIAL_USER;
    } catch {
      return INITIAL_USER;
    }
  });

  // Active Career Path for Skill Tree
  const [activeCareer, setActiveCareer] = useState(() => {
    return localStorage.getItem('sai_active_career') || 'frontend-dev';
  });

  // Team Credits (editable)
  const [credits, setCredits] = useState(() => {
    try {
      const saved = localStorage.getItem('sai_credits');
      return saved ? JSON.parse(saved) : PROJECT_CREDITS;
    } catch {
      return PROJECT_CREDITS;
    }
  });

  // Toast Notifications
  const [toasts, setToasts] = useState([]);

  // Modals
  const [levelUpData, setLevelUpData] = useState(null);
  const [activeQuestModal, setActiveQuestModal] = useState(null);
  const [selectedSkillModal, setSelectedSkillModal] = useState(null);
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('sai_user', JSON.stringify(user));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('sai_page', currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('sai_active_career', activeCareer);
  }, [activeCareer]);

  useEffect(() => {
    localStorage.setItem('sai_credits', JSON.stringify(credits));
  }, [credits]);

  // Toast dispatcher
  const addToast = ({ title, message, type = 'success', xp = 0, icon = null }) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type, xp, icon }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Trigger celebratory confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899']
      });
    } catch {
      // fallback if confetti lib fails
    }
  };

  // Calculate current level & progression from XP
  const calculateLevel = (currentXp) => {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (currentXp >= LEVELS[i].minXp) {
        return LEVELS[i];
      }
    }
    return LEVELS[0];
  };

  // Complete a Quest
  const completeQuest = (questId) => {
    const quest = DAILY_QUESTS.find((q) => q.id === questId);
    if (!quest) return;

    if (user.completedQuestIds?.includes(questId)) {
      addToast({
        title: 'Already Completed',
        message: 'You have already claimed the XP for this quest today!',
        type: 'info'
      });
      return;
    }

    const earnedXp = quest.xpReward;
    const newXp = user.xp + earnedXp;
    const oldLevelObj = calculateLevel(user.xp);
    const newLevelObj = calculateLevel(newXp);

    const updatedCompletedIds = [...(user.completedQuestIds || []), questId];
    const newQuestCount = (user.completedQuestsCount || 0) + 1;

    // Check achievement triggers
    const updatedAchievements = [...(user.claimedAchievementIds || [])];
    if (!updatedAchievements.includes('ach-1') && newQuestCount >= 1) {
      updatedAchievements.push('ach-1');
      addToast({
        title: '🏆 Achievement Unlocked!',
        message: 'Badge Earned: "First Step"',
        type: 'achievement'
      });
    }

    // Check level up
    if (newLevelObj.level > oldLevelObj.level) {
      setLevelUpData({
        level: newLevelObj.level,
        title: newLevelObj.title,
        oldTitle: oldLevelObj.title,
        xpBonus: 100
      });
      triggerConfetti();
    } else {
      triggerConfetti();
    }

    setUser((prev) => ({
      ...prev,
      xp: newXp,
      level: newLevelObj.level,
      levelTitle: newLevelObj.title,
      completedQuestIds: updatedCompletedIds,
      completedQuestsCount: newQuestCount,
      claimedAchievementIds: updatedAchievements
    }));

    addToast({
      title: 'Quest Completed!',
      message: `Completed "${quest.title}" and gained ${earnedXp} XP!`,
      type: 'success',
      xp: earnedXp
    });

    if (activeQuestModal) {
      setActiveQuestModal(null);
    }
  };

  // Unlock / Complete a Skill Node
  const unlockSkill = (skillId) => {
    let skillFound = null;
    let skillXp = 100;

    // Find the skill across all trees
    Object.values(SKILL_TREES).forEach((tree) => {
      tree.levels.forEach((lvl) => {
        const match = lvl.skills.find((s) => s.id === skillId);
        if (match) {
          skillFound = match;
          skillXp = match.xpReward || 100;
        }
      });
    });

    if (!skillFound) return;

    if (user.completedSkillIds?.includes(skillId)) {
      addToast({
        title: 'Skill Mastered',
        message: `You have already mastered "${skillFound.title}".`,
        type: 'info'
      });
      return;
    }

    const earnedXp = skillXp;
    const newXp = user.xp + earnedXp;
    const oldLevelObj = calculateLevel(user.xp);
    const newLevelObj = calculateLevel(newXp);

    const updatedSkillIds = [...(user.completedSkillIds || []), skillId];
    const newSkillCount = (user.unlockedSkillsCount || 0) + 1;

    // Check achievement triggers
    const updatedAchievements = [...(user.claimedAchievementIds || [])];
    if (!updatedAchievements.includes('ach-5') && newSkillCount >= 5) {
      updatedAchievements.push('ach-5');
      addToast({
        title: '🏆 Achievement Unlocked!',
        message: 'Badge Earned: "Skill Explorer"',
        type: 'achievement'
      });
    }

    if (newLevelObj.level > oldLevelObj.level) {
      setLevelUpData({
        level: newLevelObj.level,
        title: newLevelObj.title,
        oldTitle: oldLevelObj.title,
        xpBonus: 100
      });
      triggerConfetti();
    } else {
      triggerConfetti();
    }

    setUser((prev) => ({
      ...prev,
      xp: newXp,
      level: newLevelObj.level,
      levelTitle: newLevelObj.title,
      completedSkillIds: updatedSkillIds,
      unlockedSkillsCount: newSkillCount,
      claimedAchievementIds: updatedAchievements
    }));

    addToast({
      title: 'Skill Node Mastered!',
      message: `Unlocked "${skillFound.title}" (+${earnedXp} XP)`,
      type: 'success',
      xp: earnedXp
    });

    if (selectedSkillModal) {
      setSelectedSkillModal(null);
    }
  };

  // Set Active Career Goal
  const setCareerGoal = (careerId) => {
    setUser((prev) => ({
      ...prev,
      activeCareerGoal: careerId
    }));
    setActiveCareer(careerId);
    addToast({
      title: 'Career Goal Updated!',
      message: `Your active career pathway is now set to ${careerId.replace('-', ' ').toUpperCase()}.`,
      type: 'success'
    });
  };

  // Complete Student Onboarding
  const completeOnboarding = (surveyData) => {
    const { name, branch, educationLevel, selectedArchetype, interests, existingSkills } = surveyData;
    const archetypeData = ARCHETYPES[selectedArchetype] || ARCHETYPES['The Innovator'];

    const newUser = {
      ...INITIAL_USER,
      name: name || 'Aftab Hussain',
      branch: branch || 'Computer Science & Engineering',
      educationLevel: educationLevel || 'Undergraduate (3rd Year)',
      archetype: selectedArchetype,
      interests: interests?.length ? interests : INITIAL_USER.interests,
      existingSkills: existingSkills?.length ? existingSkills : INITIAL_USER.existingSkills,
      xp: 1350, // +100 bonus for completing onboarding
      completedQuestsCount: 19
    };

    setUser(newUser);
    triggerConfetti();
    setCurrentPage('dashboard');

    addToast({
      title: `Welcome, ${newUser.name}!`,
      message: `Archetype unlocked: ${selectedArchetype}. +100 Onboarding XP awarded!`,
      type: 'success',
      xp: 100
    });
  };

  // Reset Demo State
  const resetDemo = () => {
    localStorage.removeItem('sai_user');
    localStorage.removeItem('sai_active_career');
    localStorage.removeItem('sai_page');
    setUser(INITIAL_USER);
    setActiveCareer('frontend-dev');
    setCurrentPage('dashboard');
    addToast({
      title: 'Demo Environment Reset',
      message: 'Restored default student demo profile (Aftab Hussain, Level 5 Apprentice).',
      type: 'info'
    });
  };

  // Update profile attributes
  const updateUserProfile = (updatedFields) => {
    setUser((prev) => ({
      ...prev,
      ...updatedFields
    }));
    addToast({
      title: 'Profile Updated',
      message: 'Your personal preferences have been saved successfully.',
      type: 'success'
    });
  };

  // Update credits
  const updateTeamCredits = (newCredits) => {
    setCredits(newCredits);
    addToast({
      title: 'Credits Saved',
      message: 'Project credits & team information updated.',
      type: 'success'
    });
  };

  return (
    <GameContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        user,
        setUser,
        activeCareer,
        setActiveCareer,
        credits,
        setCredits,
        toasts,
        addToast,
        removeToast,
        levelUpData,
        setLevelUpData,
        activeQuestModal,
        setActiveQuestModal,
        selectedSkillModal,
        setSelectedSkillModal,
        selectedCareerModal,
        setSelectedCareerModal,
        showCreditsModal,
        setShowCreditsModal,
        completeQuest,
        unlockSkill,
        setCareerGoal,
        completeOnboarding,
        resetDemo,
        updateUserProfile,
        updateTeamCredits,
        triggerConfetti
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
