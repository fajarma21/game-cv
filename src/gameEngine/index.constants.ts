const ID_PROJECT = 1;
const ID_EXP = 2;
const ID_EDU = 3;
const ID_ACHIEVEMENT = 4;
const ID_MIRROR = 5;
export const ID_CLOCK = 6;
export const ID_BED = 7;
export const ID_PHOTO = 8;

export const SPEED = 320;

export const ITEMS = [
  {
    id: ID_PROJECT,
    isBlock: false,
    isText: false,
    sprites: "project",
    text: "Projects",
    pos: {
      x: 50,
      y: 45,
    },
    area: {
      x: 0,
      y: 130,
      width: 100,
      height: 20,
    },
    z: 3,
  },
  {
    id: ID_EXP,
    isBlock: false,
    isText: false,
    sprites: "exp",
    text: "Experiences",
    pos: {
      x: 170,
      y: 50,
    },
    area: {
      x: 0,
      y: 100,
      width: 60,
      height: 20,
    },
  },
  {
    id: ID_EDU,
    isBlock: false,
    isText: false,
    sprites: "edu",
    text: "Educations",
    pos: {
      x: 605,
      y: 290,
    },
    area: {
      x: 5,
      y: 90,
      width: 65,
      height: 20,
    },
    z: 3,
  },
  {
    id: ID_ACHIEVEMENT,
    isBlock: false,
    isText: false,
    sprites: "achievement",
    text: "Achievements",
    pos: {
      x: 690,
      y: 265,
    },
    area: {
      x: 0,
      y: 115,
      width: 65,
      height: 20,
    },
    z: 3,
  },
  {
    id: ID_MIRROR,
    isBlock: false,
    isText: false,
    sprites: "mirror",
    text: "Mirror",
    pos: {
      x: 470,
      y: 50,
    },
    area: {
      x: 5,
      y: 100,
      width: 30,
      height: 40,
    },
  },
  {
    id: ID_BED,
    isBlock: true,
    isText: true,
    sprites: "bed",
    text: "Bed",
    pos: {
      x: 603,
      y: 110,
    },
    area: {
      x: 0,
      y: 20,
      width: 150,
      height: 200,
    },
  },
  {
    id: ID_PHOTO,
    isBlock: false,
    isText: true,
    sprites: "photo",
    text: "Photos",
    pos: {
      x: 532,
      y: 85,
    },
    area: {
      x: 10,
      y: 90,
      width: 50,
      height: 20,
    },
  },
];
