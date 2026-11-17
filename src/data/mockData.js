export const LEVELS = [
  { level: 1, title: 'Beginner', minXp: 0, maxXp: 200, badgeColor: 'from-slate-500 to-slate-700' },
  { level: 2, title: 'Explorer', minXp: 200, maxXp: 450, badgeColor: 'from-emerald-500 to-teal-700' },
  { level: 3, title: 'Learner', minXp: 450, maxXp: 800, badgeColor: 'from-blue-500 to-indigo-700' },
  { level: 4, title: 'Achiever', minXp: 800, maxXp: 1200, badgeColor: 'from-violet-500 to-purple-700' },
  { level: 5, title: 'Apprentice', minXp: 1200, maxXp: 1700, badgeColor: 'from-cyan-400 to-blue-600' },
  { level: 6, title: 'Creator', minXp: 1700, maxXp: 2300, badgeColor: 'from-amber-400 to-orange-600' },
  { level: 7, title: 'Innovator', minXp: 2300, maxXp: 3000, badgeColor: 'from-fuchsia-500 to-pink-600' },
  { level: 8, title: 'Expert', minXp: 3000, maxXp: 4000, badgeColor: 'from-yellow-300 via-amber-400 to-rose-500' },
];

export const INITIAL_USER = {
  name: 'Aftab Hussain',
  email: 'aftab.student@sai-i.edu',
  college: 'College of Engineering & Technology',
  branch: 'Computer Science & Engineering',
  educationLevel: 'Undergraduate (3rd Year)',
  archetype: 'The Innovator',
  level: 5,
  levelTitle: 'Apprentice',
  xp: 1250,
  streak: 7,
  completedQuestsCount: 18,
  unlockedSkillsCount: 8,
  activeCareerGoal: 'frontend-dev',
  interests: ['Frontend Engineering', 'UI/UX Design', 'AI & Intelligent Systems', 'Web3 & Interactive 3D'],
  existingSkills: ['JavaScript ES6+', 'HTML5/Tailwind', 'React Fundamentals', 'Git/GitHub', 'Figma Prototyping'],
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  bio: 'Passionate computer science student exploring gamified learning pathways, reactive design systems, and frontend architecture.',
  completedQuestIds: ['quest-1', 'quest-2'], // initial completed daily quests
  completedSkillIds: ['fe-1', 'fe-2', 'fe-3', 'fe-4', 'fe-5', 'fe-6', 'ui-1', 'ui-2'],
  claimedAchievementIds: ['ach-1', 'ach-2', 'ach-5', 'ach-6'],
};

export const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    question: "You are given the task of improving a product that university students use every single day. What would you do first?",
    options: [
      { text: "Think of an audacious, completely original concept and reimagined look.", archetype: "The Visionary", scoreKey: "creativity" },
      { text: "Identify the underlying technical bugs, performance bottlenecks, and code structure.", archetype: "The Builder", scoreKey: "logic" },
      { text: "Conduct user interviews, map out friction points, and engineer a step-by-step rollout plan.", archetype: "The Strategist", scoreKey: "communication" },
      { text: "Rapidly prototype a working interactive experiment and test ideas hands-on.", archetype: "The Innovator", scoreKey: "problemSolving" }
    ]
  },
  {
    id: 2,
    question: "Your team has only 24 hours left in a national hackathon. What is your natural contribution?",
    options: [
      { text: "Designing the storytelling pitch, visual brand, and emotional user hook.", archetype: "The Visionary", scoreKey: "creativity" },
      { text: "Writing the core logic, API integrations, and robust database models.", archetype: "The Builder", scoreKey: "logic" },
      { text: "Managing sprint time, delegating features, and ensuring submission criteria are fulfilled.", archetype: "The Strategist", scoreKey: "communication" },
      { text: "Connecting the puzzle pieces, solving critical runtime errors, and shipping a killer demo.", archetype: "The Innovator", scoreKey: "problemSolving" }
    ]
  },
  {
    id: 3,
    question: "When learning a complex new framework or tool, how do you gain confidence fastest?",
    options: [
      { text: "Brainstorming creative possibilities and drafting futuristic design concepts.", archetype: "The Visionary", scoreKey: "creativity" },
      { text: "Reading the official documentation, syntax guides, and studying architectural internals.", archetype: "The Builder", scoreKey: "logic" },
      { text: "Breaking down tutorials into a scheduled syllabus with checklists and milestones.", archetype: "The Strategist", scoreKey: "communication" },
      { text: "Immediately cloning a sandbox project and experimenting until it works.", archetype: "The Innovator", scoreKey: "problemSolving" }
    ]
  },
  {
    id: 4,
    question: "What kind of capstone achievement would make you feel most fulfilled upon graduation?",
    options: [
      { text: "Creating a revolutionary design system or product idea that inspires people.", archetype: "The Visionary", scoreKey: "creativity" },
      { text: "Building a rock-solid, production-ready system with clean code architecture.", archetype: "The Builder", scoreKey: "logic" },
      { text: "Leading a student initiative that solves real institutional problems at scale.", archetype: "The Strategist", scoreKey: "communication" },
      { text: "Launching a novel interactive app combining emerging tech in creative ways.", archetype: "The Innovator", scoreKey: "problemSolving" }
    ]
  }
];

