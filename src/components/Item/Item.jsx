import { FaCheck, FaTrash } from 'react-icons/fa6';
import { useState } from 'react';
import './Item.css';

const Item = ({ task, setTasks }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheck = () => {
    setIsCompleted(!isCompleted);

    setTasks((tasks) =>
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: isCompleted } : t
      )
    );
  };

  const deleteItem = () => {
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li className={`item ${isCompleted ? 'completed' : ''}`}>
      <p className="itemName">{task.name}</p>
      <div className="itemButtons">
        <FaCheck
          onClick={handleCheck}
          className="iconCheck icon"
        />

        <FaTrash onClick={deleteItem} className="iconDelete icon" />
      </div>
    </li>
  );
};

export { Item };
