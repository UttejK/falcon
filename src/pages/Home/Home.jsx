import "./Home.scss";

import clsx from "clsx";
import { HiArrowRight } from "react-icons/hi2";
import RenderCanvas from "../../components/RenderCanvas/RenderCanvas";
import Drone2 from "../../components/Drone/Drone";
import CombatDroneAutoSmooth from "../../components/Drone/CombatDroneAutoSmooth";
import CDF from "../../components/Drone/CDF";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

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
          onMouseEnter={() => {
            console.log("Enter 1");
            setHovered(1);
          }}
          onMouseLeave={(e) => {
            setHovered(undefined);
          }}
          className="home-container-1"
        >
          <RenderCanvas>
            <CombatDroneAutoSmooth />
            <Html>
              <button
                onClick={() => {
                  navigate("/explore/1");
                }}
                onMouseEnter={(e) => {
                  setHovered(1);
                }}
              >
                Click HERE
              </button>
            </Html>
          </RenderCanvas>
        </div>
        <div
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
            <Html>
              <button
                onClick={() => {
                  navigate("/explore/2");
                }}
                onMouseEnter={(e) => {
                  setHovered(2);
                }}
              >
                Click HERE
              </button>
            </Html>
          </RenderCanvas>
        </div>
        <div
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
            <Html>
              <button
                onClick={() => {
                  navigate("/explore/3");
                }}
                onMouseEnter={(e) => {
                  setHovered(3);
                }}
              >
                Click HERE
              </button>
            </Html>
          </RenderCanvas>
        </div>
      </div>
    </section>
  );
}

export default Home;
