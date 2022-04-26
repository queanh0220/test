import React from "react";
import "./movies.css";
import { connect } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { movies } from "../../movies";
import { fetchMoviesActionCreator } from "../../redux/moviesReducer";
class Movies extends React.Component {
  componentDidMount() {
    this.props.fetchMovies(movies);
  }

  render() {
    const { children, movies = [], params = {} } = this.props;
    console.log(params.id);
    return (
      <div className="movies">
        <div className={params.id ? "listHidden" : "list"}>
          {movies.map((movie, index) => (
            <Link key={index} to={`/movies/${index + 1}`} className="link">
              <div
                className="movie-item"
                style={{ backgroundImage: `url(${movie.cover})` }}
              />
            </Link>
          ))}
        </div>
        {children}
        <Outlet />
      </div>
    );
  }
}

export default connect(
  ({ movies }) => ({
    movies: movies.all,
  }),
  {
    fetchMovies: fetchMoviesActionCreator,
  }
)(Movies);
