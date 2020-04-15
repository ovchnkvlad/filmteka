import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { moviesData } from "./moviesData";
import MovieItem from "./components/MovieItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
    };
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies,
    });
  };

  addMovieToWillWatch = (movie) => {
    const updateMovieWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({ moviesWillWatch: updateMovieWillWatch });
  };

  removeMovieFromWillWatch = (movie) => {
    const updateMovieWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({
      moviesWillWatch: updateMovieWillWatch,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map((movie) => (
                <div className="col-6 mb-4">
                  <MovieItem
                    key={movie.id}
                    movie={movie}
                    removeMovie={this.removeMovie}
                    addMovieToWillWatch={this.addMovieToWillWatch}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-3">
            <p>will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
