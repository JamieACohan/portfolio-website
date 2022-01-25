import React from 'react';
// FONTAWESOME IMPORTS
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
// ICON IMPORTS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
//Image slider
import ImageSlider from "./ImageSlider";
import { SliderData } from './SliderData';
import ImageSliderTC from "./ImageSliderTC";
import { SliderDataTC } from './SliderDataTC';


const Portfolio = () => {
  // TC Events
  const openPopupboxTCEvents = () => {
    const content = (
<>
      <b>Functionaility:</b>
       <ul>
          <li>Worked as part of a 3-person group to develop a web application called TC Events that sells tickets for various events. </li>
          <li>This project involved all stages of the software development life cycle from the user requirements, to use case diagram, to class diagram and right through to developing and testing the application. </li>
          <li>The application has a fully functioning checkout which used Stripe to take customer payments. </li>
        </ul>
        <p><b>Technologies & Tools Used:</b> Java Play!, Java Persistence language, HTML/Scala, CSS, JavaScript, jQuery , VirtualBox, Visio, Rational Rhapsody, IntelliJ IDEA</p>
      </>
    )
    PopupboxManager.open({ content })
  }

  // Pocket Coach App
  const openPopupboxPocketCoach = () => {
    const content = (
      <>
      <b>Functionaility:</b>
       <ul>
          <li>A cross platform mobile application build using Ionic framework to make managing clients easier for personal trainers and vice versa. </li>
          <li>Utilized Google Cron jobs to provide subscription-based access to resources and implemented Stripe for payment. </li>
          <li>Firestore was used as the back-end to host the application while also taking advantage of the Security and Cloud Messaging features that it offered and angular was used to design the front-end </li>
          <li>Other features included Calorie Counting which made use of the NutritionX API for food Database, News Feed, Instant Messaging and Goal Tracking  </li>
        </ul>
        <p><b>Technologies & Tools Used:</b> Ionic Framework, Typescript, AngularJS, Firestore Database, Firebase Cloud Messaging, Firebase Authentication, Firebase Cloud Functions, HTML, CSS, Jenkins, NutritionX API, Google Cron Jobs (Task Schedule)</p>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfig = {
    titleBar: {
      enable: true,
      text: "Tech Stack & Functionaility"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  
const arrowStyles  = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 40,
  height: 40,
  cursor: 'pointer',
  backgroundColor: '#666666',
  color: 'white',
  fontSize: '25px',
border: 'none',
borderRadius: "50%"
};

const indicatorStyles  = {
  background: '#fff',
  width: 8,
  height: 8,
  display: 'inline-block',
  margin: '0 8px',
};

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
      <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12" >
            <div class="portfolioCard">
              <div className="cardCarousel">
              <ImageSlider slides={SliderData} />
              </div>
              <div class="card-body">
                <h5 class="card-title">Pocket Coach</h5>
                <p>Calorie Tracking & Personal Trainer App.</p>
                <b><FaInfo></FaInfo></b> <a className="hyper-link" onClick={openPopupboxPocketCoach}>Tech Stack & Functionaility</a>
                <br></br>
                <div id='links'>
                <button class="button button4" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}><b><FaLink></FaLink> Demo</b></button>
                <button class="button button4" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}><b><FaGithub></FaGithub> GitHub</b></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-12">
            <div class="portfolioCard">
            <div className="cardCarousel">
            <ImageSliderTC slides={SliderDataTC} />
              </div>
              <div class="card-body">
                <h5 class="card-title">TC Events</h5>
                <p>A Ticket Selling App</p>
                <b><FaInfo></FaInfo></b> <a className="hyper-link" onClick={openPopupboxTCEvents}>Tech Stack & Functionaility</a>
                <div id='links'>
                <button class="button button4" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}><b><FaLink></FaLink> Demo</b></button>
                <button class="button button4" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}><b><FaGithub></FaGithub> GitHub</b></button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  )
}

export default Portfolio;
