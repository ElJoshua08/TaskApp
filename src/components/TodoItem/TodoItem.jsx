import { useState } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa6';
import './TodoItem.css';

const TodoItem = ({ children, isCompleted, tasks, setTasks }) => {
  const [todoCompleted, setTodoCompleted] = useState(isCompleted);

  const deleteTask = () => {
    const newTasks = tasks.filter((task) => {
      return task.taskName !== children;
    });

    setTasks(newTasks);
  };

  return (
    <li className={`todo-item ${todoCompleted ? 'is-completed' : ''}`}>
      <p className="todo-item-text">{children}</p>

      <div className="buttons">
        <FaCheck
          onClick={() => {
            setTodoCompleted(!todoCompleted);
          }}
          className="todo-item-icon icon-check"
        />
        <FaTrash onClick={ deleteTask } className="todo-item-icon icon-delete" />
      </div>
    </li>
  );
};

export default TodoItem;
