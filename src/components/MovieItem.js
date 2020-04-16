import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./MovieItem.css";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false,
    };
  }

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch,
    } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="md-0 movie-rating">
              Rating: <b>{movie.vote_average}</b>
            </p>
            {this.state.willWatch ? (
              <span
                className="like-icon like-icon-active"
                onClick={() => {
                  this.setState({ willWatch: false });
                  removeMovieFromWillWatch(movie);
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </span>
            ) : (
              <span
                className="like-icon"
                onClick={() => {
                  this.setState({ willWatch: true });
                  addMovieToWillWatch(movie);
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </span>
            )}
          </div>
          <div className="row">
            <span
              className="delete-icon"
              onClick={() => {
                removeMovie(movie);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieItem;
