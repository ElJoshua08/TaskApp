import { FaPlus } from 'react-icons/fa';
import './CreateTask.css';

const TaskModal = () => {
  return (
    <div className="taskModal">
      <h1>asdasd</h1>
    </div>
  );
};

const CreateTask = () => {
  return (
    <>
      <button className="createTaskButton">
        <p> Create a new task! </p>
        <FaPlus className='plusIcon' />
      </button>

      <TaskModal />
    </>
  );
};

export { CreateTask };
