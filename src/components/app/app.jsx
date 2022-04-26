import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./app.css";

export class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app">
        <Link to="/movies">
          <button>Movies</button>
        </Link>
        {children}
        <Outlet />
      </div>
    );
  }
}
