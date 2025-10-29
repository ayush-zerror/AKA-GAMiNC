"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

const CurvedCylinderWithCards = React.memo(() => {
  const cylinderRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  // 🔄 scroll tracking
  const scrollSpeedRef = useRef(0);
  const lastScrollYRef = useRef(0);

  const radius = 4.5;
  const height = 3.3;
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  // 🖼️ Load texture
  const texture = useTexture("/images/showcase/textture.png");
  useEffect(() => {
    if (!texture) return;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.anisotropy = 8;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
  }, [texture]);

  // 🧮 Adjust texture scale
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

  // 🖱️ Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      const delta = newY - lastScrollYRef.current;
      scrollSpeedRef.current = THREE.MathUtils.clamp(delta * 0.0008, -0.05, 0.05);
      lastScrollYRef.current = newY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌀 Animate rotation
  useFrame(() => {
    if (cylinderRef.current) {
      // base auto rotation
      let rotationSpeed = 0.002 + scrollSpeedRef.current;

      // Apply damping for smooth stop
      scrollSpeedRef.current *= 0.9;

      // skip auto-rotate while dragging
      if (!isDragging) {
        cylinderRef.current.rotation.y += rotationSpeed;
      }
    }
  });

  // 🎮 Drag logic
  const handlePointerDown = useCallback((e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  }, []);

  const handlePointerUp = useCallback(() => setIsDragging(false), []);

  const handlePointerMove = useCallback(
    (e) => {
      if (isDragging && cylinderRef.current) {
        const delta = (e.clientX - startX.current) * 0.005;
        cylinderRef.current.rotation.y += delta;
        startX.current = e.clientX;
      }
    },
    [isDragging]
  );

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
  const moonRef = useRef();
  const moonTexture = useTexture("/images/orange-moon.webp");
  useEffect(() => {
    if (!moonTexture) return;
    moonTexture.minFilter = THREE.LinearFilter;
    moonTexture.magFilter = THREE.LinearFilter;
  }, [moonTexture]);

    useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.z -= 0.001; // adjust speed here (lower = slower)
    }
  });


  return (
    <mesh ref={moonRef} position={[0, 0, 0]}>
      <circleGeometry args={[4, 64]} />
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
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Moon />
      <CurvedCylinderWithCards />
    </Canvas>
  </div>
);

export default CurvedCylinder;
