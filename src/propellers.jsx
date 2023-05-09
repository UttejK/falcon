import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Propellers() {
  const rLF = useLoader(GLTFLoader, "/rLF.glb");
  const rLB = useLoader(GLTFLoader, "/rLB.glb");
  const rRF = useLoader(GLTFLoader, "/rRF.glb");
  const rRB = useLoader(GLTFLoader, "/rRB.glb");
  const propstand = useLoader(GLTFLoader, "/rotorsonly.glb");
  return (
    <>
      <primitive object={rLF.scene} />
      <primitive object={rLB.scene} />
      <primitive object={rRF.scene} />
      <primitive object={rRB.scene} />
    </>
  );
}

export default Propellers;
