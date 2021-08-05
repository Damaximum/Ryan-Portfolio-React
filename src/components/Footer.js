import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <div className="container">
        <div className="row ">
          <a href="https://github.com/Damaximum" className="mx-auto">
            <img
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="Github"
              className="icon"
            />
          </a>
          <a
            href="https://damaximum.github.io/Ryan-Portfolio/"
            className="mx-auto"
          >
            <img
              src="https://img.icons8.com/ultraviolet/50/000000/opened-folder.png"
              alt="Original Portfolio"
              className="icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-lee-1a8715207/"
            className="mx-auto"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
