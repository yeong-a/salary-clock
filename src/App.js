import { useEffect, useState } from 'react';
import Clock from './components/Clock';
import SettingsPopup from './components/SettingsPopup';

function App() {
  const [stateLoaded, setStateLoaded] = useState(false);
  const [salary, setSalary] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [salaryInput, setSalaryInput] = useState(0);
  const [startTimeInput, setStartTimeInput] = useState('09:00');

  useEffect(() => {
    if (!stateLoaded) {
      const state = JSON.parse(localStorage.getItem('salary-clock:state'));
      if (!state) {
        setStateLoaded(true);
        return;
      }
      const { salary, startTime } = state;
      setSalary(salary);
      setStartTime(startTime);
      setSalaryInput(salary);
      setStartTimeInput(startTime);
      setStateLoaded(true);
    }
  }, [stateLoaded]); // dependency가 비어있으면 마운트 시 한 번만 호출

  useEffect(() => {
    if (stateLoaded) {
      localStorage.setItem(
        'salary-clock:state',
        JSON.stringify({ salary, startTime }) // {salary: salary, startTime: startTime}
      );
    }
  }, [stateLoaded, salary, startTime]);

  return (
    <div className="h-screen flex justify-center items-center bg-indigo-500">
      <button
        className="absolute top-2 right-4 text-5xl transition hover:text-gray-200 text-white"
        onClick={() => setPopupVisible(popupVisible => !popupVisible)}
      >
        ⚙
      </button>
      <Clock salary={salary} startTime={startTime} />
      <SettingsPopup
        visible={popupVisible}
        startTimeInput={startTimeInput}
        salaryInput={salaryInput}
        onClose={() => setPopupVisible(false)}
        onConfirm={(salaryInput, startTimeInput) => {
          setSalary(parseInt(salaryInput));
          setStartTime(startTimeInput);
          setPopupVisible(false);
        }}
        onChangeSalaryInput={salaryInput => setSalaryInput(salaryInput)}
        onChangeStartTimeInput={startTimeInput =>
          setStartTimeInput(startTimeInput)
        }
      />
    </div>
  );
}

export default App;
