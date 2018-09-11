import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import HomeComponent from './Components/HomeComponent';
import PortfolioComponent from './Components/PortfolioComponent';
import ResumeComponent from './Components/ResumeComponent';
import ConnectComponent from './Components/ConnectComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight">
          <NavBar active="home"/>
                <div className="hero-body">
                  <div className="container">
                    <Route exact path={`${this.props.match.url}`} component={HomeComponent} />
                    <Route path={`${this.props.match.url}portfolio`} component={PortfolioComponent} />
                    <Route path={`${this.props.match.url}resume`} component={ResumeComponent} />
                    <Route path={`${this.props.match.url}connect`} component={ConnectComponent} />
                  </div>
                </div>
          <div className="hero-foot">
            <div className="container">
              <div className="content has-text-centered">
                (C) CuteAsPixels.com 2018.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
