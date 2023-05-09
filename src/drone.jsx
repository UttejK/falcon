import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Drone() {
  const drone = useLoader(GLTFLoader, "/DroneFull.glb");
  return <primitive object={drone.scene} />;
}

export default Drone;
