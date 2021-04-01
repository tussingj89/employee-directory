import React from "react";
import SearchBox from "./SearchBox.js";
// imports in the search by name

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="search-area col-4">
          {/* calls in the search by name component */}
          <SearchBox handleSearchChange={handleSearchChange} />
        </div>
      </div>
    </nav>
  );
}
export default Nav;