export const ARCHETYPES = {
  'The Innovator': {
    title: 'The Innovator',
    tagline: 'Experimental Tinkerer & Dynamic Problem Solver',
    description: 'You thrive at the intersection of imagination and execution. Rather than waiting for instructions, you jump into problems head-on, experiment with novel approaches, and synthesize creative answers out of chaos.',
    color: 'from-cyan-400 via-blue-500 to-indigo-600',
    borderColor: 'border-cyan-500/40',
    stats: {
      creativity: 85,
      logic: 82,
      problemSolving: 91,
      communication: 76
    },
    strengths: [
      'Rapid prototype development and agile execution',
      'High adaptability to ambiguous or changing constraints',
      'Intuitive ability to connect disparate technical ideas',
      'Relentless debugging and practical troubleshooting'
    ],
    growthAreas: [
      'Documenting architectural decisions for long-term teams',
      'Resisting the urge to abandon projects when 80% finished',
      'Balancing rapid hacks with rigorous formal testing'
    ],
    recommendedCareers: ['Fullstack / Frontend Engineer', 'Creative Technologist', 'AI Product Builder', 'Game Developer']
  },
  'The Builder': {
    title: 'The Builder',
    tagline: 'Technical Architect & Systems Craftsman',
    description: 'You find joy in structured logic, dependable systems, and deep craftsmanship. You prioritize high quality, efficient algorithms, and robust foundations that stand the test of scale.',
    color: 'from-emerald-400 via-teal-500 to-blue-600',
    borderColor: 'border-emerald-500/40',
    stats: {
      creativity: 66,
      logic: 95,
      problemSolving: 88,
      communication: 65
    },
    strengths: [
      'Deep architectural and algorithmic thinking',
      'High discipline in code modularity and maintainability',
      'Systematic analytical mindset',
      'Attention to edge cases and optimization'
    ],
    growthAreas: [
      'Visual storytelling and presentation charisma',
      'Embracing exploratory throwaway prototypes',
      'User-centric empathy alongside pure system purity'
    ],
    recommendedCareers: ['Backend Engineer', 'Systems Architect', 'Cloud Infrastructure Engineer', 'Data Engineer']
  },
  'The Visionary': {
    title: 'The Visionary',
    tagline: 'Creative Dreamer & Aesthetic Pioneer',
    description: 'You see what could be before anyone else can envision it. You excel in visual elegance, emotional hooks, bold concepts, and user experience that leaves a lasting human impression.',
    color: 'from-fuchsia-500 via-purple-500 to-pink-500',
    borderColor: 'border-purple-500/40',
    stats: {
      creativity: 94,
      logic: 68,
      problemSolving: 78,
      communication: 86
    },
    strengths: [
      'Intuitive design and visual brand aesthetics',
      'Original conceptual thinking and blue-sky ideation',
      'High empathy for user frustration and delight',
      'Inspiring creative presentations'
    ],
    growthAreas: [
      'Bridging wild designs with technical implementation realities',
      'Deepening mathematical and algorithmic literacy',
      'Patience with iterative data engineering steps'
    ],
    recommendedCareers: ['UI/UX Product Designer', 'Design Technologist', 'Brand Experience Lead', '3D / Motion Designer']
  },
  'The Strategist': {
    title: 'The Strategist',
    tagline: 'Master Planner & Organizational Catalyst',
    description: 'You turn chaos into order. You understand how teams collaborate, how roadmaps are structured, and how technical skills must align with real-world impact and timelines.',
    color: 'from-amber-400 via-orange-500 to-rose-600',
    borderColor: 'border-amber-500/40',
    stats: {
      creativity: 72,
      logic: 86,
      problemSolving: 84,
      communication: 92
    },
    strengths: [
      'Milestone planning and cross-functional leadership',
      'Synthesizing customer requirements into actionable roadmaps',
      'Clarity in written communication and presentations',
      'Risk evaluation and resource optimization'
    ],
    growthAreas: [
      'Maintaining hands-on coding contact with core tools',
      'Embracing calculated chaos when innovation demands it',
      'Avoiding over-analysis paralysis'
    ],
    recommendedCareers: ['Technical Product Manager', 'Engineering Team Lead', 'Agile Scrum Lead', 'Technology Consultant']
  }
};

