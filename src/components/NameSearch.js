import React from "react";

//search by name feild component
const NameSearch = (handleSearchChange) => {

  
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by name"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
        <button className="btn my-2 my-sm-0 btn-secondary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default NameSearch;