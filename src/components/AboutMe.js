import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
          .Net Developer at Verizon Connect with strong knowledge of Object Orientated programming and computer applications. Experience in the development of various Java, C#, Typescript and SQL related programs. 
          My overall aim is to constantly keep learning and expanding my skillset while adapting the best practices that will help me work in the most efficient way possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
