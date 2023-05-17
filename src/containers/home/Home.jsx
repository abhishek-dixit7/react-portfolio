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
          <a href="https://twitter.com/abhishekdixit72">
            <SlSocialTwitter />
          </a>
          <a href="https://www.instagram.com/abhishek.dixit0">
            <SlSocialInstagram />
          </a>
          <a href="https://github.com/abhishek-dixit7">
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-dixit-34b76a151/">
            <SiLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
