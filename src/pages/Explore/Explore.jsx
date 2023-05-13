import Drone2 from "../../components/Drone/Drone2";
import RenderCanvas from "../../components/RenderCanvas/RenderCanvas";

export default function Explore() {
  return (
    <div id="canvas-container">
      <section>
        <RenderCanvas hasScrollControls>
          <Drone2 />
        </RenderCanvas>
      </section>
    </div>
  );
}
