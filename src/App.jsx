import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Drone from "./drone";

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 18, zoom: 4, near: 0.1, far: 1000 }}>
        <OrbitControls enableZoom={false} />
        <Environment files="/skySun.hdr" background />
        <ScrollControls pages={3} damping={0.25}>
          <Drone />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
