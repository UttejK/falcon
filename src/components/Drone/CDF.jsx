/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import "./DroneDescription.scss";

import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";
import { degToRad } from "three/src/math/MathUtils";

const ModelGroup = ({ nodes, materials }) => {
  return (
    <>
      <group position={[0, -0.6, 1.82]} rotation={[-0.38, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["CDF-Body-1"].geometry}
          material={materials["CDF-Body-textures"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["CDF-Body-2"].geometry}
          material={materials["CDF-Body-textures"]}
        />
      </group>
    </>
  );
};

export default function CDF({ hasInfo, ...props }) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}CDF.glb`);
  const CDFDrone = useRef();

  const rotDelay = 10;

  const { CDFRot } = useSpring({
    from: { CDFRot: Math.PI, delay: rotDelay },
    to: [
      {
        CDFRot: (3 / 2) * Math.PI,
        delay: rotDelay,
      },
      {
        CDFRot: 2 * Math.PI,
        delay: rotDelay,
      },
      {
        CDFRot: (5 / 2) * Math.PI,
        delay: rotDelay,
      },
      {
        CDFRot: 4 * Math.PI,
        delay: rotDelay,
      },
    ],
    config: {
      mass: 200,
      tension: 1000,
      friction: 500,
    },
    // loop: true,
    // immediate: true,
  });

  useFrame(({ clock }) => {
    CDFDrone.current.position.y = 0.02 * Math.sin(2 * clock.getElapsedTime());
    // console.log(CDFRot);
  });

  return (
    <group ref={CDFDrone} {...props} dispose={null}>
      {hasInfo ? (
        <animated.group
          position={[0, -0.1, 0]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          rotation-z={CDFRot}
          scale={0.06}
        >
          <Html center>
            <div className="drone-description-container">
              <label htmlFor="text" className="drone-description-button">
                1
              </label>

              <p className="drone-description">
                Behold the marvel of technological ingenuity, the Advanced
                Crawler Drone! Unleashing a relentless torrent of scorching
                flames from its dual fire dispensers, it incinerates its targets
                to a crisp, leaving no room for escape. Prepare to witness the
                awe-inspiring might of this formidable creation, beckoning all
                who seek power and dominance to possess this extraordinary drone
              </p>
            </div>
          </Html>
          <ModelGroup {...{ nodes, materials }} />
        </animated.group>
      ) : (
        <group
          position={[0, -0.1, 0]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          scale={0.06}
        >
          <ModelGroup {...{ nodes, materials }} />
        </group>
      )}
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}CDF.glb`);
