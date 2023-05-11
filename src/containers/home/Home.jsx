import React from "react";
import "./home.css";
import profile from "../../assets/profile.jpg";

const Home = () => {
  return (
    <div className="portfolio__home section__padding">
      <div className="portfolio__home-image">
        <img src={profile} alt="profile" />
        <h1>Abhishek Dixit</h1>
      </div>
      <div className="portfolio__home-content">
        <ul>
          <li>Developer</li>
          <li>JS, C#, React and Node</li>
          <li>Gamer</li>
          <li>Quick Learner</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
