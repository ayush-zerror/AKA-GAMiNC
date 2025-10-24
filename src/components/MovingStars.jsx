import React, { useRef, useEffect, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const MovingStars = ({ count = 5000, radius = 300 }) => {
  const starsRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0, y: 0 })
  const baseRotation = useRef({ x: 0, y: 0 })

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Generate stars positions and sizes
  const starsData = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const phi = Math.random() * Math.PI * 2
      const costheta = Math.random() * 2 - 1
      const u = Math.random()

      const theta = Math.acos(costheta)
      const r = radius * Math.cbrt(u)

      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = r * Math.cos(theta)

      sizes[i] = Math.random() * 1.5 + 0.5 // Random size between 0.5 and 2
    }

    return { positions, sizes }
  }, [count, radius])

  // Create geometry and material
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    geom.setAttribute(
      "position",
      new THREE.BufferAttribute(starsData.positions, 3)
    )
    geom.setAttribute("size", new THREE.BufferAttribute(starsData.sizes, 1))
    return geom
  }, [starsData])

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.7,
        sizeAttenuation: true,
      }),
    []
  )

  useFrame(() => {
    if (starsRef.current) {
      baseRotation.current.x += 0.00005
      baseRotation.current.y += 0.0001

      const mouseInfluenceX = mouse.current.y * 0.05
      const mouseInfluenceY = mouse.current.x * 0.05

      targetRotation.current.x = baseRotation.current.x + mouseInfluenceX
      targetRotation.current.y = baseRotation.current.y + mouseInfluenceY

      starsRef.current.rotation.x +=
        (targetRotation.current.x - starsRef.current.rotation.x) * 0.05
      starsRef.current.rotation.y +=
        (targetRotation.current.y - starsRef.current.rotation.y) * 0.05
    }
  })

  return <points ref={starsRef} geometry={geometry} material={material} />
}

export default MovingStars
