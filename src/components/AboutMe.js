import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
          Currently in a Software/QA Engineer role at Verizon Connect with strong knowledge of Object Orientated programming and computer applications. Experience in the development of various .Net, Java, Typescript and SQL related programs.
           My aim is to be proficient in different languages, architectures, frameworks and practices that would allow me to implement them in any scenario or project in the most efficient way possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
