import { FaMagnifyingGlass } from 'react-icons/fa6';
import './TodoSearch.css';

const TodoSearch = ({ search, setSearch }) => {
  return (
    <div className="todo-search">
      <FaMagnifyingGlass className="todo-search-icon" />
      <input
        onInput={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search for a task!"
        value={search}
      />
    </div>
  );
};

export default TodoSearch;
