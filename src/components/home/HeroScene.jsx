import { Component, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

class HeroSceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.warn("HeroScene WebGL failed; using fallback scene.", error);
  }

  render() {
    if (this.state.failed) return <SceneFallback />;
    return this.props.children;
  }
}

function WebGLContextGuard({ onLost, onRestored }) {
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const canvas = gl.domElement;

    const handleLost = () => {
      onLost();
    };

    const handleRestored = () => {
      onRestored();
    };

    canvas.addEventListener("webglcontextlost", handleLost);
    canvas.addEventListener("webglcontextrestored", handleRestored);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleLost);
      canvas.removeEventListener("webglcontextrestored", handleRestored);
    };
  }, [gl, onLost, onRestored]);

  return null;
}

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
  const [ready, setReady] = useState(false);
  const [contextLost, setContextLost] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const timer = window.setTimeout(() => {
      if (mounted.current) setReady(true);
    }, 120);

    return () => {
      mounted.current = false;
      window.clearTimeout(timer);
    };
  }, []);

  const handleContextLost = () => {
    if (mounted.current) setContextLost(true);
  };

  const handleContextRestored = () => {
    if (!mounted.current) return;
    setContextLost(false);
    setCanvasKey((key) => key + 1);
  };

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {(!ready || contextLost) && <SceneFallback />}
      {ready && !contextLost && (
        <HeroSceneBoundary>
          <Canvas
            key={canvasKey}
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: false,
            }}
            dpr={[1, 1.5]}
            fallback={<SceneFallback />}
          >
            <WebGLContextGuard onLost={handleContextLost} onRestored={handleContextRestored} />
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
        </HeroSceneBoundary>
      )}
    </div>
  );
}

function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-64 w-64 rounded-full border border-signal/25 bg-signal/10 shadow-glow blur-[1px]" />
      <div className="absolute h-32 w-32 rounded-full border border-teal/30 bg-teal/10" />
    </div>
  );
}
