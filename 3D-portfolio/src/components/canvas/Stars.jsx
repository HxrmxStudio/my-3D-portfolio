import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef(); // Referencia al grupo de puntos para controlar su rotación

  // Genera una esfera de puntos aleatorios utilizando maath/random
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  // Actualiza la rotación de las estrellas en cada frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>  {/* Rotación inicial del grupo */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true} // Ajusta el tamaño según la distancia de la cámara
          depthWrite={false}// Evita problemas de superposición (z-fighting)
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}> {/* Cámara posicionada ligeramente alejada del origen */}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all /> {/* Precarga todos los recursos para mejorar el rendimiento */}
      </Canvas>
    </div>
  );
};

export default StarsCanvas;