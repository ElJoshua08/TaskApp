import './SettingItem.css';

const SettingItem = ({ settingsActive }) => {
  return (
    <div className={` setting-item ${settingsActive ? 'is-active' : ''}`}></div>
  );
};

export default SettingItem;
