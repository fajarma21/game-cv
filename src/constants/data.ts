import unjPic from '@/assets/unj.png';

import cvGame1Img from '@/assets/projects/cv-game-1.png';
import cvcIcon from '@/assets/projects/client-video-converter-icon.png';
import cvc1Img from '@/assets/projects/client-video-converter-1.png';
import cvc2Img from '@/assets/projects/client-video-converter-2.png';
import cvc3Img from '@/assets/projects/client-video-converter-3.png';
import pokemonIcon from '@/assets/projects/pokemon-icon.png';
import pokemon1Img from '@/assets/projects/pokemon-1.png';
import pokemon2Img from '@/assets/projects/pokemon-2.png';
import pokemon3Img from '@/assets/projects/pokemon-3.png';
import pokemon4Img from '@/assets/projects/pokemon-4.png';
import pathfindingIcon from '@/assets/projects/pathfinding-icon.png';
import pathfinding1Img from '@/assets/projects/pathfinding-1.png';
import pathfinding2Img from '@/assets/projects/pathfinding-2.png';
import pathfinding3Img from '@/assets/projects/pathfinding-3.png';
import kuartetIcon from '@/assets/projects/kuartet-icon.png';
import kuartet1Img from '@/assets/projects/kuartet-1.png';
import kuartet2Img from '@/assets/projects/kuartet-2.png';
import kuartet3Img from '@/assets/projects/kuartet-3.png';
import tttIcon from '@/assets/projects/tic-tac-toe-icon.png';
import ttt1Vid from '@/assets/projects/tic-tac-toe-video-1.mp4';
import ttt1Img from '@/assets/projects/tic-tac-toe-1.png';
import ttt2Img from '@/assets/projects/tic-tac-toe-2.png';
import ttt3Img from '@/assets/projects/tic-tac-toe-3.png';
import ttt4Img from '@/assets/projects/tic-tac-toe-4.png';
import spMockIcon from '@/assets/projects/sp-mock-icon.png';
import spMock1Img from '@/assets/projects/sp-mock-1.png';

export const PROJECT_GAME_CV = 1;
export const PROJECT_CV = 2;
export const PROJECT_CVC = 3;
export const PROJECT_POKEMON = 4;
export const PROJECT_PATHFINDING = 5;
export const PROJECT_TTT = 6;
export const PROJECT_KUARTET = 7;
export const PROJECT_SP_MOCK = 8;

const HOSTNAME = 'https://fajarma.com';

const REACT = {
  name: 'React',
  url: 'https://react.dev/',
};
const TYPESCRIPT = {
  name: 'Typescript',
  url: 'https://www.typescriptlang.org/',
};

const NEXTJS = {
  name: 'Next.js',
  url: 'https://nextjs.org/',
};

const ZUSTAND = {
  name: 'Zustand',
  url: 'https://zustand-demo.pmnd.rs/',
};

