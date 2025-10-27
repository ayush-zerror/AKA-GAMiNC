"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";

// 🧱 Curved plane geometry generator
function createCurvedCardGeometry(
  radius = 4.5,
  width = 2,
  height = 3,
  segments = 32
) {
  const geometry = new THREE.PlaneGeometry(width, height, segments, 1);
  const curve = radius;
  const anglePerVertex = width / curve;

  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = -Math.sin((x / width) * anglePerVertex) * curve;
    const newX = Math.cos((x / width) * anglePerVertex) * curve - curve;
    pos.setXYZ(i, newX, pos.getY(i), z);
  }

  pos.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

const CurvedCylinderWithCards = () => {
  const cylinderRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const radius = 5;
  const height = 6;
  const cardsCount = 10;

  useFrame(() => {
    if (!isDragging && cylinderRef.current) {
      cylinderRef.current.rotation.y += 0.002;
    }
  });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  const handlePointerMove = (e) => {
    if (isDragging && cylinderRef.current) {
      const delta = (e.clientX - startX) * 0.005;
      cylinderRef.current.rotation.y += delta;
      setStartX(e.clientX);
    }
  };

  return (
    <group
      ref={cylinderRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      {/* 🔷 Invisible Cylinder */}
      <mesh>
        <cylinderGeometry args={[radius, radius, height, 64, 1, true]} />
        <meshStandardMaterial transparent opacity={0} side={THREE.DoubleSide} />
      </mesh>

      {/* 🪪 Curved Cards */}
      {Array.from({ length: cardsCount }).map((_, i) => {
        const angle = (i / cardsCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const cardGeometry = createCurvedCardGeometry(radius, 2, 2, 32);

        return (
          <mesh
            key={i}
            position={[x, 0, z]}
            rotation={[0, -angle, 0]}
            geometry={cardGeometry}
          >
            <meshStandardMaterial
              color="#fff"
              roughness={0}
              metalness={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const Moon = () => {
  const moonTexture = useTexture("/images/showcase-moon.webp");

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial
        map={moonTexture}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const CurvedCylinder = () => {
  return (
    <div id="moon_slider">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        {/* 🌕 Fixed Moon Image (does not rotate) */}
        <Moon />

        {/* 🌀 Rotating Cylinder + Cards */}
        <CurvedCylinderWithCards />
      </Canvas>
    </div>
  );
};

export default CurvedCylinder;
