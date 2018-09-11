import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default class PortfolioComponent extends Component {
  render() {
    return (
      <div className="tile is-ancestor is-vertical">
        <div className="tile">
          <div className="container">
            <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h2><b>Projects</b></h2>
                    </AccordionItemTitle>
                    <AccordionItemBody>


                    <div className="columns">
                      <div className="column">
                        <p><h3><b>Examining HCI: Ethical User Experience Design in Social Media</b></h3> 
                        My thesis project for the Commonwealth Honors College at the University of Massachusetts, Amherst. This study aims to understand if ethical user experience design leads to more satisfying user
                        experiences. We are particularly interested in the ethical design of social media applications, as
                        they are primarily used heavily every day by a majority of today’s population who use the
                        internet daily.</p>
                        <br />
                        <p>
                          <a href="/">Project Home Page</a> <br />
                          <a href="/">Grant + Thesis Proposal</a> <br />
                          <a href="/">DH Thesis Requirements</a>
                        </p>
                        
                        <hr />
                        <p><h3><b>Red Panda Town</b></h3> 
                        Red Panda Town is a small social networking website/demo that I've created from scratch. It is inspired by several social networking websites, notably Facebook. I have coded the entire site from scratch using my knowledge of HTML, 
                        CSS, PHP, and am using mySQL to store database information. This project is deprecated and closed and will no longer be worked on.</p>
                        <br />
                        <p>
                          <a href="https://github.com/egoroza/redpanda" target="_blank">Github Codebase</a> <br />
                        </p>
                      </div>
                      <div className="column">
                        <p><h3><b>MyNugget.io: A virtual pet battledome</b></h3> 
                        Nugget is a virtual battledome where you can care for your very own Nugget, earn coins, shop, and battle against other Nuggets! Uses Django, Materialize CSS, and several other frameworks. 
                        Demonstrates knowledge in UI/UX Design, CSS, JS, relational database concepts, and user authentication/sessions. We are currently in Beta.
                        </p> 
                        <br />
                        <p>
                          <a href="http://mynugget.io/" target="_blank">Project Home Page</a><br />
                          <a href="https://github.com/egoroza/CompSci326TermProject" target="_blank">Github Codebase</a>
                        </p><hr />
                      </div>
                    </div>
                        
                        
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h2><b>Photography</b></h2>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h2><b>Mockups + Graphics</b></h2>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
};
