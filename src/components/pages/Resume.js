import React from "react";
import { skills } from "../../data";

export default function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Ryan Lee</h2>
          <ul>
            <li>
              Entry-level web developer with high proficiency in full-stack
              development, but passionate for responsive web design.
            </li>
          </ul>

          <div className="row">
            <div class="mt-5">
              <a href="https://www.linkedin.com/in/ryan-lee-1a8715207/">
                <img
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div class="mt-5">
              <a href="https://github.com/Damaximum">
                <img
                  src="https://img.icons8.com/color/48/000000/github--v1.png"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>

          <a
            href="https://docs.google.com/document/d/1R-DpnDTNut-Ggw2FyyneGZS82ZnMdLDkvOzpd-s3ly4/edit?usp=sharing"
            class="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <div className="card" style={{ width: 400 }}>
            <ul className="list-group list-group-flush">
              {skills.map((skill) => (
                <li className="list-group-item" key={skill}>
                  <span className="">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
