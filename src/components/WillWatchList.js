import React from "react";
import "./WillWatchList.css";

const WillWatchList = (props) => {
  const { movie } = props;
  return <span className="will-movie">{movie.title}</span>;
};

export default WillWatchList;
