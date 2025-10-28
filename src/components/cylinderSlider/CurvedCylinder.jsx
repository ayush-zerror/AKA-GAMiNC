"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import React, { useRef, useState, useMemo, useCallback, useEffect } from "react";

const CurvedCylinderWithCards = React.memo(() => {
  const cylinderRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const radius = 4.5;
  const height = 3.3;
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  // 🖼️ Load texture once and configure efficiently
  const texture = useTexture("/images/showcase/textture.png");
  useEffect(() => {
    if (!texture) return;

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.anisotropy = 8;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
  }, [texture]);

  // 🧮 Adjust texture scale to match cylinder proportions
  useEffect(() => {
    if (!texture.image) return;

    const imgAspect = texture.image.width / texture.image.height;
    const cylAspect = circumference / height;
    const repeatX = 1;
    const repeatY = cylAspect / imgAspect;

    texture.repeat.set(repeatX, repeatY);
    texture.offset.set(0, (1 - repeatY) / 2);
    texture.needsUpdate = true;
  }, [texture.image, circumference, height]);

  // 🌀 Auto rotation
  useFrame(() => {
    if (!isDragging && cylinderRef.current) {
      cylinderRef.current.rotation.y += 0.002;
    }
  });

  // 🎮 Drag logic (optimized)
  const handlePointerDown = useCallback((e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  }, []);

  const handlePointerUp = useCallback(() => setIsDragging(false), []);

  const handlePointerMove = useCallback((e) => {
    if (isDragging && cylinderRef.current) {
      const delta = (e.clientX - startX.current) * 0.005;
      cylinderRef.current.rotation.y += delta;
      startX.current = e.clientX;
    }
  }, [isDragging]);

  return (
    <group
      ref={cylinderRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <mesh>
        <cylinderGeometry args={[radius, radius, height, 128, 1, true]} />
        <meshStandardMaterial
          map={texture}
          side={THREE.DoubleSide}
          transparent
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
});

const Moon = React.memo(() => {
  const moonTexture = useTexture("/images/showcase-moon.webp");
  useEffect(() => {
    if (!moonTexture) return;
    moonTexture.minFilter = THREE.LinearFilter;
    moonTexture.magFilter = THREE.LinearFilter;
  }, [moonTexture]);

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[8.2, 8.2]} />
      <meshStandardMaterial
        map={moonTexture}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
});

const CurvedCylinder = () => (
  <div id="moon_slider">
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      dpr={[1, 1.5]} // 🧠 Avoid over-rendering on high-DPI screens
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Moon />
      <CurvedCylinderWithCards />
    </Canvas>
  </div>
);

export default CurvedCylinder;
