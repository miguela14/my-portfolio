import React from "react";
import "./About.css";
import myImage from "../assets/images/IMG_0045.JPG";

export const About = () => {
  return (
    <section className="About">
      <figure className="picture">
        <img src={myImage} alt="My Wife and I" />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>
            Future Developer <span>& Designer</span>
          </h5>
          <p>
            Im currently working a fulltime job, as well as attending a coding
            bootcamp at the University of Minnesota. I am very motivated to
            become a great web developer who can provide a clean code with
            amazing designs. I am looking forward in working on future projects
            for clients that will not only benifit their needs but also be
            accessible to all users, regardless of the device they may be using.
          </p>
        </div>
      </figure>
    </section>
  );
};
