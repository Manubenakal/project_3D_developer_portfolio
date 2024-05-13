import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Developer',
    icon: web,
  },
  {
    title: 'Full Stack Developer',
    icon: mobile,
  },
  // {
  //   title: 'Frontend Developer',
  //   icon: backend,
  // },
  // {
  //   title: 'Backend Developer',
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer and Founding Staff',
    company_name: 'CosmicTech',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2024 - Present',
    points: [
      'Developed CosmicTech, an eco-friendly alternative to traditional paper business cards, addressing environmental concerns associated with constant printing and disposal. ',
      'Our NFC business cards are made,embedded with a Near Field Communication (NFC) chip. This chip allows you to easily share your contact information with others simply by taping your card to their smartphone. Reducing the ecological impact.Every year more than 7.2 Million Trees are cut for visiting cards.',
      'CosmicTech’s NFC platform empowers users with personalized profiles, customizable URLs, and seamless contact exchange via smartphone tapping. Promoting sustainability and personal branding with shared details.',
      'Website - https://www.cosmictech.io/',
    ],
  },
  {
    title: 'System Engineer C1',
    company_name: 'Tata Consultancy Services',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'June 2023 - January 2024',
    points: [
      'Worked on SQL and PLSQL to develop new procedures and fix existing code issues and fine tune the queries to run efficiently by 60% than the prior queries',
      'Generation of new reports and fixed existing reports using SAP BO reporting application which decreases manual efforts by 40%.',
      'Project involves Extracting data from different sources, cleansing and processing the data in data warehouse and delivering the processed data for different business requirements.',
      ' Key Responsibilities include – Analysis, Development, Data Analysis, Automations, Error handling, Code Review using tools such as Oracle PL/SQL,SAP BO,Oracle GL application.',
    ],
  },

  {
    title: 'Web Developer Intern',
    company_name: 'RadicalX',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Oct 2022 - Nov 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Imaginify',
    description:
      'AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal. This project can be a guide for your next AI image tool and a boost to your portfolio.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'shadcn',
        color: 'blue-text-gradient',
      },
      {
        name: 'zod',
        color: 'green-text-gradient',
      },
      {
        name: 'stripe',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/Manubenakal/Imaginify',
  },
  {
    name: 'OYO-Clone',
    description:
      'Clone of OYO Website made using Next, Mongodb, TailwindCSS Razorpay payment Integration and Mainly focused on Backend',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'jsonwebtokens',
        color: 'green-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/Manubenakal/OYO-Clone-07',
  },
  {
    name: 'Happenify',
    description:
      'Built on Next.js 14, the events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'shadcn',
        color: 'blue-text-gradient',
      },
      {
        name: 'zod',
        color: 'green-text-gradient',
      },
      {
        name: 'stripe',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/Prajwal063/happenify',
  },
];

export { services, technologies, experiences, testimonials, projects };
