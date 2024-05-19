import './TodoSettings.css';
import { FaGear } from 'react-icons/fa6';

const TodoSettings = ({ children, settingsActive, setSettingsActive }) => {
  const handleClick = () => {
    let newSettingsActive = !settingsActive;

    setSettingsActive(newSettingsActive);
  };

  return (
    <div className={`todo-settings ${settingsActive ? 'is-active' : ''}`}>
      <FaGear onClick={handleClick} className='todo-settings-icon' />
      <div className="settings">{children}</div>
    </div>
  );
};

export default TodoSettings;
