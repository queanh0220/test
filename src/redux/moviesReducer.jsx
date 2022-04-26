const FETCH_MOVIES = "movies/FETCH_MOVIES";
const FETCH_MOVIE = "movies/FETCH_MOVIE";

export const fetchMoviesActionCreator = (movies) => ({
  type: FETCH_MOVIES,
  movies,
});

export const fetchMovieActionCreator = (index) => ({
  type: FETCH_MOVIE,
  index,
});

export const moviesReducer = (state = { all: [], current: {} }, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        all: action.movies,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        current: state.all[action.index - 1],
      };

    default:
      return state;
  }
};
