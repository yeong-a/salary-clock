import { useState } from 'react';

export default function SettingsPopup({ visible, onClose, onChangeSalary }) {
  const [salaryInput, setSalaryInput] = useState('0');
  return (
    visible && (
      <div className=" w-[400px] h-[200px] flex flex-col absolute rounded-xl p-4 bg-white shadow-xl ">
        <div className="text-right">
          <button className="text-l" onClick={() => onClose()}>
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
            className="py-2 px-6 text-xl bg-indigo-500 rounded-md text-white font-bold hover:bg-indigo-600 transition"
            onClick={() => {
              const newSalary = parseInt(salaryInput);
              if (isNaN(newSalary)) {
                alert('올바른 숫자를 입력해주세요.');
                return;
              }
              onChangeSalary(newSalary);
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
