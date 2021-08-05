import React from "react";
import { profileJpg } from "../../images";

const styles = {
  image: {
    maxWidth: 300,
  },
};

export default function About() {
  return (
    <section className="container">
      <h2 class="top-title">Ryan Lee</h2>
      <hr></hr>
      <div className="row">
        <div className="col-xs-12 col-sm-5">
          <img
            class="mb-5 img-responsive img"
            src={profileJpg}
            alt="Ryan Lee"
            style={styles.image}
          />
        </div>
        <div className="col-xs-12 col-sm-7">
          <p>
            Entry-level web developer with high proficiency in full-stack
            development, but passionate for responsive web design.
          </p>
          <p>
            A firm believer in the mobile-first approach and delivering a great
            UX. Known to be very thorough, especially with fulfilling
            expectations of acceptance criteria. Strengths in flexible thinking,
            communication, and organizing projects for a smoother workflow.
            Recently developed a web application in a group of 5 using agile
            development.
          </p>
          <p>
            Certificate in Full Stack Web Development and a Bachelor's in
            Linguistics from University of California, San Diego.
          </p>
        </div>
      </div>
    </section>
  );
}
