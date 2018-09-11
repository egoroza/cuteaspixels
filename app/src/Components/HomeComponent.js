import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// images
import PicA from '../img/me_2.jpg';

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
        <p>Hi there! My name is Emily Goroza. I'm a 21 year old computer scientist, creator, student, artist, daughter, mentor, explorer, and friend. 
        Although not necessarily in that order. </p>
        <br />
        <p>I'm currently attending the University of Massachusetts, Amherst,
        where I'm in the process of my fourth and final year at University. I'm currently pursuing both a Bachelor of Science in Computer Science as well as a Bachelor 
        of Science in Mathematics with a concentration in mathematical computing.</p>
        <br />
        <p>I have a passion for <strong>design</strong>, <strong>technology</strong>, and <strong>people</strong>. I think self-care is super important, and I'm super interested 
        in erasing the stigma of women and minorities in STEM related fields. I've always stressed the important of creativity, and I think it's what keeps me sane.</p>
        <br />
        <p>In my free time, I enjoy writing, drawing/painting, long-distance running, hiking, cooking, photography, and cinematography. I 
        play piano, guitar, and percussion. I like to work, I currently have 4 jobs on campus, and I have a sweet little rabbit named Cinnabun.</p>
        <br />
        <p><a href="">Let's talk!</a></p>
        </div>
        <div className="column">
        <Carousel>
                <div>
                    <img src={PicA}/>
                    <p className="legend">Me</p>
                </div>
            </Carousel>
        </div>
      </div>
    );
  }
};
