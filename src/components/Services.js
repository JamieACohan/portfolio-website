import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FaGithub, AiFillHtml5 } from 'react-icons/fa';
import { Icon } from '@iconify/react';

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <h3>Back-End Technology</h3>
              <div className="circle"><img className="icon" src={"https://icongr.am/devicon/python-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
              <div className="circle"><img className="icon" src={"https://icongr.am/devicon/java-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
              <div className="circle"><img className="icon" src={"https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
              <div className="circle"><img className="icon" src={"https://icongr.am/devicon/csharp-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
              <div className="circle"><img className="icon" src={"https://icongr.am/devicon/mysql-original-wordmark.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="box">
            <h3>Front-End Technology</h3>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/html5-plain.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="box">
            <h3>Other</h3>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/git-original-wordmark.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/amazonwebservices-plain-wordmark.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            <div className="circle"><Icon className="icon" icon="simple-icons:jenkins" color="black" /></div>
            <div className="circle"><Icon className="icon" icon="simple-icons:octopusdeploy" color="dodgerblue" /></div>
            <div className="circle"><Icon className="icon" icon="simple-icons:grafana" color="black" /></div>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/redis-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            <div className="circle"><img className="icon" src={"https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor"} size="2x" alt="author..." /></div>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>

  )
}

export default Services;
