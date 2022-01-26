import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="box">
            <h3>Back-End Technology</h3>
            <div className="circle"><FaGithub className="icon"></FaGithub></div>
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="box">
            <h3>Front-End Technology</h3>
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="box">
            <h3>Other</h3>
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>

  )
}

export default Services;
