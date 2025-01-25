import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = React.memo(({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  const memoizedDecal = useMemo(() => decal, [decal]);

  return (
    <Float speed={2} rotationIntensity={1.25} floatIntensity={1.5}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 3, 5]} intensity={1.2} castShadow />
      <pointLight position={[1, -3, 3]} intensity={0.4} />

      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 20]} />
        <meshStandardMaterial
          color="#e0e0e0"
          metalness={0.6}
          roughness={0.3}
          flatShading
        />
        <Decal
          map={memoizedDecal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
});

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      className="rounded-lg shadow-lg"
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default React.memo(BallCanvas);
