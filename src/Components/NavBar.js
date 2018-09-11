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
        <Link to="/" className="link is-info">About</Link>
      </p>
      <p className="level-item has-text-centered">
        <Link to="/resume" className="link is-info">Resume</Link>
      </p>
      <p className="level-item has-text-centered mytitle">
        EMILY GOROZA
      </p>
      <p className="level-item has-text-centered">
        <Link to="/portfolio" className="link is-info">Portfolio</Link>
      </p>
      <p className="level-item has-text-centered">
        <Link to="/connect" className="link is-info">Contact</Link>
      </p>
    </nav>


    </div>
  </div>
</section>
    );
  }
};
