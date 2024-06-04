import './App.css';
import { useState, useEffect } from 'react';
import { Author } from './components/Author/Author';
import { NoTask } from './components/NoTask/NoTask';
import { CreateTask } from './components/CreateTask/CreateTask';
import { Logo } from './components/Logo/Logo';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Item } from './components/Item/Item';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = window.localStorage.getItem('tasks_v1');
    if (tasksFromStorage) return JSON.parse(tasksFromStorage);
    return [];
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    const saveToStorage = () => {
      window.localStorage.setItem('tasks_v1', JSON.stringify(tasks));
    };

    saveToStorage();
  }, [tasks]); // `useEffect` se ejecutará cada vez que `tasks` cambie

  return (
    <main>
      <Logo />

      {/* TODO: Create the search and filter bars */}
      <SearchBar
        search={search}
        SetSearch={setSearch}
      />

      {tasks.length > 0 ? (
        <TaskList>
          {tasks.filter((task) => task.name.toLowerCase().includes(search.toLowerCase())).map((task) => (
            <Item
              key={task.id}
              task={task}
              setTasks={setTasks}
            />
          ))}
        </TaskList>
      ) : (
        <NoTask />
      )}

      <CreateTask
        tasks={tasks}
        setTasks={setTasks}
      />

      <Author
        authorLink="https://github.com/ElJoshua08"
        authorName="Joshua"
      />
    </main>
  );
}

export default App;
