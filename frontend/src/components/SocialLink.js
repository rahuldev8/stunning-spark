import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faGooglePlusG,
    faRavelry
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="main-footer">
    <div className="container">

      <div className="row">

      <p className="socail_icons">
      <a href="https://github.com/Dev-jr-8" className="github social" target="_blank"  rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/rahul-sundararaj/" className="linkedin social" target="_blank"  rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="mailto:devhereforcoding@gmail.com" className="google social" target="_blank"  rel="noreferrer">
      <FontAwesomeIcon icon={faGooglePlusG} size="2x" />
      </a>

      <a href="https://dev-jr-8.github.io/Rahul-Sundararaj/" className="portfolio social" target="_blank"  rel="noreferrer">
      <FontAwesomeIcon icon={faRavelry} size="2x" />
      </a>
      </p>  

        <p className="col-sm">
          &copy;{new Date().getFullYear()} <a href="https://dev-jr-8.github.io/Rahul-Sundararaj/" className="footer_name social" target="_blank" >Rahul Sundararaj</a> 
          Made with ❤️ and care....
        </p>
        
      </div>
    </div>
  </div>

  );
}