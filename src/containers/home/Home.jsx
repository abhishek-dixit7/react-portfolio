import React from "react";
import "./home.css";
import profile from "../../assets/profile.jpg";
import { SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Home = () => {
  return (
    <div className="portfolio__home section__padding">
      <div className="portfolio__home-image">
        <img src={profile} alt="profile" />
      </div>
      <div className="portfolio__home-content">
        <h1>Abhishek Dixit</h1>
        <h4>Software Developer</h4>
        <ul>
          <li>Developer</li>
          <li>JS, C#, React and Node</li>
          <li>Gamer</li>
          <li>Quick Learner</li>
        </ul>
        <div className="portfolio__home-content-links">
          <a href="https://twitter.com/your_username">
            <SlSocialTwitter />
          </a>
          <a href="https://twitter.com/your_username">
            <SlSocialInstagram />
          </a>
          <a href="https://twitter.com/your_username">
            <SiGithub />
          </a>
          <a href="https://twitter.com/your_username">
            <SiLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
