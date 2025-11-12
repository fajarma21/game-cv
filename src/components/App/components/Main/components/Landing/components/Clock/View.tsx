import { useCallback, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

import css from './View.module.scss';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const frameRef = useRef<number>(null);

  const updateClock = useCallback(() => {
    setTime(new Date());
    frameRef.current = requestAnimationFrame(updateClock);
  }, []);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(updateClock);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [updateClock]);

  return (
    <div className={css.container}>
      <div className={css.clock}>{dayjs(time).format('HH:mm')}</div>
      <p className={css.date}>{dayjs().format('ddd, DD MMMM YYYY')}</p>
    </div>
  );
};

export default Clock;
