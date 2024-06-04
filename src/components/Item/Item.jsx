import { FaCheck, FaTrash } from 'react-icons/fa6';
import { useState } from 'react';
import './Item.css';

const Item = ({ task, setTasks }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheck = () => {
    setIsCompleted(!isCompleted);

    console.log(isCompleted);
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
      <div className="itemName">{task.name}</div>
      <div className="itemButtons">
        <FaCheck
          onClick={handleCheck}
          className="itemCheck icon"
        />

        <FaTrash onClick={deleteItem} className="itemDelete icon" />
      </div>
    </li>
  );
};

export { Item };
