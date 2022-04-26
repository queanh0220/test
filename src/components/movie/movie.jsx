import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieActionCreator } from "../../redux/moviesReducer.jsx";
import "./movie.css";
import { movies } from "../../movies.js";
import { connect } from "react-redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class Movie extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  componentDidUpdate(next) {
    if (this.props.match.params.id !== next.match.params.id) {
      this.props.fetchMovie(next.match.params.id);
    }
  }

  render() {
    const {
      movie = {
        starring: [],
      },
    } = this.props;
    console.log(this.props);
    return (
      <div
        className="movie"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`,
        }}
      >
        <div
          className="cover"
          style={{ backgroundImage: `url(${movie.cover})` }}
        />
        <div className="description">
          <div className="title">{movie.title}</div>
          <div className="year">{movie.year}</div>
          <div className="starring">
            {movie.starring &&
              movie.starring.map((actor = {}, index) => (
                <div key={index} className="actor">
                  {actor.name}
                </div>
              ))}
          </div>
        </div>
        <Link className="closeButton" to="/movies">
          ←
        </Link>
      </div>
    );
  }
}

export default connect(
  ({ movies }) => ({
    movie: movies.current,
  }),
  {
    fetchMovie: fetchMovieActionCreator,
  }
)(withRouter(Movie));
