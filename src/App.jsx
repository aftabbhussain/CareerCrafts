import React, { useState } from 'react';
import { useGame, GameProvider } from './context/GameContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/Toast';
import { LevelUpModal } from './components/common/LevelUpModal';
import { SkillDetailModal } from './components/common/SkillDetailModal';
import { CareerDetailModal } from './components/common/CareerDetailModal';
import { QuestActiveModal } from './components/common/QuestActiveModal';
import { ProjectCreditsModal } from './components/common/ProjectCreditsModal';

// Pages
import { LandingPage } from './pages/LandingPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ArchetypePage } from './pages/ArchetypePage';
import { SkillTreePage } from './pages/SkillTreePage';
import { CareerDiscoveryPage } from './pages/CareerDiscoveryPage';
import { DailyQuestsPage } from './pages/DailyQuestsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ProfilePage } from './pages/ProfilePage';

const AppContent = () => {
  const { currentPage } = useGame();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Standalone pages without dashboard layout
  if (currentPage === 'landing') {
    return (
      <>
        <LandingPage />
        <ToastContainer />
        <ProjectCreditsModal />
      </>
    );
  }

  if (currentPage === 'onboarding') {
    return (
      <>
        <OnboardingPage />
        <ToastContainer />
      </>
    );
  }

  // Dashboard & Workspace App Layout
  const renderDashboardPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'dna':
        return <ArchetypePage />;
      case 'skill-tree':
        return <SkillTreePage />;
      case 'careers':
        return <CareerDiscoveryPage />;
      case 'quests':
        return <DailyQuestsPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070912] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            {renderDashboardPage()}
          </main>

          <Footer />
        </div>
      </div>

      {/* Global Interactive Modals & Celebrations */}
      <ToastContainer />
      <LevelUpModal />
      <SkillDetailModal />
      <CareerDetailModal />
      <QuestActiveModal />
      <ProjectCreditsModal />
    </div>
  );
};

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
