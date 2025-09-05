"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Environment,
  Box,
  Octahedron,
  Text,
  Icosahedron,
  TorusKnot,
} from "@react-three/drei"
import type * as THREE from "three"

// ---------------- Professional Sphere ----------------
function ProfessionalSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.06
    }
  })
  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#0891b2"
        distort={0.25}
        speed={1.2}
        roughness={0.2}
        metalness={0.6}
        transparent
        opacity={0.85}
      />
    </Sphere>
  )
}

// ---------------- Particles ----------------
function EnhancedParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(300 * 3)
    for (let i = 0; i < 300; i++) {
      const radius = 12 + Math.random() * 15
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
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015
      particlesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
      const material = particlesRef.current.material as THREE.PointsMaterial
      material.opacity = 0.45 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={300} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#61dafb" transparent opacity={0.5} />
    </points>
  )
}

// ---------------- Floating Stars ----------------
function FloatingStars() {
  const starsRef = useRef<THREE.Points>(null)
  const starsPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      const radius = 15 + Math.random() * 10
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
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.01
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.005
      const material = starsRef.current.material as THREE.PointsMaterial
      material.opacity = 0.35 + Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={200} array={starsPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.5} />
    </points>
  )
}

// ---------------- React Cubes ----------------
function ReactCubes() {
  const cubesRef = useRef<THREE.Group>(null)
  const cubePositions = useMemo(() => {
    return Array.from({ length: 8 }, () => ({
      position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 20] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: 0.1 + Math.random() * 0.15,
    }))
  }, [])

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.children.forEach((cube, index) => {
        cube.rotation.x += 0.01 + index * 0.002
        cube.rotation.y += 0.015 + index * 0.001
        cube.position.y += Math.sin(state.clock.elapsedTime + index) * 0.002
      })
    }
  })

  return (
    <group ref={cubesRef}>
      {cubePositions.map((cube, index) => (
        <Box key={index} position={cube.position} rotation={cube.rotation} scale={cube.scale}>
          <meshStandardMaterial color="#61dafb" transparent opacity={0.7} emissive="#61dafb" emissiveIntensity={0.2} />
        </Box>
      ))}
    </group>
  )
}

