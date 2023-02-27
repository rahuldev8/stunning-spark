import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faGooglePlusG
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h2 class="social_title">Social Follo</h2>

      <a href="https://github.com/Dev-jr-8" className="github social" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/rahul-sundararaj/" className="linkedin social" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="mailto:devhereforcoding@gmail.com" className="google social" target="_blank">
      <FontAwesomeIcon icon={faGooglePlusG} size="2x" />
      </a>
      
      <p className="credit">Copyright © <a href="https://dev-jr-8.github.io/Rahul-Sundararaj/" target="_blank">Rahul Sundararaj</a> <span className="since">since</span> 2022</p>

    </div>

  );
}