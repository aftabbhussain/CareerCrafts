# SAI-I: Group Youth Skill Development Platform
### *Society Academia Internship (SAI-I) — Interactive Gamified EdTech Prototype*

---

## 📌 Project Overview
The **Group Youth Skill Development Platform** is an interactive, gamified career discovery and competency progression web application developed under the **Society Academia Internship (SAI-I)** program. 

Traditional education follows a linear, often stressful formula: **Education → Degree → Job**. Modern undergraduate students face ambiguity, lack of practical motivation, and information overload when planning their technical careers. 

This platform re-architects career planning into a gamified RPG experience combining:
- **Duolingo-style** daily learning quests, habit loops, and streaks.
- **LinkedIn-style** professional taxonomy and industry career readiness.
- **RPG Game mechanics** featuring experience points (XP), player ranks, badges, and unlockable branch-dependency skill trees.
- **AI-Inspired situational matching** that diagnoses a student's creative archetype and recommends tailored pathways.

---

## 👨‍🏫 Mentorship & Academic Guidance
- **Project Title:** Group Youth Skill Development Platform
- **Program:** Society Academia Internship (SAI-I)
- **Under the Guidance of:** **Dr. Dilip Kumar Choubey**
- **Department:** Computer Science and Engineering (CSE)

---

## 👥 Student Engineering Development Team
*Computer Science and Engineering (CSE) Students:*

| Student Name | Department | Roll Number | Primary Role / Contribution |
| :--- | :--- | :--- | :--- |
| **Aftab Hussain** | CSE | 240101019 | Team Lead & Frontend Architect |
| **Mahadev Keshari** | CSE | 240101066 | UI/UX Design & Module Components |
| **Raghav Agarwal** | CSE | 240101014 | Gamification Engine & XP Progression |
| **Animesh Jain** | CSE | 240101254 | Career Roadmaps & Skill Taxonomy |
| **Ajeet Singh** | CSE | 240101214 | System Testing & Feature Integration |
| **Satya Narayan Verma**| CSE | 240101139 | Student Research & Scenario Analytics |


*(Note: Team records can also be viewed and edited in real time via the in-app "SAI-I Team" modal for presentation flexibility).*

---

## 🚀 Key Modules & Implemented Features

### 1. Landing Page (`/landing`)
- **Hero Section:** *"Your Future. Your Skills. Your Game."*
- Value proposition, live statistics preview, and quick access via **"Start Your Journey"** or **"Explore Demo"**.
- Product feature cards highlighting AI career guidance, RPG skill trees, and habit streaks.

### 2. Multi-Step Student Onboarding (`/onboarding`)
- **Step 1:** Academic details (Name, degree level, CSE branch).
- **Step 2:** Focus areas and existing competencies selection chips.
- **Step 3:** 4-scenario situational assessment testing response to real-world engineering dilemmas.
- **Step 4:** **Archetype Reveal** calculating one of 4 dominant creative personas:
  - ⚡ *The Innovator* (Experimentation & Rapid Problem-Solving)
  - 🛠️ *The Builder* (Technical Architecture & Systems Craftsmanship)
  - 🎨 *The Visionary* (Aesthetics & Creative Imagination)
  - 🧭 *The Strategist* (Milestone Planning & Cross-Functional Direction)
- Awards **+100 Onboarding XP bonus** and unlocks the dashboard.

### 3. Student Command Dashboard (`/dashboard`)
- Dynamic greeting based on time of day.
- **5 Real-time HUD Statistic Cards:** Level Rank, Total XP, Active Day Streak, Quests Done, and Unlocked Skills.
- **3 Daily Quests:** Knowledge, Logic, and Creativity challenges with instant completion and XP dispatch.
- **Weekly Activity Velocity Chart:** Interactive bar chart visualizing XP gains over the past 7 days.
- **Recommended Next Skill:** Contextual suggestion with instant unlock modal.
- Active Career summary and motivational quotes.

### 4. "My Creative DNA" Profile (`/dna`)
- Detailed visual breakdown of the student's creative archetype.
- 4 percentage-based progress bars: **Creativity, Logical Thinking, Problem Solving, and Communication**.
- Core strengths, high-leverage growth areas, and tailored career matches.
- In-place editable student interest tags.

### 5. Interactive RPG Skill Tree (`/skill-tree`)
- Non-linear graphical node layout with connecting dependencies and tiers (Beginner, Intermediate, Advanced).
- Visual node states:
  - 🟢 **Mastered (Completed)**: Green glow with verification checkmark.
  - 🔵 **Ready to Learn (Available)**: Pulsing cyan highlight ready for one-click mastery.
  - ⚪ **Prerequisites Locked**: Padlock indicator protecting higher tier skills.
- Node inspection modal with study resources, estimated hours, and prerequisites.
- Multi-career switcher: Frontend Developer, UI/UX Designer, Data Analyst, AI/ML Engineer.

### 6. Career Discovery Hub (`/careers`)
- Search bar and category filters (Engineering, UI/UX, AI/ML, Data).
- Simulated archetype match percentage ratings (e.g., 94% Match).
- Detailed role overview modal with salary bands, market demand, and one-click "Set as Active Goal".

### 7. Daily Quests Board (`/quests`)
- Filterable challenges across Technical, Creative, Logic, Communication, and Career Preparation.
- Interactive modal to submit learning reflection notes and claim XP rewards.
- Duplicate claim prevention.

### 8. Achievements & Cohort Leaderboard (`/achievements`)
- Milestone badges with rarity tiers (*Common, Rare, Epic, Legendary, Mythic*).
- Interactive academic leaderboard featuring CSE cohort peers across **Weekly, Monthly, and All-Time** tabs.

### 9. Gamification Engine & State Persistence
- Experience points (XP) calculation with level tier progression (Beginner → Explorer → Learner → Achiever → Apprentice → Creator → Innovator → Expert).
- Animated **Level Up celebration modal** with rewards summary.
- Full state persistence using **LocalStorage** (`sai_user`, `sai_active_career`, `sai_credits`).
- One-click **"Reset Demo State"** button restoring default evaluation data.

---

## 🛠️ Technology Stack
- **Framework:** React.js 18 + Vite
- **Styling:** Tailwind CSS with custom cyberpunk/edtech gradients and glassmorphism
- **Icons:** Lucide React
- **Visual Charts:** Recharts
- **Celebration Effects:** Canvas Confetti
- **State Management:** Custom React Context + LocalStorage synchronization

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Setup Instructions
1. Open terminal in the project directory:
   ```bash
   cd "New folder"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
5. To test production build:
   ```bash
   npm run build
   npm run preview
   ```

---

## ⚠️ Academic Prototype Scope Clarification
*This repository represents a college-level frontend prototype created for the Society Academia Internship (SAI-I) demonstration. As specified in project requirements:*
- Backend databases, cloud auth providers, and live machine learning inference servers are **simulated using realistic client-side mock data and algorithmic heuristics**.
- The aim is to demonstrate the UI/UX architecture, engagement loops, gamified progression system, and instructional design principles.
