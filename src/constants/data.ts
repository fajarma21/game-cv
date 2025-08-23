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
    point: '3.50',
    title: 'Informatics and Computer Engineering Education',
    time: '2010 - 2016',
  },
  experience: [
    {
      id: 3,
      company: 'Tokopedia',
      time: 'Nov 2018 – Aug 2024',
      title: 'Sr. Software Engineer (Web Platform)',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 2,
      company: 'Teknolima',
      time: 'Mar 2018 – Nov 2018',
      title: 'Front End Developer, Designer',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 1,
      company: 'PUSTIKOM UNJ',
      time: 'Mar 2015 – Mar 2018',
      title: 'Web Developer, Designer',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ],
  profile: [
    {
      title: 'Fajar Maulana - 1992',
      list: ['Front-end dev', 'React dev'],
    },
    {
      subTitle: 'Skills',
      list: ['HTML, CSS, JS', 'React', 'Typescript', 'Node'],
    },
    {
      subTitle: 'Interest',
      list: ['Front-end', 'Illustration', 'Game(+)dev'],
    },
  ],
  project: [
    {
      id: 1,
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
      url: 'github.com',
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      icon: pathfindingIcon,
      images: [pathfinding1Img, pathfinding2Img, pathfinding3Img],
      title: 'React Pathfinding',
      desc: 'Pathfinding algorithm implementation.',
      stacks: [REACT, TYPESCRIPT, ZUSTAND],
      repo: ['https://github.com/fajarma21/react-pathfinding'],
      url: 'https://fajarma21.github.io/react-pathfinding/',
    },
    {
      id: 5,
      icon: kuartetIcon,
      images: [kuartet1Img, kuartet2Img, kuartet3Img],
      title: 'React Kuartet',
      desc: 'Collect 4 same type cards as many as you can.',
      stacks: [REACT, TYPESCRIPT],
      repo: ['https://github.com/fajarma21/react-kuartet'],
      url: 'https://fajarma21.github.io/react-kuartet/',
    },
  ],
};
