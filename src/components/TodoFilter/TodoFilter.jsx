import { useState } from 'react';
import './TodoFilter.css';

const TodoFilter = ({ id, filterName, activeFilters, setActiveFilters }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const newIsActive = !isActive
    setIsActive(newIsActive)

    const newActiveFilter = {...activeFilters};
    newActiveFilter[id] = newIsActive


    setActiveFilters(newActiveFilter)
  }

  return (
    <div onClick={handleClick} className={`todo-filter ${isActive ? 'is-active' : ''}`}>
      <p> {filterName} </p>
    </div>
  );
};

export default TodoFilter;
