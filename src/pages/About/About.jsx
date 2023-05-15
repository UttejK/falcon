import "./About.scss";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="about-description">
          <div className="about-container">
            <h1>
              Welcome to Fast Autonomous Light-Weight Combat Operations Network
            </h1>
            <p>
              This project involves using React Three Fiber to create an
              interactive showcase of surveillance and combat drones. I've
              always been interested in the intersection of engineering and
              technology, and this project allowed me to merge my skills in
              programming and 3D design to create an engaging and immersive
              experience. I'm excited to continue exploring the possibilities of
              emerging technologies and their applications in engineering and
              design.
            </p>
          </div>
          <div className="social-icons">
            <ul>
              <li>
                <a href="mailto:uttejkuruba@gmail.com" target="_blank">
                  Gmail
                  <FiMail />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/uttej-kuruma"
                  target="_blank"
                >
                  LinkedIn
                  <FiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-parent">
          <form
            className="form-container"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <span>Contact Me</span>
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />{" "}
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Write to me"
                required
              ></textarea>{" "}
            </div>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
