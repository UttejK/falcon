import "./Home.scss";

import clsx from "clsx";
import { HiArrowRight } from "react-icons/hi2";
import RenderCanvas from "../../components/RenderCanvas/RenderCanvas";
import Drone2 from "../../components/Drone/Drone2";
import CombatDroneAutoSmooth from "../../components/Drone/CombatDroneAutoSmooth";
import CDF from "../../components/Drone/CDF";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

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
      <div
        className={clsx([
          "home-layout-canvas",
          hovered === 1 && "home-container-hover--1",
          hovered === 2 && "home-container-hover--2",
          hovered === 3 && "home-container-hover--3",
        ])}
      >
        <div
          onClick={() => {
            navigate("/explore/1");
          }}
          onMouseEnter={() => {
            setHovered(1);
          }}
          onMouseLeave={() => {
            setHovered(undefined);
          }}
          className="home-container-1"
        >
          <RenderCanvas hasOrbitControls>
            <CombatDroneAutoSmooth />{" "}
          </RenderCanvas>
        </div>
        <div
          onClick={() => {
            navigate("/explore/2");
          }}
          onMouseEnter={() => {
            setHovered(2);
          }}
          onMouseLeave={() => {
            setHovered(undefined);
          }}
          className="home-container-2"
        >
          <RenderCanvas hasOrbitControls>
            <Drone2 />
          </RenderCanvas>
        </div>
        <div
          onClick={() => {
            navigate("/explore/3");
          }}
          onMouseEnter={() => {
            setHovered(3);
          }}
          onMouseLeave={() => {
            setHovered(undefined);
          }}
          className="home-container-3"
        >
          <RenderCanvas hasOrbitControls>
            <CDF />
          </RenderCanvas>
        </div>
      </div>
    </section>
  );
}

export default Home;