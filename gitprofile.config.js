// gitprofile.config.js

const config = {
  github: {
    username: 'KARI-VARKEY', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'karivarkey',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '@karivarkey',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'karivarkey',
    website: 'https://karivarkey.github.io',
    phone: '',
    email: 'geevargheseregi78@gmail.com',
  },
  resume: {
    
      
  },
  skills: [
    'Python',
    'C',
    'NodeJS',
    'React',
    'TailwindCSS',
    'MongoDB',
    'Redis',
    'Firebase'
  ],
  experiences: [
    {
      company: 'Realme 6 : Developer Team',
      position: 'Build Bot',
      from: 'November 2020',
      to: 'January 2021',
      companyLink: 't.me/RM6Official',
    },
    {
      company: 'μLearn',
      position: 'Front-end Developer Intern',
      from: 'June 2024',
      to: 'September 2024',
      companyLink: 'https://mulearn.org',
    },
    {
      company: 'Banzan Studios',
      position: 'Technical Intern',
      from: 'Septemebr 2024',
      to: 'Present',
      companyLink: 'https://banzan.co',
    }
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'St Peters Senior Secondary School, Kadayiruppu, Kolenchery',
      degree: 'High-School',
      from: '2008',
      to: '2021',
    },
    {
      institution: 'Rajagiri School of Engineering and Technology, Kakkanad',
      degree: 'B.Tech in Computer Science and Engineering',
      from: '2022',
      to: '2026 (Expected)',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Kodomo',
      description:
        'AI and meme based chatbot to aid in education',
      imageUrl: 'https://res.cloudinary.com/dgeduh0en/image/upload/v1732245452/xlq0dybydayfs6y3zxsv.png',
      link: 'https://kodomo-firebase.web.app/',
    },
    {
      title: 'ToyAI',
      description:
        'An e-commerce website with AI powered suggestions using Gemini',
      imageUrl: 'https://res.cloudinary.com/dgeduh0en/image/upload/v1732245530/kwr1rierbv3xlqkubybd.png',
      link: 'https://toyaiweb.web.app/',
    },
    {
      title: 'MunchMate',
      description:
        'Canteen Application for our college awaiting final approval from college',
      imageUrl: 'https://res.cloudinary.com/dgeduh0en/image/upload/v1732245585/q95zk17ikdkx0umvkau0.png',
      link: 'https://munch-mate1.firebaseapp.com/',
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'karivarkey', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with  ❤️`,
};

export default config;
