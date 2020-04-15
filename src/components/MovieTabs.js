import React from "react";

import "./MovieTabs.css";

const MovieTabs = (props) => {
  const handleClick = (value) => (event) => updateSortBy(value);
  const getClassLing = (value) => {
    return `nav-link ${sort_by === value ? "active" : ""}`;
  };
  const { sort_by, updateSortBy } = props;
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item" key="popularity.desc">
        <div
          className={getClassLing("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item" key="revenue.desc">
        <div
          className={getClassLing("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item" key="vote_average.desc">
        <div
          className={getClassLing("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