export const CAREER_PATHS = [
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    category: 'Engineering & UI',
    matchPercentage: 94,
    description: 'Engineer responsive, interactive, and high-performance user interfaces combining modern JavaScript frameworks with gaming-grade UX.',
    averageSalary: '$85,000 - $130,000 (Global avg)',
    demand: 'High Demand',
    skillsRequired: ['HTML/CSS', 'JavaScript ES6+', 'React.js', 'State Management', 'Tailwind CSS', 'Performance Optimization'],
    keyHighlight: 'Primary track with 10 interactive RPG skill nodes ready to unlock.',
    roadmapSummary: 'Master the progression from DOM basics to reactive state management and high-performance WebGL animations.'
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Product Designer',
    category: 'Creative Design',
    matchPercentage: 88,
    description: 'Shape how digital products look, feel, and behave by conducting user research, crafting design systems, and wireframing frictionless experiences.',
    averageSalary: '$78,000 - $125,000',
    demand: 'Very High',
    skillsRequired: ['Figma Mastery', 'User Research', 'Design Systems', 'Prototyping', 'Usability Testing', 'Micro-interactions'],
    keyHighlight: 'Perfect for Visionary & Innovator archetypes.',
    roadmapSummary: 'Journey through UX fundamentals, visual typography, interactive Figma components, and enterprise design tokens.'
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / Machine Learning Engineer',
    category: 'Intelligent Systems',
    matchPercentage: 82,
    description: 'Build predictive algorithms, neural network pipelines, and generative AI models powering modern automation.',
    averageSalary: '$110,000 - $165,000',
    demand: 'Exponential Growth',
    skillsRequired: ['Python', 'Linear Algebra & Calculus', 'Data Wrangling', 'PyTorch/TensorFlow', 'LLM Prompt Engineering', 'Model Deployment'],
    keyHighlight: 'High technical rigor track for analytical problem solvers.',
    roadmapSummary: 'Master statistical fundamentals, deep learning layers, transformers, and production ML pipelines.'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst & BI Specialist',
    category: 'Data & Analytics',
    matchPercentage: 79,
    description: 'Transform raw numbers into strategic actionable stories using SQL, visualization tools, and exploratory statistics.',
    averageSalary: '$70,000 - $105,000',
    demand: 'Stable & High',
    skillsRequired: ['SQL Fundamentals', 'Power BI / Tableau', 'Python Pandas', 'Statistical Modeling', 'Business Metrics', 'Data Storytelling'],
    keyHighlight: 'Great path for logical strategists who love spotting trends.',
    roadmapSummary: 'From relational database queries to automated dashboards and predictive business forecasting.'
  },
  {
    id: 'game-developer',
    title: 'Interactive Game Developer',
    category: 'Creative Tech',
    matchPercentage: 85,
    description: 'Create immersive 2D/3D games, physics engines, and captivating gameplay loops using Unity, Unreal, or WebGL.',
    averageSalary: '$80,000 - $120,000',
    demand: 'High',
    skillsRequired: ['C# / C++', 'Unity / Unreal Engine', 'Game Mechanics', '3D Math & Shaders', 'Audio Design', 'Optimization'],
    keyHighlight: 'Exciting fusion of artistic world-building and high-speed logic.',
    roadmapSummary: 'Learn collision geometry, player controller loops, shader graphs, and multi-platform packaging.'
  },
  {
    id: 'product-designer',
    title: 'Design Technologist',
    category: 'Hybrid / Innovation',
    matchPercentage: 91,
    description: 'Bridge the critical gap between design and engineering by building interactive design tokens, coded prototypes, and component libraries.',
    averageSalary: '$95,000 - $145,000',
    demand: 'Emerging High',
    skillsRequired: ['Figma to Code', 'React Component Libraries', 'Tailwind CSS', 'Accessibility (a11y)', 'Animation Libraries', 'Design Systems'],
    keyHighlight: 'The sweet spot for students with both code and aesthetic taste.',
    roadmapSummary: 'From UI component specs to production design systems, NPM component distribution, and cross-platform token sync.'
  }
];

