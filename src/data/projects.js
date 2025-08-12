export const projects = [
  {
    slug: 'quicklance',
    name: 'Quicklance',
    image: 'https://i.postimg.cc/NMNGjcK5/Screenshot-2025-06-30-120253.png',
    description: 'A freelance marketplace website.',
    technologies: ['React', 'MongoDB', 'Express', 'Tailwind CSS'],
    liveLink: 'https://assignment-10-2e230.web.app/',
    githubLink: 'https://github.com/piyal007/quicklancer',
    challenges: [
      'Designing a scalable data model for gigs, orders, and users',
      'Ensuring secure authentication and protected routes',
      'Optimizing list rendering and search for large datasets'
    ],
    improvements: [
      'Add role-based dashboards for buyers and sellers',
      'Implement advanced filters and sorting',
      'Introduce real-time messaging between users'
    ]
  },
  {
    slug: 'tradenest',
    name: 'Tradenest',
    image: 'https://i.postimg.cc/cCpvdSzf/Screenshot-2025-06-30-122806.png',
    description: 'A bulk trade related website.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    liveLink: 'https://assignment-11-ec3c7.web.app/',
    githubLink: 'https://github.com/piyal007/trade_nest',
    challenges: [
      'Synchronizing cart and inventory state across views',
      'Implementing optimistic UI updates with rollback',
      'Handling authentication flows with Firebase'
    ],
    improvements: [
      'Add analytics dashboard for sales insights',
      'Expand to multi-warehouse inventory support',
      'Introduce order tracking and notifications'
    ]
  },
  {
    slug: 'doctalk',
    name: 'DocTalk',
    image: 'https://i.postimg.cc/Mpv6KTRR/Screenshot-2025-06-30-123937.png',
    description: 'An online doctor related website.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveLink: 'https://p-assignment8.netlify.app/',
    githubLink: 'https://github.com/piyal007/DocTalk',
    challenges: [
      'Implementing real-time communication layers',
      'Managing appointment schedules and conflicts',
      'Securing patient data and access rules'
    ],
    improvements: [
      'Add video consultations',
      'Integrate calendar sync with Google Calendar',
      'Improve accessibility and performance metrics'
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}


