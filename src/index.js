import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App } from "./components/app/app";
import Movie from "./components/movie/movie";
import Movies from "./components/movies/movies";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/test/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/movies" element={<Movies />}>
            <Route path=":id" element={<Movie />} />
          </Route>
          <Route
            path="/"
            element={
              <Link to="/movies">
                <button>Movies</button>
              </Link>
            }
            y
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