export const SKILL_TREES = {
  'frontend-dev': {
    title: 'Frontend Developer Skill Tree',
    roleTag: 'Web & Interface Engineering',
    levels: [
      {
        id: 'tier-1',
        title: 'Tier 1: Beginner Fundamentals',
        description: 'The essential building blocks of the modern web',
        skills: [
          {
            id: 'fe-1',
            title: 'HTML5 Semantic Architecture',
            category: 'Markup',
            level: 'Beginner',
            xpReward: 100,
            estimatedHours: '8 Hours',
            description: 'Master clean semantic markup, accessibility (a11y) landmarks, and modern meta structures for SEO and usability.',
            prerequisites: [],
            resource: 'MDN Web Docs: Semantic HTML & Accessibility guidelines',
            status: 'completed'
          },
          {
            id: 'fe-2',
            title: 'CSS3 Fundamentals & Flexbox',
            category: 'Styling',
            level: 'Beginner',
            xpReward: 100,
            estimatedHours: '12 Hours',
            description: 'Understand the box model, responsive media queries, Flexbox axes, and modern CSS custom properties.',
            prerequisites: ['fe-1'],
            resource: 'Flexbox Froggy & CSS-Tricks Flexbox Complete Guide',
            status: 'completed'
          },
          {
            id: 'fe-3',
            title: 'JavaScript ES6+ Core Logic',
            category: 'Scripting',
            level: 'Beginner',
            xpReward: 120,
            estimatedHours: '20 Hours',
            description: 'Variables (let/const), arrow functions, destructuring, array methods (.map, .filter, .reduce), and promises.',
            prerequisites: ['fe-1'],
            resource: 'JavaScript.info: Modern JS Tutorial & Scrimba ES6',
            status: 'completed'
          }
        ]
      },
      {
        id: 'tier-2',
        title: 'Tier 2: Intermediate Frameworks',
        description: 'Building dynamic, responsive single-page web applications',
        skills: [
          {
            id: 'fe-4',
            title: 'Responsive Web Design & Tailwind',
            category: 'Styling',
            level: 'Intermediate',
            xpReward: 130,
            estimatedHours: '15 Hours',
            description: 'Craft beautiful responsive layouts with utility-first Tailwind CSS classes, breakpoints, and mobile-first UX.',
            prerequisites: ['fe-2'],
            resource: 'Tailwind CSS Official Documentation & UI Component Labs',
            status: 'completed'
          },
          {
            id: 'fe-5',
            title: 'React.js Component Architecture',
            category: 'Framework',
            level: 'Intermediate',
            xpReward: 150,
            estimatedHours: '25 Hours',
            description: 'JSX, component hierarchy, props, useState, useEffect lifecycle, and lifting state up cleanly.',
            prerequisites: ['fe-3', 'fe-4'],
            resource: 'React.dev Official Interactive Tutorials',
            status: 'completed'
          },
          {
            id: 'fe-6',
            title: 'Async API Integration & Fetch',
            category: 'Networking',
            level: 'Intermediate',
            xpReward: 140,
            estimatedHours: '14 Hours',
            description: 'Consuming REST APIs, managing loading & error states, HTTP methods, headers, and async/await error handling.',
            prerequisites: ['fe-5'],
            resource: 'JSONPlaceholder API & TanStack Query Primer',
            status: 'completed'
          }
        ]
      },
      {
        id: 'tier-3',
        title: 'Tier 3: Advanced Engineering & Mastery',
        description: 'Production-ready architecture, state management, and speed',
        skills: [
          {
            id: 'fe-7',
            title: 'Global State Management',
            category: 'Architecture',
            level: 'Advanced',
            xpReward: 180,
            estimatedHours: '18 Hours',
            description: 'Master Zustand, Redux Toolkit, or React Context for managing application-wide auth and game state cleanly.',
            prerequisites: ['fe-6'],
            resource: 'Zustand & Redux Toolkit Documentation Guides',
            status: 'available' // unlocked ready to complete!
          },
          {
            id: 'fe-8',
            title: 'Advanced React & Performance Tuning',
            category: 'Optimization',
            level: 'Advanced',
            xpReward: 200,
            estimatedHours: '22 Hours',
            description: 'useMemo, useCallback, React.memo, code splitting with React.lazy, Core Web Vitals, and bundle inspection.',
            prerequisites: ['fe-7'],
            resource: 'Web.dev Fast Load Times & Kent C. Dodds React Patterns',
            status: 'locked'
          },
          {
            id: 'fe-9',
            title: 'Fullstack Capstone Portfolio Project',
            category: 'Project',
            level: 'Advanced',
            xpReward: 250,
            estimatedHours: '35 Hours',
            description: 'Engineer and deploy an end-to-end interactive gamified web application featuring realistic state and rich animations.',
            prerequisites: ['fe-8'],
            resource: 'SAI-I Capstone Guidelines & Vercel Production Deployment',
            status: 'locked'
          }
        ]
      }
    ]
  },
  'ui-ux-designer': {
    title: 'UI/UX Designer Skill Tree',
    roleTag: 'User Research & Product Experience',
    levels: [
      {
        id: 'tier-1',
        title: 'Tier 1: Design Foundations',
        description: 'Visual harmony and human-computer psychology',
        skills: [
          {
            id: 'ui-1',
            title: 'Design Principles & Gestalt Theory',
            category: 'Theory',
            level: 'Beginner',
            xpReward: 100,
            estimatedHours: '10 Hours',
            description: 'Contrast, repetition, alignment, proximity, visual hierarchy, and psychology of visual groupings.',
            prerequisites: [],
            resource: 'Refactoring UI & Don Norman The Design of Everyday Things',
            status: 'completed'
          },
          {
            id: 'ui-2',
            title: 'Figma Auto-Layout & Vectors',
            category: 'Tooling',
            level: 'Beginner',
            xpReward: 110,
            estimatedHours: '14 Hours',
            description: 'Master responsive frames, nested auto-layout, constraints, vector pen tools, and component variants.',
            prerequisites: ['ui-1'],
            resource: 'Figma YouTube Academy & Interactive Auto-Layout Playground',
            status: 'completed'
          }
        ]
      },
      {
        id: 'tier-2',
        title: 'Tier 2: Systems & Interaction',
        description: 'Design systems, tokens, and clickable prototypes',
        skills: [
          {
            id: 'ui-3',
            title: 'Design Systems & Variable Tokens',
            category: 'Systems',
            level: 'Intermediate',
            xpReward: 150,
            estimatedHours: '20 Hours',
            description: 'Build enterprise-grade design libraries with typography scales, color primitives, semantic aliases, and elevation tokens.',
            prerequisites: ['ui-2'],
            resource: 'Material You 3 & Radix Primitives Token Specs',
            status: 'available'
          },
          {
            id: 'ui-4',
            title: 'Interactive Prototyping & Smart Animate',
            category: 'Prototyping',
            level: 'Intermediate',
            xpReward: 160,
            estimatedHours: '16 Hours',
            description: 'Create realistic high-fidelity app walkthroughs with micro-interactions, smart animations, and interactive component states.',
            prerequisites: ['ui-3'],
            resource: 'Figma Interactive Prototyping Masterclass',
            status: 'locked'
          }
        ]
      },
      {
        id: 'tier-3',
        title: 'Tier 3: User Research & Case Studies',
        description: 'Validating with real people and portfolio presentation',
        skills: [
          {
            id: 'ui-5',
            title: 'Usability Testing & Journey Mapping',
            category: 'Research',
            level: 'Advanced',
            xpReward: 190,
            estimatedHours: '22 Hours',
            description: 'Write usability test scripts, conduct moderated sessions, analyze drop-off rates, and synthesize affinity diagrams.',
            prerequisites: ['ui-4'],
            resource: 'Nielsen Norman Group Research Methodologies',
            status: 'locked'
          }
        ]
      }
    ]
  },
  'ai-ml-engineer': {
    title: 'AI / ML Engineer Skill Tree',
    roleTag: 'Machine Intelligence & Neural Systems',
    levels: [
      {
        id: 'tier-1',
        title: 'Tier 1: Math & Data Foundations',
        description: 'Python scripting and linear algebra essentials',
        skills: [
          {
            id: 'ml-1',
            title: 'Python for Data Science & NumPy',
            category: 'Programming',
            level: 'Beginner',
            xpReward: 110,
            estimatedHours: '16 Hours',
            description: 'Vectorized operations, multidimensional matrix slicing, and computational linear algebra in NumPy.',
            prerequisites: [],
            resource: 'NumPy Quickstart & 3Blue1Brown Linear Algebra Series',
            status: 'available'
          },
          {
            id: 'ml-2',
            title: 'Data Wrangling with Pandas',
            category: 'Data',
            level: 'Beginner',
            xpReward: 120,
            estimatedHours: '18 Hours',
            description: 'Cleaning messy datasets, handling missing values, groupby aggregations, and feature transformations.',
            prerequisites: ['ml-1'],
            resource: 'Kaggle Pandas Course & Practical Data Analysis',
            status: 'locked'
          }
        ]
      },
      {
        id: 'tier-2',
        title: 'Tier 2: Supervised & Deep Learning',
        description: 'Algorithms and neural network architectures',
        skills: [
          {
            id: 'ml-3',
            title: 'Scikit-Learn Machine Learning Pipeline',
            category: 'ML',
            level: 'Intermediate',
            xpReward: 160,
            estimatedHours: '24 Hours',
            description: 'Regression, classification, random forests, hyperparameter tuning with GridSearchCV, and cross-validation.',
            prerequisites: ['ml-2'],
            resource: 'Scikit-Learn User Guide & Hands-on ML with Scikit-Learn',
            status: 'locked'
          },
          {
            id: 'ml-4',
            title: 'PyTorch Neural Networks',
            category: 'Deep Learning',
            level: 'Advanced',
            xpReward: 220,
            estimatedHours: '32 Hours',
            description: 'Tensors, autograd, forward/backward passes, building custom CNNs and loss optimization with PyTorch.',
            prerequisites: ['ml-3'],
            resource: 'PyTorch.org Deep Learning Blitz Tutorial',
            status: 'locked'
          }
        ]
      }
    ]
  },
  'data-analyst': {
    title: 'Data Analyst Skill Tree',
    roleTag: 'Business Intelligence & Insights',
    levels: [
      {
        id: 'tier-1',
        title: 'Tier 1: SQL & Spreadsheet Mastery',
        description: 'Querying and structuring relational databases',
        skills: [
          {
            id: 'da-1',
            title: 'Modern SQL & Complex Joins',
            category: 'Database',
            level: 'Beginner',
            xpReward: 100,
            estimatedHours: '12 Hours',
            description: 'Select, where, inner/outer joins, group by, having, subqueries, and window functions (ROW_NUMBER, RANK).',
            prerequisites: [],
            resource: 'Mode Analytics SQL Tutorial & LeetCode Database problems',
            status: 'available'
          },
          {
            id: 'da-2',
            title: 'Interactive Power BI / Tableau Dashboards',
            category: 'Visualization',
            level: 'Intermediate',
            xpReward: 140,
            estimatedHours: '16 Hours',
            description: 'Craft executive-level business dashboards with KPI cards, drill-downs, filters, and dynamic calculations.',
            prerequisites: ['da-1'],
            resource: 'Microsoft Power BI Guided Learning & Tableau Public',
            status: 'locked'
          }
        ]
      }
    ]
  }
};

