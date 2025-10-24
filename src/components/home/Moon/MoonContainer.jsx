import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Moon } from "@/components/Moon";
import MovingStars from "@/components/MovingStars";

const MoonContainer = () => {
  return (
    <div id="moon_container" >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <MovingStars />

        {/* Soft ambient for cartoonish feel */}
        <ambientLight intensity={0.8} color={"#ffffff"} />

        {/* Rim light for toy-like shine */}
        <directionalLight
          position={[3, 3, 3]}
          intensity={0.5}
          color={"#ffffff"}
        />

        {/* Moon with emissive material */}
        <Moon
          position={[0, 0, 0]}
        
        />

        {/* Orbit controls for interaction */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxDistance={15}
          minDistance={4}
        />
      </Canvas>
    </div>
  );
};

export default MoonContainer;
