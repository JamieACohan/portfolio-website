import React from 'react';
import netflix from "../images/netflix.jpeg";
import cityGuide from "../images/city-guide-app.png";
import mernBlog from "../images/mern-blog.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.jpg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PocketCoachCarousel from "./PocketCoachCarousel";
//import Carousel from 'react-bootstrap/Carousel'
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

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

//   export const handlers = () => (
//     <Carousel onClickThumb={action('click thumb')} onClickItem={action('click item')} onChange={action('change')}>
//         {baseChildren.props.children}
//     </Carousel>
// );

// export const withCustomStatusArrowsAndIndicators = () => {
//     const arrowStyles = {
//         position: 'absolute',
//         zIndex: 2,
//         top: 'calc(50% - 15px)',
//         width: 30,
//         height: 30,
//         cursor: 'pointer',
//     };

//     const indicatorStyles = {
//         background: '#fff',
//         width: 8,
//         height: 8,
//         display: 'inline-block',
//         margin: '0 8px',
//     };

//   };

const arrowStyles  = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
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
          <div class="col-12 col-md-6 col-lg-6" >
            <div class="portfolioCard">
              <div className="cardCarousel">
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={false}
                  interval={3000}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                            <FaAngleLeft></FaAngleLeft>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                            <FaAngleRight></FaAngleRight>
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  if (isSelected) {
                      return (
                          <li
                              style={{ ...indicatorStyles, background: '#000' }}
                              aria-label={`Selected: ${label} ${index + 1}`}
                              title={`Selected: ${label} ${index + 1}`}
                          />
                      );
                  }
                  return (
                      <li
                          style={indicatorStyles}
                          onClick={onClickHandler}
                          onKeyDown={onClickHandler}
                          value={index}
                          key={index}
                          role="button"
                          tabIndex={0}
                          title={`${label} ${index + 1}`}
                          aria-label={`${label} ${index + 1}`}
                      />
                  );
              }}
                >
                  <>
                    <img src={avatar1} alt="John Doe 1" />
                  </>
                  <>
                    <img src={avatar2} alt="Jane Doe 2" />
                  </>
                  <>
                    <img src={avatar3} alt="John Doe 3" />
                  </>
                  <>
                    <img src={avatar4} alt="John Doe 4" />
                  </>
                </Carousel>
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
          <div class="col-12 col-md-6 col-lg-6">
            <div class="portfolioCard">
            <div className="cardCarousel">
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={false}
                  interval={3000}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                            <FaAngleLeft></FaAngleLeft>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                            <FaAngleRight></FaAngleRight>
                        </button>
                    )
                }
                >
                  <>
                    <img src={avatar1} alt="John Doe 1" />
                  </>
                  <>
                    <img src={avatar2} alt="Jane Doe 2" />
                  </>
                  <>
                    <img src={avatar3} alt="John Doe 3" />
                  </>
                  <>
                    <img src={avatar4} alt="John Doe 4" />
                  </>
                </Carousel>
              </div>
              <div class="card-body">
                <h5 class="card-title">TC Events</h5>
                <p>A web application called TC Events that sells tickets for various events.</p>
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