export const DAILY_QUESTS = [
  {
    id: 'quest-1',
    title: 'Master Modern Flexbox Layouts',
    category: 'Technical Skills',
    description: 'Solve 3 layout challenges using CSS flexbox properties and responsive alignments.',
    timeEstimate: '15 Mins',
    xpReward: 40,
    difficulty: 'Easy',
    status: 'completed', // Already completed in demo
    icon: 'Code2',
    objective: 'Demonstrate comprehension of justify-content, align-items, and flex-wrap across varied screen viewports.'
  },
  {
    id: 'quest-2',
    title: 'Deconstruct a Top SaaS Navigation',
    category: 'Creative Thinking',
    description: 'Sketch or analyze the information architecture of a high-growth startup landing page.',
    timeEstimate: '20 Mins',
    xpReward: 50,
    difficulty: 'Medium',
    status: 'completed', // Completed in demo
    icon: 'Sparkles',
    objective: 'Identify how visual hierarchy and CTA contrast reduce cognitive friction for first-time visitors.'
  },
  {
    id: 'quest-3',
    title: 'Algorithmic Problem: Palindrome Checker',
    category: 'Logical Reasoning',
    description: 'Implement an optimal two-pointer solution to verify alphanumeric palindromes in O(n) time.',
    timeEstimate: '25 Mins',
    xpReward: 70,
    difficulty: 'Medium',
    status: 'available', // Interactive! User can complete now!
    icon: 'Brain',
    objective: 'Write clean JavaScript logic ignoring case and punctuation to determine string symmetry.'
  },
  {
    id: 'quest-4',
    title: 'Draft a 60-Second Elevator Pitch',
    category: 'Communication',
    description: 'Structure a concise personal pitch highlighting your archetype, core skills, and internship goals.',
    timeEstimate: '15 Mins',
    xpReward: 45,
    difficulty: 'Easy',
    status: 'available',
    icon: 'MessageSquare',
    objective: 'Apply the Hook-Value-Ask framework for professional networking and career fair interactions.'
  },
  {
    id: 'quest-5',
    title: 'Map a 30-Day Learning Sprint',
    category: 'Career Preparation',
    description: 'Select your next 3 skill milestones and assign weekly time blocks on your calendar.',
    timeEstimate: '20 Mins',
    xpReward: 60,
    difficulty: 'Medium',
    status: 'available',
    icon: 'Compass',
    objective: 'Set specific, measurable learning objectives tied directly to your active skill tree roadmap.'
  },
  {
    id: 'quest-6',
    title: 'Design a Gamified Feedback Toast',
    category: 'Creative Thinking',
    description: 'Design a high-impact notification card with sound cues, micro-glows, and particle effects.',
    timeEstimate: '30 Mins',
    xpReward: 80,
    difficulty: 'Hard',
    status: 'available',
    icon: 'Palette',
    objective: 'Build an engaging visual reward feedback loop that reinforces student habit loops.'
  }
];

