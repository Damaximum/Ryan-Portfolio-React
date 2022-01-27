import React from "react";

export default function Contact() {
  return (
    <section className="container">
      {/* <h2 data-testid="h1tag" className="top-title">
        Contact Form
      </h2>
      <hr></hr>
      <form class="justify-content-center" id="contact-form">
        <div class="mt-5">
          <label htmlFor="name">Name:</label>
          <input class="form-control" type="text" name="name" />
        </div>
        <div class="mt-5">
          <label htmlFor="email">Email Address:</label>
          <input class="form-control" type="email" name="email" />
        </div>
        <div class="mt-5">
          <label htmlFor="message">Message:</label>
          <textarea class="form-control" name="message" rows="7" />
        </div>

        <div class="mt-5 mb-5">
          <button
            data-testid="button"
            class="btn btn-outline-dark "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form> */}
      <h2 data-testid="h1tag" className="top-title">
        Contact Information
      </h2>
      <hr></hr>
      <div class="justify-content-center" id="contact-form">
        <div class="mt-5">
          <h4 htmlFor="name">Phone Number</h4>
          <h6>213) 392 - 2227</h6>
        </div>
        <div class="mt-5">
          <h4 htmlFor="email">
            <br />
            Email Address:
          </h4>
          <h6
          // onClick={() => {
          //   navigator.clipboard.writeText(this.state.textToCopy);
          // }}
          >
            <br />
            ryanlee059@gmail.com
          </h6>
        </div>
        <div class="mt-5">
          <h4 htmlFor="message">GitHub</h4>
          <h6>
            <br />
            <a href="https://github.com/Damaximum">GitHub Profile</a>
          </h6>
        </div>
        <div class="mt-5">
          <h4 htmlFor="message">LinkedIn</h4>
          <h6>
            <br />
            <a href="https://www.linkedin.com/in/ryan-lee-1a8715207/">
              LinkedIn Profile
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
}
