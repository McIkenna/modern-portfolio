import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

function Core() {
  const group = useRef(null);
  const inner = useRef(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      const { x, y } = state.pointer;
      group.current.rotation.x += (y * 0.25 - group.current.rotation.x) * 0.04;
      group.current.rotation.z += (-x * 0.15 - group.current.rotation.z) * 0.04;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.3;
      inner.current.rotation.x -= delta * 0.15;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#8B7FFF"
          wireframe
          transparent
          opacity={0.55}
          emissive="#8B7FFF"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh ref={inner} scale={0.55}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#5EEAD4"
          transparent
          opacity={0.25}
          emissive="#5EEAD4"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.75]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[4, 4, 4]} intensity={40} color="#8B7FFF" />
          <pointLight position={[-4, -2, -2]} intensity={20} color="#5EEAD4" />
          <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
            <Core />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
