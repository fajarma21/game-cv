import {
  ID_PROJECT,
  ID_ACHIEVEMENT,
  ID_BED,
  ID_EDU,
  ID_EXP,
  ID_MIRROR,
  ID_PHOTO,
} from "@/constants";

export const SPEED = 320;

export const ITEMS = [
  {
    id: ID_PROJECT,
    isBlock: false,
    isText: false,
    sprites: "project",
    text: "Projects",
    pos: {
      x: 5,
      y: -105,
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
      x: 125,
      y: -100,
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
      x: 560,
      y: 140,
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
      x: 645,
      y: 115,
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
      x: 425,
      y: -100,
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
      x: 558,
      y: -40,
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
      x: 487,
      y: -65,
    },
    area: {
      x: 10,
      y: 90,
      width: 50,
      height: 20,
    },
  },
];
