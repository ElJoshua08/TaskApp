import { FaMagnifyingGlass } from 'react-icons/fa6';
import './SearchBar.css';

const SearchBar = ({ search, SetSearch }) => {
  return (
    <div className="searchBar">
      <FaMagnifyingGlass className="searchIcon" />

      <input
        type="text"
        placeholder="Search for a task"
        className="searchInput"
        value={search}
        onChange={(e) => SetSearch(e.target.value)}
      />
    </div>
  );
};

export { SearchBar };
