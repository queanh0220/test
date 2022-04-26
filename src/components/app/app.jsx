import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import "./app.css";

export class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="app">
        {children}
        <Outlet />
      </div>
    );
  }
}
