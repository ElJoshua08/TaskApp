import './App.css';
import { useState } from 'react';
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
  const [filters, setFilters] = useState({
    completed: false,
    incomplete: false,
    all: true,
  });

  const saveToStorage = () => {
    window.localStorage.setItem('tasks_v1', JSON.stringify(tasks));
  };

  saveToStorage();

  const applyFilters = (task, filters) => {
    for (let filter in filters) {
      // Skip the filter if it is set to false
      if (!filters[filter]) continue;

      // Apply filter conditions
      switch (filter) {
        case 'completed':
          if (filters.completed && !task.completed) return false;
          break;
        case 'incompleted':
          if (filters.incompleted && task.completed) return false;
          break;
        case 'all':
          // 'all' filter, always include the task
          break;
        default:
          // If there are more filters added, check their conditions here
          if (filters[filter] !== task[filter]) return false;
      }
    }
    return true;
  };

  const filteredTasks = tasks
    .filter((task) => task.name.toLowerCase().includes(search.toLowerCase()))
    .filter((task) => applyFilters(task, filters));


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
          {filteredTasks.map((task) => (
            < Item key={task.id} task={task} setTasks={setTasks} />
          ))}
        </ TaskList>
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
