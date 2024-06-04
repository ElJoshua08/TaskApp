import { FaCheck, FaTrash } from 'react-icons/fa6';
import './Item.css';

const Item = ({ task, setTasks }) => {
  return (
    <li className="item">
      <div className="itemName">{task.name}</div>
      <div className="itemButtons">
        <FaCheck className="itemCheck" />

        <FaTrash className="itemDelete" />
      </div>
    </li>
  );
};

export { Item };