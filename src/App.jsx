import TodoCreate from './components/TodoCreate/TodoCreate';
import TodoList from './components/TodoList/TodoList';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoItem from './components/TodoItem/TodoItem.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = window.localStorage.getItem('tasks_v1');
    if (tasksFromStorage) return JSON.parse(tasksFromStorage);
    return [];
  });

  const [search, setSearch] = useState('');

  const saveToLocalStorage = (newTasks) => {
    window.localStorage.setItem('tasks_v1', JSON.stringify(newTasks));
  };

  return (
    <>
      <TodoSearch
        search={search}
        setSearch={setSearch}
      />
      {tasks.length == 0 ? (
        <h1 className="no-task">{"You haven't created any task yet!"}</h1>
      ) : (
        <TodoList>
          {tasks.map((task, index) => {
            if (task.taskName.toLowerCase().includes(search.toLowerCase())) {
              return (
                <TodoItem
                  isCompleted={task.isCompleted}
                  key={index}
                  tasks={tasks}
                  setTasks={setTasks}
                  saveToLocalStorage={saveToLocalStorage}
                >
                  {task.taskName}
                </TodoItem>
              );
            }
          })}
        </TodoList>
      )}
      <TodoCreate
        tasks={tasks}
        setTasks={setTasks}
        saveToLocalStorage={saveToLocalStorage}
      />

      <h6 className="author">
        Made with <span>love</span> by{' '}
        <span>
          <a
            target="_blank"
            href="https://github.com/ElJoshua08"
          >
            Joshua
          </a>
        </span>
      </h6>
    </>
  );
}

export default App;
