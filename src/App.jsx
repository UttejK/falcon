import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Drone from "./components/Drone/Drone";

import { RLB, RLF, RRB, RRF } from "./components/Rotor";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div id="canvas-container">
        <Canvas camera={{ fov: 18, zoom: 4, near: 0.1, far: 1000 }}>
          <OrbitControls enableZoom={false} />
          <Environment files="/skySun.hdr" background />
          <ScrollControls pages={3} damping={0.25}>
            <group>
              <Drone />
              <RLB />
              <RLF />
              <RRB />
              <RRF />
            </group>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

export default App;
