import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function Clock({ salary, startTime }) {
  const [elapsedMS, setElapsedMS] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!startTime) {
        return;
      }
      const [hour, min] = startTime.split(':');
      const startDate = new Date();
      startDate.setHours(hour);
      startDate.setMinutes(min);
      startDate.setSeconds(0);
      startDate.setMilliseconds(0);
      const now = new Date();
      setElapsedMS(
        now < startDate ? now - startDate + 86400 * 1000 : now - startDate
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [salary, startTime]);

  const salaryPerMS = salary / 21 / 8 / 3600 / 1000;
  const accSalary = salaryPerMS * elapsedMS;

  const elapsedHours = Math.floor(elapsedMS / 1000 / 60 / 60);
  const elapsedMins = Math.floor((elapsedMS / 1000 / 60) % 60);
  const elapsedSecs = Math.floor((elapsedMS / 1000) % 60);

  return (
    <div className="text-8xl text-white text-center">
      <div>
        <small className="m-4 block text-[20px] text-center">
          {elapsedHours}시간 {elapsedMins}분 {elapsedSecs}초 동안 일하는 중
        </small>
      </div>
      <CountUp
        end={accSalary}
        duration={1}
        separator=","
        suffix="원"
        useEasing={false}
        preserveValue
      />
      <div>
        <small className="m-4 block text-[20px] text-center">
          (시급:{' '}
          {(salary / 21 / 8).toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}
          원)
        </small>
      </div>
    </div>
  );
}
