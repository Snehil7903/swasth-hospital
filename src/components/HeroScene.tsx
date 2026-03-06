// src/components/HeroScene.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment, Float } from "@react-three/drei";
import { Suspense } from "react"; // <-- Import Suspense from React

export default function HeroScene() {
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <Canvas camera={{ position: [0, 0, 4] }} className="cursor-grab active:cursor-grabbing">
        
        {/* Wrap the heavy 3D lifting inside Suspense so it doesn't crash while loading */}
        <Suspense fallback={null}>
          {/* Lighting setup */}
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1.5} color="#FAFAFA" />
          
          {/* The organic, floating cell */}
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[1, 100, 100]} scale={1.4}>
              <MeshDistortMaterial 
                color="#059669" 
                attach="material"
                distort={0.4} 
                speed={2} 
                roughness={0.1} 
                metalness={0.8} 
              />
            </Sphere>
          </Float>
        </Suspense>
        
      </Canvas>
    </div>
  );
}