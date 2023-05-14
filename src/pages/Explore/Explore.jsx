import { useParams } from "react-router-dom";
import Drone2 from "../../components/Drone/Drone2";
import CDF from "../../components/Drone/CDF";
import CombatDroneAutoSmooth from "../../components/Drone/CombatDroneAutoSmooth";
import RenderCanvas from "../../components/RenderCanvas/RenderCanvas";

export default function Explore() {
  const { id } = useParams();
  return (
    <div id="canvas-container">
      <section>
        <RenderCanvas hasOrbitControls>
          {id === "1" && <CombatDroneAutoSmooth />}
          {id === "2" && <Drone2 />}
          {id === "3" && <CDF />}
        </RenderCanvas>
      </section>
    </div>
  );
}
