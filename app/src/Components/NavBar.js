import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    }
  }

  render () {
    return (
<section className="hero">
  <div className="hero-body">
    <div className="container">

    <nav className="level">
      <p className="level-item has-text-centered">
        <a className="link is-info">About</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Resume</a>
      </p>
      <p className="level-item has-text-centered mytitle">
        EMILY GOROZA
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Portfolio</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Contact</a>
      </p>
    </nav>


    </div>
  </div>
</section>
    );
  }
};