export const DATA = {
  education: {
    logo: unjPic,
    name: 'State University of Jakarta',
    url: 'https://unj.ac.id',
    point: '3.50',
    title: 'Informatics and Computer Engineering Education',
    time: '2010 - 2016',
  },
  experience: [
    {
      id: 3,
      company: 'Tokopedia',
      time: 'Nov 2018 – Aug 2024',
      title: 'Senior Software Engineer (Web Platform)',
      desc: 'An e-commerce company that also focuses on technology development.',
      jobs: [
        'Work on about 10 web modules on Desktop, Mobile, and WebView.',
        'Develop feature, bug fix, and maintain all modules performance.',
        'Create documentation for existing/ongoing module.',
        'Modules: AI Chat, User Chat, Broadcast Chat, Notification, etc.',
        'Front-end: React, Typescript, WebSocket, etc.',
        'API Integration : fetch API & Apollo Query.',
        'Module monitor : Scalyr & New Relic.',
        'Version control: Git.',
      ],
      url: 'https://tokopedia.com',
    },
    {
      id: 2,
      company: 'Teknolima',
      time: 'Mar 2018 – Nov 2018',
      title: 'Front End Developer, Designer',
      desc: 'A software house that develops web and mobile applications for companies.',
      jobs: [
        'Work on 4 desktop modules and mobile app.',
        'Create mockups and designs.',
        'Desktop: React.',
        'Mobile App: React Native.',
        'API Integration: Axios.',
        'Version control: Git.',
      ],
    },
    {
      id: 1,
      company: 'PUSTIKOM UNJ',
      time: 'Mar 2015 – Mar 2018',
      title: 'Web Developer (fullstack), Designer',
      desc: "University's technology center.",
      jobs: [
        'Develop and maintain more than 20 web modules.',
        'Create the designs.',
        'Frond-end: HTML, CSS, JS, & JQuery.',
        'Back-end: PHP, Laravel, Yii, & MySQL.',
        'Others stacks: Wordpress, Drupall.',
      ],
      url: 'https://unj.ac.id',
    },
  ],
  profile: [
    {
      title: 'Fajar Maulana - 1992',
      list: ['Front-end dev', 'React dev'],
    },
    {
      subTitle: 'Skills',
      list: ['HTML, CSS, JS', 'React', 'Typescript', 'NodeJS'],
    },
    // {
    //   subTitle: 'Interest',
    //   list: ['Front-end', 'Illustration', 'Game(+)dev'],
    // },
  ],
  project: [
    {
      id: PROJECT_GAME_CV,
      images: [cvGame1Img],
      title: 'Interactive CV',
      desc: 'Simple interactive game-themed CV.',
      stacks: [
        REACT,
        TYPESCRIPT,
        {
          name: 'Kaplay',
          url: 'https://kaplayjs.com/',
        },
        ZUSTAND,
      ],
      repo: ['https://github.com/fajarma21/fajarma-game'],
      url: `${HOSTNAME}/interactive-cv`,
      desktopOnly: true,
    },
    {
      id: PROJECT_CVC,
      icon: cvcIcon,
      images: [cvc1Img, cvc2Img, cvc3Img],
      title: 'Client Video Converter',
      desc: 'Convert your video on client side.',
      stacks: [
        NEXTJS,
        TYPESCRIPT,
        {
          name: 'FFmpeg.wasm',
          url: 'https://ffmpegwasm.netlify.app/',
        },
        ZUSTAND,
      ],
      repo: ['https://github.com/fajarma21/client-video-converter'],
      url: 'https://client-video-converter.vercel.app/',
    },
    {
      id: PROJECT_POKEMON,
      icon: pokemonIcon,
      images: [pokemon1Img, pokemon2Img, pokemon3Img, pokemon4Img],
      title: 'Pokemon List',
      desc: 'Pokemon list using Pokemon API',
      stacks: [
        NEXTJS,
        TYPESCRIPT,
        {
          name: 'React Query',
          url: 'https://tanstack.com/query/latest/docs',
        },
        {
          name: 'Framer Motion',
          url: 'https://motion.dev/',
        },
      ],
      repo: ['https://github.com/fajarma21/pokemon'],
      url: 'https://pokemon-gamma-cyan.vercel.app/',
    },
    {
      id: PROJECT_PATHFINDING,
      icon: pathfindingIcon,
      images: [pathfinding1Img, pathfinding2Img, pathfinding3Img],
      title: 'React Pathfinding',
      desc: 'Pathfinding algorithm implementation.',
      stacks: [REACT, TYPESCRIPT, ZUSTAND],
      repo: ['https://github.com/fajarma21/react-pathfinding'],
      url: `${HOSTNAME}/react-pathfinding/`,
    },
    {
      id: PROJECT_TTT,
      icon: tttIcon,
      images: [ttt1Img, ttt2Img, ttt3Img, ttt4Img],
      videos: [ttt1Vid],
      title: 'Tic Tac Toe',
      desc: 'Play simple Tic Tac Toe with your friend.',
      stacks: [
        REACT,
        TYPESCRIPT,
        {
          name: 'WebSocket',
          url: 'https://www.npmjs.com/package/ws',
        },
      ],
      repo: [
        'https://github.com/fajarma21/react-tic-tac-toe',
        'https://github.com/fajarma21/ttt-ws',
      ],
      url: '',
      urlText: 'Not deployed yet',
    },
    {
      id: PROJECT_KUARTET,
      icon: kuartetIcon,
      images: [kuartet1Img, kuartet2Img, kuartet3Img],
      title: 'React Kuartet',
      desc: 'Collect 4 same type cards as many as you can.',
      stacks: [REACT, TYPESCRIPT],
      repo: ['https://github.com/fajarma21/react-kuartet'],
      url: `${HOSTNAME}/react-kuartet/`,
    },
    {
      id: PROJECT_SP_MOCK,
      icon: spMockIcon,
      images: [spMock1Img],
      title: 'Sponge Mock',
      desc: 'Text converter for Spongebob mocking meme',
      stacks: [REACT, TYPESCRIPT],
      repo: ['https://github.com/fajarma21/sponge-mock'],
      url: `${HOSTNAME}/sponge-mock/`,
    },
  ],
};
