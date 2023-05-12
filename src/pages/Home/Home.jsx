import "./home.scss";

import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

function Home() {
  return (
    <section className="background-image home">
      <div className="home-intro">
        <h3>INTRODUCING</h3>
        <h1>F.A.L.C.O.N V1</h1>
        <p>State of the art support Drone</p>
        <Link className="center" to="/explore">
          Learn More <HiArrowRight />{" "}
        </Link>
      </div>
    </section>
  );
}

export default Home;
