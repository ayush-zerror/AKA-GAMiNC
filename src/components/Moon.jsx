import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Moon(props) {
  const { nodes, materials } = useGLTF("/model/scene.gltf");
  const moonRef = useRef();

  // White but keeps surface details
  const moonMaterial = useMemo(() => {
    const mat = materials.Material__50.clone();
    mat.color = new THREE.Color(0xffffff); // bright white
    mat.emissive = new THREE.Color(0xaaaaaa); // subtle gray glow
    mat.emissiveIntensity = 0.1; // low intensity to avoid flattening
    mat.roughness = 0.7; // keep enough roughness for texture
    mat.metalness = 0; // no metallic shine
    mat.flatShading = false;

    // Keep the original normal map for details
    if (materials.Material__50.normalMap) {
      mat.normalMap = materials.Material__50.normalMap;
      mat.normalScale = materials.Material__50.normalScale;
    }

    return mat;
  }, [materials]);

  // Subtle rotation
  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.x += 0.0012;
      moonRef.current.rotation.y += 0.002;
      moonRef.current.rotation.z += 0.0008;
    }
  });

  return (
    <group {...props} dispose={null} ref={moonRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.75}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={moonMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model/scene.gltf");
