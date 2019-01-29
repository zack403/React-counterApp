import React from "react";

const Navbar = ({totalCounters}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <a className="navbar-brand" >
          Counters
          <span className=" ml-2 badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