export const ACHIEVEMENTS = [
  {
    id: 'ach-1',
    title: 'First Step',
    description: 'Complete your first learning quest on the platform.',
    category: 'Journey',
    icon: 'Footprints',
    xpBonus: 50,
    unlocked: true,
    unlockedDate: 'Nov 10, 2026',
    rarity: 'Common'
  },
  {
    id: 'ach-2',
    title: 'Consistent Learner',
    description: 'Maintain a 7-day continuous learning streak.',
    category: 'Dedication',
    icon: 'Flame',
    xpBonus: 150,
    unlocked: true,
    unlockedDate: 'Nov 17, 2026',
    rarity: 'Rare'
  },
  {
    id: 'ach-3',
    title: 'Creative Mind',
    description: 'Complete 10 creativity and design-oriented quests.',
    category: 'Creativity',
    icon: 'Sparkles',
    xpBonus: 100,
    unlocked: false,
    progress: '7/10',
    rarity: 'Epic'
  },
  {
    id: 'ach-4',
    title: 'Problem Solver',
    description: 'Complete 10 logic and algorithmic reasoning challenges.',
    category: 'Logic',
    icon: 'BrainCircuit',
    xpBonus: 120,
    unlocked: false,
    progress: '8/10',
    rarity: 'Epic'
  },
  {
    id: 'ach-5',
    title: 'Skill Explorer',
    description: 'Unlock at least 5 skills across your career roadmaps.',
    category: 'Mastery',
    icon: 'Network',
    xpBonus: 200,
    unlocked: true,
    unlockedDate: 'Nov 14, 2026',
    rarity: 'Rare'
  },
  {
    id: 'ach-6',
    title: 'Rising Star',
    description: 'Level up your profile to Level 5 (Apprentice).',
    category: 'Prestige',
    icon: 'Trophy',
    xpBonus: 250,
    unlocked: true,
    unlockedDate: 'Nov 16, 2026',
    rarity: 'Legendary'
  },
  {
    id: 'ach-7',
    title: 'Code Architect',
    description: 'Unlock the Advanced React & Performance Tuning node.',
    category: 'Engineering',
    icon: 'Layers',
    xpBonus: 300,
    unlocked: false,
    progress: '0/1',
    rarity: 'Mythic'
  },
  {
    id: 'ach-8',
    title: 'Grandmaster Innovator',
    description: 'Accumulate 2,500 XP and reach Level 7 status.',
    category: 'Prestige',
    icon: 'Crown',
    xpBonus: 500,
    unlocked: false,
    progress: '1,250 / 2,500 XP',
    rarity: 'Mythic'
  }
];

