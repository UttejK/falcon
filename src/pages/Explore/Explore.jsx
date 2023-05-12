import { OrbitControls, ScrollControls } from "@react-three/drei";
import Drone2 from "../../components/Drone/Drone2";
import { Canvas } from "@react-three/fiber";
export default function Explore() {
  return (
    <div id="canvas-container">
      <section>
        <Canvas camera={{ fov: 35, zoom: 2.5, near: 0.1, far: 1000 }}>
          <OrbitControls enableZoom={false} />
          <pointLight position={[1, 1, 0]} intensity={2} color={"#FF0000"} />
          <pointLight position={[-1, 1, 0]} intensity={2} color={"#00FFFF"} />
          <ScrollControls pages={3} damping={0.25}>
            <Drone2 />
          </ScrollControls>
        </Canvas>
      </section>
    </div>
  );
}
