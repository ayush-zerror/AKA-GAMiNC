import { Canvas } from "@react-three/fiber";
import React from "react";
import MovingStars from "./MovingStars";
import { OrbitControls } from "@react-three/drei";

const StarContainer = () => {
  return (
    <div id="start_container">
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

export default StarContainer;
