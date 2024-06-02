import './App.css';
import { useState } from 'react';
import { Author } from './components/Author/Author';
import { NoTask } from './components/NoTask/NoTask';
import { CreateTask } from './components/CreateTask/CreateTask';
import { Logo } from './components/Logo/Logo';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = window.localStorage.getItem('tasks_v1');
    if (tasksFromStorage) return JSON.parse(tasksFromStorage);
    return [];
  });
  const [search, setSearch] = useState('');

  const saveToStorage = () => {
    console.log('Saving to storage');
    window.localStorage.setItem('tasks_v1', JSON.stringify(tasks));
  };

  saveToStorage();

  return (
    <main>
      <Logo />

      {/* TODO: Create the search and filter bars */}
      <SearchBar search={search} SetSearch={setSearch} />

      {/* TODO: Create the tasks list and create the component for when no tasks are created */}
      {tasks.length > 0 ? (
        <>
          {tasks.map((task) => (
            <div key={task.id}>
              <h2>{task.name}</h2>
              <p>{task.description}</p>
            </div>
          ))}
        </>
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
