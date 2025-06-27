import TypescriptIcon from '../assets/skills-icons/typescript.svg';
import ReactIcon from '../assets/skills-icons/react.svg';
import NodeIcon from '../assets/skills-icons/nodejs.svg';
import NextIcon from '../assets/skills-icons/nextjs.svg';
import FirebaseIcon from '../assets/skills-icons/firebase.svg';
import AwsIcon from '../assets/skills-icons/aws.svg';
import DockerIcon from '../assets/skills-icons/docker.svg';
import AzureIcon from '../assets/skills-icons/azure.svg';

// In future it will be fetched from CMS API or similar
const skillsArray = [
  {
    Icon: TypescriptIcon,
    name: 'Typescript',
    description: 'A superset of JavaScript that adds static types.',
    link: 'https://www.typescriptlang.org/',
  },
  {
    Icon: ReactIcon,
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    link: 'https://reactjs.org/',
  },
  {
    Icon: NodeIcon,
    name: 'Node.js',
    description: "A JavaScript runtime built on Chrome's V8 engine.",
    link: 'https://nodejs.org/',
  },
  {
    Icon: NextIcon,
    name: 'Next.js',
    description: 'A React framework for server-rendered applications.',
    link: 'https://nextjs.org/',
  },
  {
    Icon: FirebaseIcon,
    name: 'Firebase',
    description: 'A platform developed by Google for creating mobile and web applications.',
    link: 'https://firebase.google.com/',
  },
  {
    Icon: AwsIcon,
    name: 'AWS',
    description: 'Amazon Web Services, a comprehensive cloud computing platform.',
    link: 'https://aws.amazon.com/',
  },
  {
    Icon: DockerIcon,
    name: 'Docker',
    description: 'A platform for developing, shipping, and running applications in containers.',
    link: 'https://www.docker.com/',
  },
  {
    Icon: AzureIcon,
    name: 'Azure',
    description:
      "Microsoft's cloud computing service for building, testing, deploying, and managing applications.",
    link: 'https://azure.microsoft.com/',
  },
];

const educationArray = [
  {
    name: 'Bachelor of Engineering in Computer Science',
    institution: 'Government College of Engineering',
    year: '2020 - 2024',
    description:
      'Completed a degree in Computer Science Engineering with a focus on software development and data structures.',
  },
  {
    name: 'Higher Secondary Certificate',
    institution: 'Sacred Heart High School',
    year: '2013 - 2020',
    description: 'Completed higher secondary education with a focus on science and mathematics.',
  },
];

const projectsArray = [
  {
    name: 'Portfolio page along with blogs',
    completionDate: 'Ongoing',
    description:
      'A personal portfolio website built using Next.js, SCSS, and Firebase. It highlights my projects, technical skills, and features a blog section for sharing insights and learnings.',
    link: '', //TODO: Add link when deployed
    skillsUsed: '',
  },
  {
    name: 'Secured Chatroom',
    completionDate: 'Aug 2024',
    description:
      'A secure chat application built with React and Node.js. It features user authentication and real-time messaging. The frontend is built with React and Context API, while the backend uses Node.js and Socket.IO. MongoDB is used as the database, and Redis is used for caching.',
    link: 'https://github.com/nimalchrist/Chat_App_Ui.git',
    skillsUsed: '',
  },
  {
    name: 'Room Relish UI',
    completionDate: 'Jun 2024',
    description:
      'A modern and responsive UI for a room booking application, built with Reactjs, Material UI and contextAPI.',
    link: 'https://github.com/nimalchrist/room_relish_ui.git',
    skillsUsed: '',
  },
];

export function getSkillsArrayData() {
  return skillsArray;
}

export function getEducationArrayData() {
  return educationArray;
}

export function getProjectsArrayData() {
  return projectsArray;
}

export function getProfileSummaryDetails() {
  return {
    name: 'Chiristo Nimal',
    role: 'Software Engineer',
    summary:
      "I'm a code nerd with obsessive indentation standards. I debug for fun, refactor for beauty, and philosophize over Marvel timelines. Ping me at chiristo.dev@gmail.com. Let's talk clean code or chaos.",
  };
}
