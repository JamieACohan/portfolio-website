import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Software Engineer</h1>
                <Typed
                    className="typed-text"
                    strings={["Backend Development", "Web Design", "Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contacts" className="btn-contact-me">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
