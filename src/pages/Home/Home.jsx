import "./Home.scss";

import { HiArrowRight } from "react-icons/hi2";
import RenderCanvas from "../../components/RenderCanvas/RenderCanvas";
import Drone2 from "../../components/Drone/Drone2";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      {/* <div className="home-intro">
        <h3>INTRODUCING</h3>
        <h1>F.A.L.C.O.N</h1>
        <p>State of the art support Drones</p>
        <a
          className="home-link-center"
          href="/explore"
          onClick={(e) => {
            e.preventDefault();
            navigate("/explore");
          }}
        >
          Learn More <HiArrowRight />{" "}
        </a>
      </div> */}
      <div className="home-layout-canvas">
        <div className="home-container-1">
          <RenderCanvas hasOrbitControls>
            <Drone2 />
          </RenderCanvas>
        </div>
        <div className="home-container-2">
          <RenderCanvas hasOrbitControls>
            <Drone2 />
          </RenderCanvas>
        </div>
        <div className="home-container-3">
          <RenderCanvas hasOrbitControls>
            <Drone2 />
          </RenderCanvas>
        </div>
      </div>
    </section>
  );
}

export default Home;
