import React from "react";
import NameSearch from "./NameSearch";


// creates the navigation bar component which contains the nameSearch element
function Nav(handleSearchChange) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light float-center bg-light">
      <div className="search-area center">
        <NameSearch handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  

  );
}
export default Nav;