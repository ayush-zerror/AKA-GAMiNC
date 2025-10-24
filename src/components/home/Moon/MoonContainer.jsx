import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Moon } from "@/components/Moon";
import MovingStars from "@/components/MovingStars";

const MoonContainer = () => {
  return (
    <div id="moon_container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <MovingStars />
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
