import React, { Component } from 'react';
import moment from 'moment';

export default class PortfolioComponent extends Component {
  render() {
    return (
      <div className="tile is-ancestor is-vertical">
        <div className="tile">
          <div className="container has-text-centered">
            Portfolio Component rendered here
          </div>
        </div>
      </div>
    );
  }
};
