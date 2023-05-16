import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function RenderCanvasLoading() {
  return (
    <div className="page">
      <h1>Loading Please Wait...</h1>
    </div>
  );
}

const RenderCanvas = ({ hasOrbitControls, hasScrollControls, children }) => {
  return (
    <>
      <Suspense fallback={<RenderCanvasLoading />}>
        <Canvas
          camera={{ fov: 35, zoom: 2.5, near: 0.1, far: 1000 }}
          resize={{
            debounce: {
              resize: 0,
            },
          }}
        >
          {hasOrbitControls && (
            <OrbitControls
              // enableZoom={false}
              // enablePan={false}
              enableDamping={true}
            />
          )}
          <pointLight position={[1, 1, 0]} intensity={2} color={"#ff0000"} />
          <pointLight position={[-1, 1, 0]} intensity={2} color={"#00ffff"} />
          {hasScrollControls ? (
            <ScrollControls pages={3} damping={0.25}>
              {children}
            </ScrollControls>
          ) : (
            <>{children}</>
          )}
        </Canvas>
      </Suspense>
    </>
  );
};

export default RenderCanvas;
