import { useState } from 'react';
import { FaCheck, FaPlus } from 'react-icons/fa6';
import './TodoCreate.css';

const TodoCreate = ({ tasks, setTasks }) => {
  const [createModal, setCreateModal] = useState(false);
  const [taskName, setTaskName] = useState('');

  const createNewTask = () => {
    if (taskName.length == 0) {
      alert('Please provide a task name');
      return;
    }


    const newTask = {
      taskName: taskName,
      isCompleted: false,
    };

    const newTasks = [...tasks, newTask];

    setTasks(newTasks);
    setCreateModal(false);
    setTaskName('');
  };

  return (
    <>
      <button
        onClick={() => {
          setCreateModal(true);
        }}
        className="todo-create-button"
      >
        <h2 className="todo-create-text">Create new Task!</h2>
        <FaPlus className="todo-create-icon icon-add" />
      </button>

      <div className={`todo-create-modal ${createModal ? 'active' : ''}`}>
        <FaPlus
          onClick={() => {
            setCreateModal(false);
          }}
          className="todo-create-icon icon-close"
        />
        <input
          onInput={(e) => {
            setTaskName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code == 'Enter') {
              createNewTask();
            }
          }}
          type="text"
          placeholder="Task Name"
          name="new task name"
          value={taskName}
        />
        <FaCheck
          onClick={() => {
            createNewTask();
          }}
          className="todo-create-icon icon-check"
        />
      </div>
    </>
  );
};

export default TodoCreate;
