import { useParams } from "react-router-dom";
import SurvDrone from "../../components/Drone/Drone";
import CDF from "../../components/Drone/CDF";
import CombatDroneAutoSmooth from "../../components/Drone/CombatDroneAutoSmooth";
import RenderCanvas from "../../components/RenderCanvas/RenderCanvas";

export default function Explore() {
  const { id } = useParams();
  return (
    <div id="canvas-container">
      <section>
        <RenderCanvas hasOrbitControls>
          {id === "1" && <CombatDroneAutoSmooth hasInfo />}
          {id === "2" && <SurvDrone hasInfo />}
          {id === "3" && <CDF hasInfo />}
        </RenderCanvas>
      </section>
    </div>
  );
}
