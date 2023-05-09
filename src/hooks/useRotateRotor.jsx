import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";

const useRotateRotor = (file, isAnticlockwise) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(file);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (isAnticlockwise) {
      actions?.Rotor_CCW_01Action?.play();
      actions?.Rotor_CCW_02Action?.play();
    } else {
      actions?.Rotor_CW_02Action?.play();
      actions?.Rotor_CW_01Action?.play();
    }
  }, [isAnticlockwise, actions]);

  return {
    nodes,
    materials,
    group,
  };
};

export default useRotateRotor;
