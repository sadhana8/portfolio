"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Box, Text } from "@react-three/drei"
import type * as THREE from "three"

// ---------------- Enhanced Particles ----------------
function EnhancedParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      const radius = 10 + Math.random() * 12
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const t = state.clock.elapsedTime
      particlesRef.current.rotation.y = t * 0.01
      particlesRef.current.rotation.z = Math.sin(t * 0.2) * 0.03
      const material = particlesRef.current.material as THREE.PointsMaterial
      const hue = (t * 15) % 360
      material.color.set(`hsl(${hue}, 90%, 70%)`)
      material.size = 0.02 + Math.sin(t * 2) * 0.01
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#61dafb" transparent opacity={0.5} />
    </points>
  )
}

// ---------------- Floating Stars ----------------
function FloatingStars() {
  const starsRef = useRef<THREE.Points>(null)

  const starsPosition = useMemo(() => {
    const positions = new Float32Array(150 * 3)
    for (let i = 0; i < 150; i++) {
      const radius = 14 + Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    if (starsRef.current) {
      const t = state.clock.elapsedTime
      starsRef.current.rotation.y = t * 0.005
      starsRef.current.rotation.x = t * 0.002
      const material = starsRef.current.material as THREE.PointsMaterial
      const hue = (t * 10) % 360
      material.color.set(`hsl(${hue}, 80%, 80%)`)
      material.size = 0.03 + Math.sin(t * 3) * 0.01
    }
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={150}
          array={starsPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.4} />
    </points>
  )
}

// ---------------- React Cubes ----------------
function ReactCubes() {
  const cubesRef = useRef<THREE.Group>(null)

  const cubePositions = useMemo(() => {
    return Array.from({ length: 8 }, () => ({
      position: [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 18,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: 0.1 + Math.random() * 0.15,
    }))
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (cubesRef.current) {
      cubesRef.current.children.forEach((cube, index) => {
        cube.rotation.x += 0.01 + index * 0.002
        cube.rotation.y += 0.015 + index * 0.001
        cube.position.y += Math.sin(t + index) * 0.002

        // glowing pulse
        const scale = 0.15 + Math.sin(t * 2 + index) * 0.05
        cube.scale.set(scale, scale, scale)

        const material = (cube as THREE.Mesh).material as THREE.MeshStandardMaterial
        const hue = (t * 30 + index * 40) % 360
        material.color.set(`hsl(${hue}, 90%, 65%)`)
        material.emissive.set(`hsl(${hue}, 80%, 50%)`)
      })
    }
  })

  return (
    <group ref={cubesRef}>
      {cubePositions.map((cube, index) => (
        <Box key={index} position={cube.position} rotation={cube.rotation} scale={cube.scale}>
          <meshStandardMaterial
            color="#61dafb"
            transparent
            opacity={0.7}
            emissive="#61dafb"
            emissiveIntensity={0.3}
          />
        </Box>
      ))}
    </group>
  )
}

// ---------------- Floating Wireframes ----------------
function FloatingWireframes() {
  const framesRef = useRef<THREE.Group>(null)

  const framePositions = useMemo(() => {
    return Array.from({ length: 6 }, () => ({
      position: [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 18,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: 0.4 + Math.random() * 0.3,
    }))
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (framesRef.current) {
      framesRef.current.children.forEach((frame, index) => {
        frame.rotation.x += 0.005 + index * 0.001
        frame.rotation.y += 0.01 + index * 0.001
        frame.position.y += Math.sin(t * 0.5 + index) * 0.002

        // pulsing glow
        const scale = 0.6 + Math.sin(t * 2 + index) * 0.2
        frame.scale.set(scale, scale, scale)

        const material = (frame as THREE.Mesh).material as THREE.MeshStandardMaterial
        const hue = (t * 20 + index * 60) % 360
        material.color.set(`hsl(${hue}, 80%, 60%)`)
        material.emissive.set(`hsl(${hue}, 80%, 50%)`)
      })
    }
  })

  return (
    <group ref={framesRef}>
      {framePositions.map((frame, index) => (
        <mesh key={index} position={frame.position} rotation={frame.rotation} scale={frame.scale}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#22d3ee"
            wireframe
            emissive="#22d3ee"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

// ---------------- Floating Random Symbols ----------------
function FloatingSymbols() {
  const symbolsRef = useRef<THREE.Group>(null)

  const symbolData = useMemo(() => {
    const symbolList = ["<", ">", "/", "{", "}", "[", "]", "0", "1"]
    return Array.from({ length: 12 }, () => ({
      content: symbolList[Math.floor(Math.random() * symbolList.length)],
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: 0.4 + Math.random() * 0.3,
      speed: 0.5 + Math.random() * 1.5,
    }))
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (symbolsRef.current) {
      symbolsRef.current.children.forEach((symbol, index) => {
        const data = symbolData[index]
        symbol.rotation.y += 0.01 * data.speed
        symbol.rotation.x += 0.005 * data.speed
        symbol.position.y += Math.sin(t * data.speed + index) * 0.003

        const mesh = symbol as unknown as THREE.Mesh & { material: THREE.Material }
        const mat = (mesh.material as any)
        if (mat.color) {
          const hue = (t * 40 + index * 50) % 360
          mat.color.set(`hsl(${hue}, 90%, 65%)`)
        }
      })
    }
  })

  return (
    <group ref={symbolsRef}>
      {symbolData.map((sym, index) => (
        <Text
          key={index}
          position={sym.position}
          rotation={sym.rotation}
          scale={sym.scale}
          fontSize={0.5}
          color="#61dafb"
          anchorX="center"
          anchorY="middle"
        >
          {sym.content}
        </Text>
      ))}
    </group>
  )
}

// ---------------- Scene Content ----------------
function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#0891b2" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#22d3ee" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />
      <EnhancedParticles />
      <FloatingStars />
      <ReactCubes />
      <FloatingWireframes />
      <FloatingSymbols />
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.2}
      />
    </>
  )
}

// ---------------- Main Canvas ----------------
export default function ThreeScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
