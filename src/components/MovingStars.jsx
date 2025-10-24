import React, { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

const MovingStars = () => {
  const starsRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0, y: 0 })
  const baseRotation = useRef({ x: 0, y: 0 })

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position between -1 and 1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame(() => {
    if (starsRef.current) {
      // base continuous slow rotation
      baseRotation.current.x += 0.00005
      baseRotation.current.y += 0.0001

      // Calculate mouse influence (slower now)
      const mouseInfluenceX = mouse.current.y * 0.05
      const mouseInfluenceY = mouse.current.x * 0.05

      // Target rotation = base rotation + mouse influence
      targetRotation.current.x = baseRotation.current.x + mouseInfluenceX
      targetRotation.current.y = baseRotation.current.y + mouseInfluenceY

      // Smoothly interpolate current rotation towards target
      starsRef.current.rotation.x +=
        (targetRotation.current.x - starsRef.current.rotation.x) * 0.05
      starsRef.current.rotation.y +=
        (targetRotation.current.y - starsRef.current.rotation.y) * 0.05
    }
  })

  return (
    <group ref={starsRef}>
      <Stars
        radius={300}
        depth={300}
        count={5000}
        factor={30}
        saturation={0}
        fade
        speed={0.2} // slower base star movement
      />
    </group>
  )
}

export default MovingStars
