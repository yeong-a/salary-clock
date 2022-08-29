import { useState } from 'react';
import Clock from './components/Clock';
import SettingsPopup from './components/SettingsPopup';

function App() {
  const [salary, setSalary] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [startTime, setStartTime] = useState(null);

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
        onClose={() => setPopupVisible(false)}
        onChangeSalary={newSalary => setSalary(newSalary)}
        onChangeStartTime={newStartTime => setStartTime(newStartTime)}
      />
    </div>
  );
}

export default App;
