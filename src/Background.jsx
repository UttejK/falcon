import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Background() {
  const background = useLoader(GLTFLoader, "/background.glb");
  return <primitive object={background.scene} />;
}

export default Background;
