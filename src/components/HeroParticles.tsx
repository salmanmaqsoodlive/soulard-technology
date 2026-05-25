'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const mesh = useRef<THREE.Points>(null)

  const { positions, velocities } = useMemo(() => {
    const count = 300
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      velocities[i * 3] = (Math.random() - 0.5) * 0.002
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002
      velocities[i * 3 + 2] = 0
    }
    return { positions, velocities }
  }, [])

  useFrame(() => {
    if (!mesh.current) return
    const pos = mesh.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < pos.length; i += 3) {
      pos[i] += velocities[i]
      pos[i + 1] += velocities[i + 1]
      if (Math.abs(pos[i]) > 10) velocities[i] *= -1
      if (Math.abs(pos[i + 1]) > 5) velocities[i + 1] *= -1
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y += 0.0003
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#0066ff" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

function ConnectionLines() {
  const mesh = useRef<THREE.LineSegments>(null)

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = []
    const nodeCount = 30
    const nodes = Array.from({ length: nodeCount }, () =>
      new THREE.Vector3((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 4)
    )
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i !== j && node.distanceTo(other) < 3.5) {
          points.push(node.clone(), other.clone())
        }
      })
    })
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [])

  useFrame(({ clock }) => {
    if (!mesh.current) return
    mesh.current.rotation.y = clock.getElapsedTime() * 0.05
  })

  return (
    <lineSegments ref={mesh} geometry={geometry}>
      <lineBasicMaterial color="#00d4ff" transparent opacity={0.15} />
    </lineSegments>
  )
}

export default function HeroParticles() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.5} />
      <Particles />
      <ConnectionLines />
    </Canvas>
  )
}
