import { useState } from 'react';
import './TodoSettings.css';
import { FaGear } from 'react-icons/fa6';

const TodoSettings = () => {
  const [settingsActive, setSettingsActive] = useState(false);

  const handleClick = () => {
    let newSettingsActive = !settingsActive;

    setSettingsActive(newSettingsActive);
  };

  return (
    <div
      onClick={handleClick}
      className={`todo-config ${settingsActive ? 'is-active' : ''}`}
    >
      <FaGear />
    </div>
  );
};

export default TodoSettings;