export const LEADERBOARD = {
  weekly: [
    { rank: 1, name: 'Mahadev Keshari', branch: 'CSE - 240101019', level: 6, xp: 480, quests: 8, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80', badge: 'Creator' },
    { rank: 2, name: 'Aftab Hussain (You)', branch: 'CSE - Lead', level: 5, xp: 420, quests: 7, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', badge: 'Apprentice', isUser: true },
    { rank: 3, name: 'Raghav Agarwal', branch: 'CSE - 240101066', level: 5, xp: 390, quests: 6, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80', badge: 'Apprentice' },
    { rank: 4, name: 'Animesh Jain', branch: 'CSE - 240101014', level: 4, xp: 310, quests: 5, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' },
    { rank: 5, name: 'Ajeet Singh', branch: 'CSE - 240101254', level: 4, xp: 290, quests: 5, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' },
    { rank: 6, name: 'Satya Narayan Verma', branch: 'CSE - 240101214', level: 4, xp: 260, quests: 4, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' },
    { rank: 7, name: 'Priya Sharma', branch: 'CSE - 240101139', level: 3, xp: 220, quests: 3, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', badge: 'Learner' }
  ],
  monthly: [
    { rank: 1, name: 'Mahadev Keshari', branch: 'CSE - 240101019', level: 6, xp: 1740, quests: 26, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80', badge: 'Creator' },
    { rank: 2, name: 'Aftab Hussain (You)', branch: 'CSE - Lead', level: 5, xp: 1250, quests: 18, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', badge: 'Apprentice', isUser: true },
    { rank: 3, name: 'Raghav Agarwal', branch: 'CSE - 240101066', level: 5, xp: 1190, quests: 17, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80', badge: 'Apprentice' },
    { rank: 4, name: 'Animesh Jain', branch: 'CSE - 240101014', level: 4, xp: 980, quests: 14, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' },
    { rank: 5, name: 'Ajeet Singh', branch: 'CSE - 240101254', level: 4, xp: 920, quests: 13, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' },
    { rank: 6, name: 'Satya Narayan Verma', branch: 'CSE - 240101214', level: 4, xp: 850, quests: 12, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' },
    { rank: 7, name: 'Priya Sharma', branch: 'CSE - 240101139', level: 3, xp: 710, quests: 10, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', badge: 'Learner' }
  ],
  allTime: [
    { rank: 1, name: 'Mahadev Keshari', branch: 'CSE - 240101019', level: 6, xp: 2150, quests: 34, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80', badge: 'Creator' },
    { rank: 2, name: 'Aftab Hussain (You)', branch: 'CSE - Lead', level: 5, xp: 1250, quests: 18, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', badge: 'Apprentice', isUser: true },
    { rank: 3, name: 'Raghav Agarwal', branch: 'CSE - 240101066', level: 5, xp: 1220, quests: 19, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80', badge: 'Apprentice' },
    { rank: 4, name: 'Animesh Jain', branch: 'CSE - 240101014', level: 4, xp: 1040, quests: 16, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' },
    { rank: 5, name: 'Ajeet Singh', branch: 'CSE - 240101254', level: 4, xp: 990, quests: 15, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' },
    { rank: 6, name: 'Satya Narayan Verma', branch: 'CSE - 240101214', level: 4, xp: 910, quests: 14, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', badge: 'Achiever' }
  ]
};

export const WEEKLY_ACTIVITY = [
  { day: 'Mon', xp: 60, quests: 1 },
  { day: 'Tue', xp: 110, quests: 2 },
  { day: 'Wed', xp: 90, quests: 2 },
  { day: 'Thu', xp: 140, quests: 3 },
  { day: 'Fri', xp: 80, quests: 1 },
  { day: 'Sat', xp: 170, quests: 3 },
  { day: 'Sun', xp: 120, quests: 2 },
];

export const PROJECT_CREDITS = {
  projectTitle: 'Group Youth Skill Development Platform',
  program: 'Society Academia Internship (SAI-I)',
  guide: 'Dr. Dilip Kumar Choubey',
  department: 'Computer Science and Engineering',
  institution: 'Society Academia Internship Program',
  version: 'Frontend Prototype v1.0 (College Evaluation Build)',
  teamMembers: [
    { name: 'Aftab Hussain', role: 'Team Lead & Frontend Architect', dept: 'CSE', roll: 'Roll No. (To be confirmed)' },
    { name: 'Mahadev Keshari', role: 'Core Contributor & UI Design', dept: 'CSE', roll: '240101019' },
    { name: 'Raghav Agarwal', role: 'Gamification & Logic Specialist', dept: 'CSE', roll: '240101066' },
    { name: 'Animesh Jain', role: 'Career Roadmaps & Taxonomy', dept: 'CSE', roll: '240101014' },
    { name: 'Ajeet Singh', role: 'Testing & Module Integration', dept: 'CSE', roll: '240101254' },
    { name: 'Satya Narayan Verma', role: 'Research & Content Strategy', dept: 'CSE', roll: '240101214' },
    { name: 'Priya Sharma', role: 'UI Components & Documentation', dept: 'CSE', roll: '240101139' },
  ]
};
