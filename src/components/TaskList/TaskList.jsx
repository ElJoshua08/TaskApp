import './TaskList.css';

const TaskList = ({ children }) => {
  return <ul className="taskList">{children}</ul>;
};

export { TaskList };
