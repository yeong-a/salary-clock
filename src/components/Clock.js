import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function Clock({ salary }) {
  const [accSalary, setAccSalary] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAccSalary(accSalary => accSalary + salary / 21 / 8 / 3600);
    }, 1000);
    return () => clearInterval(interval);
  }, [salary]);

  return (
    <div className="text-8xl text-white">
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
