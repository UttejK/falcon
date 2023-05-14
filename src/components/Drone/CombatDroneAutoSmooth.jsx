/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function CombatDroneAutoSmooth(props) {
  const CombatDroneFull = useRef();

  useFrame(({ clock }) => {
    CombatDroneFull.current.position.y =
      0.03 * Math.sin(2 * clock.getElapsedTime());
  });

  const { nodes, materials } = useGLTF("/CombatDroneAutoSmooth.glb");
  return (
    <group {...props} dispose={null} ref={CombatDroneFull}>
      <group position={[0, -0.35, 0]} scale={0.39}>
        <group
          position={[0.28, 1.16, 0.68]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.64}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere003.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_1.geometry}
            material={materials["drone.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/CombatDroneAutoSmooth.glb");