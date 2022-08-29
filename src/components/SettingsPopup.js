import { useState } from 'react';

export default function SettingsPopup({
  visible,
  onClose,
  onChangeSalary,
  onChangeStartTime,
}) {
  const [salaryInput, setSalaryInput] = useState('0');
  const [startTime, setStartTime] = useState('09:00');
  return (
    visible && (
      <div className="top-[70px] right-4 w-[300px] flex flex-col absolute rounded-xl p-4 bg-white shadow-xl ">
        <div className="text-right"></div>
        <div className="flex-grow flex items-center whitespace-nowrap text-xl">
          <label>월급:</label>
          <input
            className="ml-2 min-w-0 border-2 rounded-md py-1 px-2 hover:border-indigo-600 transition mr-1"
            value={salaryInput}
            onChange={e => setSalaryInput(e.target.value)}
          />
          원
        </div>
        <div className="mt-2 flex-grow flex items-center whitespace-nowrap text-xl">
          <label>출근 시각:</label>
          <input
            type="time"
            value={startTime}
            className="flex-grow ml-2 min-w-0 border-2 rounded-md py-1 px-2 hover:border-indigo-600 transition mr-1"
            onChange={e => setStartTime(e.target.value)}
          />
        </div>
        <div className="text-right mt-4">
          <button
            className="py-1 px-4 text-xl bg-gray-200 rounded-md text-black font-bold hover:bg-gray-300 transition mr-2"
            onClick={() => onClose()}
          >
            취소
          </button>
          <button
            className="py-1 px-4 text-xl bg-indigo-500 rounded-md text-white font-bold hover:bg-indigo-600 transition"
            onClick={() => {
              const newSalary = parseInt(salaryInput);
              if (isNaN(newSalary)) {
                alert('올바른 숫자를 입력해주세요.');
                return;
              }
              onChangeSalary(newSalary);

              const [hour, min] = startTime.split(':');
              const newStartTime = new Date();
              newStartTime.setHours(hour);
              newStartTime.setMinutes(min);
              newStartTime.setSeconds(0);
              onChangeStartTime(newStartTime);
              onClose();
            }}
          >
            적용
          </button>
        </div>
      </div>
    )
  );
}
