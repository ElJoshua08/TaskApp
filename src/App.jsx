import './App.css';
import { useState } from 'react';
import { Author } from './components/Author/Author';
import { NoTask } from './components/NoTask/NoTask';
import { CreateTask } from './components/CreateTask/CreateTask';

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = window.localStorage.getItem('tasks_v1');
    if (tasksFromStorage) return JSON.parse(tasksFromStorage);
    return [];
  });

  const saveToStorage = () => {
    console.log('Saving to storage');
    window.localStorage.setItem('tasks_v1', JSON.stringify(tasks));
  };


  saveToStorage();

  return (
    <main>
      {/* TODO: Create the search and filter bars */} 

      {/* TODO: Create the tasks list and create the component for when no tasks are created */}
      {tasks.length > 0 ? (
        <>
          <h1>Some tasks are created</h1>
        </>
      ) : (
        <NoTask />
      )}

      <CreateTask tasks={tasks} setTasks={setTasks} />

      <Author
        authorLink="https://github.com/ElJoshua08"
        authorName="Joshua"
      />
    </main>
  );
}

export default App;
