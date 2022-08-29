import { useState } from 'react';
import Clock from './components/Clock';

function App() {
  const [salary, setSalary] = useState(3000000);
  const [popupVisible, setPopupVisible] = useState(false);
  const [salaryInput, setSalaryInput] = useState('3000000');

  return (
    <div className="h-screen flex justify-center items-center bg-indigo-400">
      <button
        className="absolute top-2 right-4 text-5xl transition hover:text-gray-200 text-white"
        onClick={() => setPopupVisible(true)}
      >
        ⚙
      </button>
      <Clock salary={salary} />
      {popupVisible && (
        <div className=" w-[400px] h-[200px] flex flex-col absolute rounded-xl p-4 bg-white shadow-xl ">
          <div className="text-right">
            <button
              className="text-xl font-bold"
              onClick={() => setPopupVisible(false)}
            >
              &times;
            </button>
          </div>
          <div className="flex-grow flex justify-center items-center">
            <label className="text-xl">
              월급:{' '}
              <input
                className="border-2 rounded-md py-1 px-2"
                value={salaryInput}
                onChange={e => setSalaryInput(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="text-right">
            <button
              className="py-2 px-6 text-xl bg-indigo-400 rounded-md text-white font-bold hover:bg-indigo-500 transition"
              onClick={() => {
                const newSalary = parseInt(salaryInput);
                if (isNaN(newSalary)) {
                  alert('올바른 숫자를 입력해주세요.');
                  return;
                }
                setSalary(newSalary);
                setPopupVisible(false);
              }}
            >
              적용
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