// ---------------- Floating Shapes ----------------
function FloatingShapes() {
  const shapesRef = useRef<THREE.Group>(null)
  const shapes = useMemo(() => {
    return Array.from({ length: 12 }, (_, index) => ({
      type: index % 3,
      position: [(Math.random() - 0.5) * 25, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 25] as [number, number, number],
      scale: 0.05 + Math.random() * 0.1,
      speed: 0.5 + Math.random() * 1,
      color: ["#61dafb", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"][Math.floor(Math.random() * 5)],
    }))
  }, [])

  useFrame((state) => {
    if (shapesRef.current) {
      shapesRef.current.children.forEach((shape, index) => {
        const shapeData = shapes[index]
        shape.rotation.x += 0.01 * shapeData.speed
        shape.rotation.y += 0.02 * shapeData.speed
        shape.position.x += Math.sin(state.clock.elapsedTime * shapeData.speed + index) * 0.01
        shape.position.y += Math.cos(state.clock.elapsedTime * shapeData.speed + index) * 0.01
      })
    }
  })

  return (
    <group ref={shapesRef}>
      {shapes.map((shape, index) => (
        <mesh key={index} position={shape.position} scale={shape.scale}>
          {shape.type === 0 && <Octahedron />}
          {shape.type === 1 && <Sphere args={[1, 16, 16]} />}
          {shape.type === 2 && <Box />}
          <meshStandardMaterial color={shape.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

// ---------------- Code Symbols ----------------
function CodeSymbols() {
  const symbolsRef = useRef<THREE.Group>(null)
  const symbols = useMemo(() => {
    const symbolList = ["<", ">", "/", "{", "}", "[", "]", "0", "1"]
    return Array.from({ length: 10 }, () => ({
      content: symbolList[Math.floor(Math.random() * symbolList.length)],
      position: [(Math.random() - 0.5) * 22, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 22] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: 0.15 + Math.random() * 0.1,
      speed: 0.5 + Math.random() * 1.5,
    }))
  }, [])

  useFrame((state) => {
    if (symbolsRef.current) {
      symbolsRef.current.children.forEach((symbol, index) => {
        const symbolData = symbols[index]
        symbol.rotation.y += 0.01 * symbolData.speed
        symbol.position.y += Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.005
      })
    }
  })

  return (
    <group ref={symbolsRef}>
      {symbols.map((symbol, index) => (
        <Text
          key={index}
          position={symbol.position}
          rotation={symbol.rotation}
          fontSize={symbol.scale}
          color="#22d3ee"
          anchorX="center"
          anchorY="middle"
        >
          {symbol.content}
        </Text>
      ))}
    </group>
  )
}

// ---------------- Wireframe Objects ----------------
function WireframeObjects() {
  const wireframesRef = useRef<THREE.Group>(null)
  const wireframeObjects = useMemo(() => {
    return Array.from({ length: 4 }, (_, index) => ({
      type: index % 2,
      position: [(Math.random() - 0.5) * 25, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 25] as [number, number, number],
      scale: 0.5 + Math.random() * 0.5,
    }))
  }, [])

  useFrame((state) => {
    if (wireframesRef.current) {
      wireframesRef.current.children.forEach((object, index) => {
        object.rotation.x += 0.005 + index * 0.002
        object.rotation.y += 0.008 + index * 0.001
      })
    }
  })

  return (
    <group ref={wireframesRef}>
      {wireframeObjects.map((object, index) => (
        <mesh key={index} position={object.position} scale={object.scale}>
          {object.type === 0 && <Icosahedron args={[1, 1]} />}
          {object.type === 1 && <TorusKnot args={[1, 0.4, 64, 8]} />}
          <meshStandardMaterial
            color="#61dafb"
            wireframe
            transparent
            opacity={0.5}
            emissive="#61dafb"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// ---------------- Tech Elements ----------------
function TechElements() {
  const elementsRef = useRef<THREE.Group>(null)
  const techElements = useMemo(() => {
    return Array.from({ length: 6 }, () => ({
      position: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 30] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: 0.05 + Math.random() * 0.1,
    }))
  }, [])

  useFrame((state) => {
    if (elementsRef.current) {
      elementsRef.current.children.forEach((element, index) => {
        element.rotation.x += 0.005
        element.rotation.y += 0.01
        element.position.y += Math.sin(state.clock.elapsedTime + index) * 0.003
      })
    }
  })

  return (
    <group ref={elementsRef}>
      {techElements.map((element, index) => (
        <group key={index} position={element.position} rotation={element.rotation} scale={element.scale}>
          <Box args={[1, 1, 0.1]}>
            <meshStandardMaterial color="#4ecdc4" emissive="#4ecdc4" emissiveIntensity={0.1} transparent opacity={0.8} />
          </Box>
          <Sphere args={[0.2, 16, 16]} position={[0, 0, 0.1]}>
            <meshStandardMaterial color="#4ecdc4" emissive="#4ecdc4" emissiveIntensity={0.5} />
          </Sphere>
        </group>
      ))}
    </group>
  )
}

// ---------------- Animated Stars ----------------
function AnimatedStars() {
  const starsRef = useRef<THREE.Points>(null)
  const starsPosition = useMemo(() => {
    const count = 500
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = -Math.random() * 50
    }
    return positions
  }, [])

  useFrame((state) => {
    if (starsRef.current) {
      const material = starsRef.current.material as THREE.PointsMaterial
      starsRef.current.rotation.y += 0.002
      starsRef.current.rotation.x += 0.001
      material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 3) * 0.3

      const positions = starsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += 0.05
        if (positions[i + 2] > 5) positions[i + 2] = -50
      }
      starsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={starsPosition.length / 3} array={starsPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.5} />
    </points>
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

      <ProfessionalSphere />
      <EnhancedParticles />
      <FloatingStars />
      <ReactCubes />
      <FloatingShapes />
      <CodeSymbols />
      <WireframeObjects />
      <TechElements />
      <AnimatedStars />

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
