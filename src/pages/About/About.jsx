import "./About.scss";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="about-description">
          <h1>
            Welcome to Fast Autonomous Light-Weight Combat Operations Network
          </h1>
          <p>
            This project involves using React Three Fiber to create an
            interactive showcase of surveillance and combat drones. I've always
            been interested in the intersection of engineering and technology,
            and this project allowed me to merge my skills in programming and 3D
            design to create an engaging and immersive experience. I'm excited
            to continue exploring the possibilities of emerging technologies and
            their applications in engineering and design.
          </p>
        </div>
      </section>
      <section id="contact">
        <div>
          <form
            className="form-container"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />

            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              placeholder="Write to me"
              required
            ></textarea>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            <button type="submit">Submit Form</button>
          </form>
        </div>
      </section>
    </>
  );
}
