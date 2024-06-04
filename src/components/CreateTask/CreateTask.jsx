import './CreateTask.css';
import { useState, useRef, useEffect } from 'react';
import { FaCheck, FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const TaskModal = ({ setTasks, tasks, modalActive, setModalActive }) => {
  const [taskName, setTaskName] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setModalActive(false);
      }
    };

    if (modalActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalActive, setModalActive]);

  const createTask = () => {
    if (taskName === '') {
      alert('Please enter a task name');
      return;
    }

    // Check if the task already exists
    const existingTask = tasks.find((task) => task.name === taskName);
    if (existingTask) {
      alert('A task with that name already exists');
      return;
    }

    const newTask = {
      id: uuidv4(),
      name: taskName,
      completed: false,
    };

    console.log(newTask);

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setTaskName('');
    setModalActive(false);
  };

  return (
    <div
      ref={modalRef}
      className={`taskModal ${modalActive ? 'active' : ''}`}
    >
      <input
        id="taskName"
        className="taskName"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && createTask()}
        placeholder="Your new task"
      />

      <FaCheck
        onClick={createTask}
        className="createIcon"
      />
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
