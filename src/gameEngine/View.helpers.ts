import dayjs from 'dayjs';

export const getRandomText = (arr: string[], prevValue: string) => {
  const getRandom = () => arr[Math.floor(Math.random() * arr.length)];
  let random = getRandom();
  while (random === prevValue) {
    random = getRandom();
  }

  return random;
};

export const getBedText = () => {
  const currentTime = dayjs().hour();
  let text = '';
  if (currentTime <= 4) {
    text = "Why are you still up? Working?\nLet's continue tomorrow.";
  } else if (currentTime <= 7) {
    text =
      'I just woke up and immediately realized there was another morning person.';
  } else if (currentTime <= 12) {
    text = 'Seriously? at this time?';
  } else if (currentTime <= 14) {
    text = 'Boss is watching.';
  } else if (currentTime <= 16) {
    text = "It's too late to take a nap.";
  } else if (currentTime <= 20) {
    text = 'Sleepy yet?';
  } else if (currentTime <= 23) {
    text = "I'll sleep after you.";
  }
  return text;
};

export const getMusicState = (state: boolean) => {
  return state ? 'on' : 'off';
};
