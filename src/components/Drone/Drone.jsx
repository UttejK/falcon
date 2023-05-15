/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { degToRad } from "three/src/math/MathUtils";
import { useSpring, animated, config } from "@react-spring/three";

export default function SurvDrone(props) {
  const isOver = useRef(false);

  const rotorBackLeft = useRef();
  const rotorFrontRight = useRef();
  const rotorBackRight = useRef();
  const rotorFrontLeft = useRef();
  const droneFull = useRef();

  const [springs, api] = useSpring(() => {
    return {
      // scale: 1,
      position: [0, 0],
      config: {
        mass: 40,
        friction: 220,
      },
    };
  }, []);
  // const tl = useRef();
  // const scroll = useScroll();

  const Drone2Speed = 800;

  useFrame(({ clock }, delta) => {
    rotorBackLeft.current.rotation.y += delta * Drone2Speed;
    rotorFrontRight.current.rotation.y += delta * Drone2Speed;
    rotorBackRight.current.rotation.y += delta * Drone2Speed * -1;
    rotorFrontLeft.current.rotation.y += delta * Drone2Speed * -1;

    droneFull.current.rotation.z = 0.05 * Math.sin(2 * clock.getElapsedTime());
    droneFull.current.rotation.x =
      0.05 * Math.sin(2 * clock.getElapsedTime() + Math.PI / 6);

    // tl.current.seek(scroll?.offset * tl.current.duration());
  });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline();

  //   tl.current.to(droneFull.current.rotation, {
  //     duration: 2,
  //     x: -1 * degToRad(30),
  //     y: -1 * degToRad(30),
  //   });
  //   tl.current.to(droneFull.current.rotation, {
  //     duration: 2,
  //     x: -1 * degToRad(-60),
  //     y: -1 * degToRad(90),
  //   });
  // }, []);

  const handleWindowPointerOver = useCallback(() => {
    isOver.current = true;
  });
  const handleWindowPointerOut = useCallback(() => {
    isOver.current = false;

    api.start({
      position: [0, 0],
    });
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (isOver.current) {
        const x = e.offsetX / window.innerWidth - 0.5;
        const y = -(e.offsetY / window.innerHeight) + 0.5;

        api.start({
          position: [x, y],
        });
      }
    },
    [api]
  );

  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}droneFull2.glb`
  );

  useEffect(() => {
    window.addEventListener("pointerover", handleWindowPointerOver);
    window.addEventListener("pointerout", handleWindowPointerOut);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerover", handleWindowPointerOver);
      window.removeEventListener("pointerout", handleWindowPointerOut);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handleWindowPointerOver, handleWindowPointerOut, handlePointerMove]);

  return (
    <animated.group position={springs.position.to((x, y) => [x, y, 0])}>
      <group
        {...props}
        scale={0.65}
        position={[0, -0.2, 0]}
        rotation={[degToRad(15), 0, 0]}
        dispose={null}
        ref={droneFull}
      >
        <group position={[0, 0.39, 0]} scale={6.12}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1.geometry}
            material={materials.hull}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_2.geometry}
            material={materials.gray_gum}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_3.geometry}
            material={materials["tiny_red:lights"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_4.geometry}
            material={materials.orange_lines}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_5.geometry}
            material={materials["Black Gum"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_6.geometry}
            material={materials.green_lights}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_7.geometry}
            material={materials.Helix}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_8.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_9.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_10.geometry}
            material={materials["Black Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_11.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          position={[0.55, 0.25, -0.54]}
          rotation={[0, 0.61, 0]}
          scale={6.12}
          ref={rotorBackLeft}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackLeft_1.geometry}
            material={materials.Helix}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackLeft_2.geometry}
            material={materials.white_line}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackLeft_3.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackLeft_4.geometry}
            material={materials["Black Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackLeft_5.geometry}
            material={materials["Black Gum"]}
          />
        </group>
        <group
          position={[-0.55, 0.25, -0.54]}
          rotation={[0, 0.61, 0]}
          scale={6.12}
          ref={rotorBackRight}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackRight_1.geometry}
            material={materials.Helix}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackRight_2.geometry}
            material={materials.white_line}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackRight_3.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackRight_4.geometry}
            material={materials["Black Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorBackRight_5.geometry}
            material={materials["Black Gum"]}
          />
        </group>
        <group
          position={[0.61, 0.39, 0.48]}
          rotation={[0, -0.06, 0]}
          scale={6.12}
          ref={rotorFrontLeft}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontLeft_1.geometry}
            material={materials.Helix}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontLeft_2.geometry}
            material={materials.white_line}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontLeft_3.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontLeft_4.geometry}
            material={materials["Black Gum"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontLeft_5.geometry}
            material={materials["Black Metal"]}
          />
        </group>
        <group
          position={[-0.61, 0.39, 0.48]}
          rotation={[0, -0.06, 0]}
          scale={6.12}
          ref={rotorFrontRight}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontRight_1.geometry}
            material={materials.Helix}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontRight_2.geometry}
            material={materials.white_line}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontRight_3.geometry}
            material={materials["Black Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontRight_4.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotorFrontRight_5.geometry}
            material={materials["Black Gum"]}
          />
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}droneFull2.glb`);
