import React, { Component } from 'react';

export default class ConnectComponent extends Component {
  render() {
    return (
      <div className="tile is-ancestor is-vertical">
        <div className="tile">
          <div className="container has-text-centered">
            <p>Please don't hesitate to reach out to me regarding any matter! I love speaking with all kinds of humans.</p>
            <br />
            <strong>Professional Inquiries </strong> <a href="mailto:egoroza@umass.edu">egoroza@umass.edu</a><br />
            <strong>LinkedIn </strong><a href="http://linkedin.com/in/egoroza">www.linkedin.com/in/egoroza</a>
          </div>
        </div>
      </div>
    );
  }
};
