import React from "react";
import '../styles/Search.css'
const Search = () => {
  return (
    <div className="formSearch">
      <input className="searchInput" placeholder="Искать здесь..."/>
      <button type="submit">Поиск</button>
    </div>
  );
};

export default Search;
