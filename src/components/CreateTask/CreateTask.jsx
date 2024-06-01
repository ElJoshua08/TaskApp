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
    <div className="createTask">
      <button className='createTaskButton'>
        Create a new task!
        <FaPlus />
      </button>
        
      <TaskModal />
    </div>
  );
};

export { CreateTask };
