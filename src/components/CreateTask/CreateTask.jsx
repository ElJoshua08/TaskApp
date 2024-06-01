import { useState } from 'react';
import { FaCheck, FaPlus } from 'react-icons/fa';
import './CreateTask.css';
import { FaXmark } from 'react-icons/fa6';

const TaskModal = ({ setTasks, tasks, modalActive, setModalActive }) => {
  const [taskName, setTaskName] = useState('');

  const createTask = () => {
    
    const newTask = {
      name: taskName,
      completed: false,
      color: 'default',
    };
    
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setTaskName('');
    setModalActive(false);
  };

  return (
    <div className={`taskModal ${modalActive ? 'active' : ''}`}>
      <FaXmark
        onClick={() => setModalActive(false)}
        className="closeIcon"
      />

      <div className="data">
        <input
          id="taskName"
          className="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Your new task"
        />

        <FaCheck
          onClick={createTask}
          className="createIcon"
        />
      </div>
    </div>
  );
};

const CreateTask = ({ tasks, setTasks }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <button
        onClick={() => setModalActive(true)}
        className="createTaskButton"
      >
        <p> Create a new task! </p>
        <FaPlus className="plusIcon" />
      </button>

      <TaskModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
};

export { CreateTask };
