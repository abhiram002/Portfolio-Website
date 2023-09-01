import {
  frontend,
  // backend,
  ux,
  Androiddev,
 
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  githubb,
  xampp,
  firebase,
  employee,
  ecommerce,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  
  
];

const services = [
  {
    title: 'Web Development',
    icon: frontend,
  },
  // {
  //   title: 'Backend Developer',
  //   icon: backend,
  // },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Android Developer',
    icon: Androiddev,
  },
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
    name: 'xampp',
    icon: xampp,
  },
  {
    name: 'firebase',
    icon: firebase,
  },
  {
    name: 'githubb',
    icon:githubb,
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
    title: 'Sahyadri English Medium School',
    company_name: 'High School | Aggregate: 82.24 %',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'jan 2012 - Sep 2018',
  },
  {
    title: 'Govt PU College Thirthahalli',
    company_name: 'PUC | Aggregate: 79 %',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2018 - May 2020',
  },
  {
    title: 'AJ Institute of Engineering and Technology',
    company_name: 'Information Science & Engineering | CGPA : 7.8',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Dec 2020 - Present',
  },
  {
    title: 'TUTORING VOLUNTEER AT AKANKSHA FOUNDATION',
    company_name: 'The Akanksha Foundation is a non-profit organization that conducts a study scheme with the help of the state government of Karnataka. The aim of this organization is to provide education to the students studying in government schools and mentor the students. I am a volunteer ,representing my college and mentoring the students of the government schools.',
    icon: dcc,
    iconBg: '#333333',
    date: '2023 - Present',
  },
  {
    title: 'Web development Intern - Codelab System',
    company_name: 'Project :-An E-commerce web app with React offers a dynamic platform for online buying and selling. It showcases products, enables detailed views, and supports easy browsing and filtering. Users can add items to their carts, enjoy secure checkout, and manage orders. Integrated payment gateways ensure smooth transactions, while user accounts provide personalized experiences. The app is responsive across devices and includes search, reviews, and wishlist features. Reacts component-based structure ensures maintainability and a smooth UI. Overall, it aims to offer an engaging, efficient, and secure online shopping journey.',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2023 - Aug 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Leave Management ',
    description: 'It is a software solution designed to efficiently manage the process of Employee leave requests, approvals, tracking, and reporting within an organization.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: employee,
    repo: 'https://github.com/abhiram002/Employee-Leave-management-System',
    demo: 'https://github.com/abhiram002/Employee-Leave-management-System',
  },
  {
    id: 'project-2',
    name: 'E-commerce Website',
    description:
      'In Progress....',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    repo: 'https://github.com/abhiram002',
    demo: 'https://github.com/abhiram002',
  },
  {
    id: 'project-3',
    name: 'News Reader Android App',
    description: 'The News Reader Android application is a user-friendly and efficient mobile app designed to provide users with up-to-date news articles and headlines from various reliable sources. This app utilizes the News API and the REST (Representational State Transfer) architecture to fetch and display news content seamlessly.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/abhiram002/News-Reader-android-Application',
    demo: 'https://github.com/abhiram002/News-Reader-android-Application',
  },
  {
    id: 'project-4',
    name: 'Portfolio Website',
    description: `A sleek and modern personal portfolio website built using React.
     Helps to Showcase skills, projects, and experiences with style.
     Responsive design ensures it looks great on all devices.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/abhiram002/Portfolio-Website',
    demo: 'https://github.com/abhiram002/Portfolio-Website',
  },
  {
    id: 'project-5',
    name: 'GCE project',
    description:
      'Construction in progress',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/abhiram002',
    demo: 'https://github.com/abhiram002',
  },
  
];

export { services, technologies, experiences, projects };
