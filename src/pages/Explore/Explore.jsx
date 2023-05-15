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
        <RenderCanvas>
          {id === "1" && <CombatDroneAutoSmooth />}
          {id === "2" && <SurvDrone />}
          {id === "3" && <CDF />}
        </RenderCanvas>
      </section>
    </div>
  );
}
