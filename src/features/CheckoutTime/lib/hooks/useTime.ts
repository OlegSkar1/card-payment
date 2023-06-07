import { useState, useEffect } from 'react';

import { getCurrentDate, getCurrentTime } from '../timeHelper';

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currDate = getCurrentDate(time);
  const currTime = getCurrentTime(time);

  return { currDate, currTime };
};
