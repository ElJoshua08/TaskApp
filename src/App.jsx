import TodoCreate from './components/TodoCreate/TodoCreate';
import TodoList from './components/TodoList/TodoList';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoItem from './components/TodoItem/TodoItem.jsx';
import TodoFilter from './components/TodoFilter/TodoFilter.jsx';
import { useState } from 'react';
import TodoConfig from './components/TodoSettings/TodoSettings.jsx';

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = window.localStorage.getItem('tasks_v1');
    if (tasksFromStorage) return JSON.parse(tasksFromStorage);
    return [];
  });

  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    complete: false,
    uncomplete: false,
  });

  const saveToLocalStorage = (newTasks) => {
    window.localStorage.setItem('tasks_v1', JSON.stringify(newTasks));
  };

  return (
    <>
      <TodoConfig />

      <TodoSearch
        search={search}
        setSearch={setSearch}
      />

      <div className="filters">
        <TodoFilter
          id={'complete'}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          filterName={'Complete'}
        />
        <TodoFilter
          id={'uncomplete'}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          filterName={'Uncomplete'}
        />
      </div>
      {tasks.length == 0 ? (
        <h1 className="no-task">
          You <strong>{" Haven't"}</strong> created <strong>any</strong> task
          yet
        </h1>
      ) : (
        <TodoList>
          {tasks.map((task, index) => {
            if (
              task.taskName.toLowerCase().includes(search.toLowerCase()) &&
              activeFilters.complete
                ? task.isCompleted == true
                : true && activeFilters.uncomplete
                ? task.isCompleted == false
                : true
            ) {
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

      <div className="decoration">
        <span className="decoration-wave wave-1"></span>
      </div>
    </>
  );
}

export default App;
