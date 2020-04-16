import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_URL, API_KEY_3 } from "./utils/api";
import MovieItem from "./components/MovieItem";
import MovieTabs from "./components/MovieTabs";
import WillWatchList from "./components/WillWatchList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
    };
    console.log("constructor");
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies,
    });
  };
  updateSortBy = (value) => {
    this.setState({
      sort_by: value,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.getMovies();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      console.log("componentDidUpdate");
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
        });
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
    console.log("render_1", this);
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-12 mb-4 mt-4">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => (
                <div className="col-4 mb-4">
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
          <div className="col-3 mt-4">
            <p className="like-movie">
              will watch:{" "}
              <span className="like-count">
                {this.state.moviesWillWatch.length}
              </span>
            </p>
            {this.state.moviesWillWatch.map((movie) => (
              <WillWatchList movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
