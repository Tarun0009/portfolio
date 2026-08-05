"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1800;
const DIM_PARTICLE_COUNT = 700;
const FIELD_SIZE = 10;
const REPEL_RADIUS = 1.4;
const REPEL_STRENGTH = 0.18;

function createRandom(seed: number) {
  let value = seed >>> 0;

  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function createParticleData(count: number, seed: number) {
  const random = createRandom(seed);
  const positions = new Float32Array(count * 3);
  const originals = new Float32Array(count * 3);
  const drifts = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const x = (random() - 0.5) * FIELD_SIZE * 2.2;
    const y = (random() - 0.5) * FIELD_SIZE * 1.4;
    const z = (random() - 0.5) * FIELD_SIZE * 0.6;

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    originals[i3] = x;
    originals[i3 + 1] = y;
    originals[i3 + 2] = z;

    drifts[i3] = random() * Math.PI * 2;
    drifts[i3 + 1] = random() * Math.PI * 2;
    drifts[i3 + 2] = random() * Math.PI * 2;
  }

  return { positions, originals, drifts };
}

function createDimPositions(count: number, seed: number) {
  const random = createRandom(seed);
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (random() - 0.5) * 24;
    positions[i3 + 1] = (random() - 0.5) * 16;
    positions[i3 + 2] = (random() - 0.5) * 10 - 4;
  }

  return positions;
}

const PARTICLE_DATA = createParticleData(PARTICLE_COUNT, 0x51f15e);
const DIM_POSITIONS = createDimPositions(DIM_PARTICLE_COUNT, 0x1a2b3c);

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetMouse = useRef(new THREE.Vector2(0, 0));
  const raycaster = useRef(new THREE.Raycaster());
  const plane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
  const mouseWorld = useRef(new THREE.Vector3());
  const { camera } = useThree();

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const positionAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const positions = positionAttr.array as Float32Array;
    const time = state.clock.elapsedTime;

    mouse.current.lerp(targetMouse.current, 0.08);
    raycaster.current.setFromCamera(mouse.current, camera);
    raycaster.current.ray.intersectPlane(plane.current, mouseWorld.current);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const ox = PARTICLE_DATA.originals[i3];
      const oy = PARTICLE_DATA.originals[i3 + 1];
      const oz = PARTICLE_DATA.originals[i3 + 2];

      let px = ox + Math.sin(time * 0.12 + PARTICLE_DATA.drifts[i3]) * 0.06;
      let py = oy + Math.cos(time * 0.14 + PARTICLE_DATA.drifts[i3 + 1]) * 0.06;
      const pz = oz + Math.sin(time * 0.1 + PARTICLE_DATA.drifts[i3 + 2]) * 0.04;

      const rx = px - mouseWorld.current.x;
      const ry = py - mouseWorld.current.y;
      const distanceSquared = rx * rx + ry * ry;

      if (distanceSquared < REPEL_RADIUS * REPEL_RADIUS) {
        const distance = Math.sqrt(distanceSquared) || 0.0001;
        const push = (1 - distance / REPEL_RADIUS) * REPEL_STRENGTH;
        px += (rx / distance) * push;
        py += (ry / distance) * push;
      }

      positions[i3] = px;
      positions[i3 + 1] = py;
      positions[i3 + 2] = pz;
    }

    positionAttr.needsUpdate = true;
    pointsRef.current.rotation.z += delta * 0.006;
    pointsRef.current.rotation.y = Math.sin(time * 0.05) * 0.1;

    targetMouse.current.set(state.pointer.x, state.pointer.y);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[PARTICLE_DATA.positions, 3]}
          count={PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#c9f31d"
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function DimField() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.z += delta * 0.003;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[DIM_POSITIONS, 3]}
          count={DIM_PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#f4f1e8"
        size={0.014}
        sizeAttenuation
        transparent
        opacity={0.16}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 640px) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setEnabled(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <Canvas
      className="!absolute inset-0 !h-full !w-full"
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <DimField />
      <ParticleField />
    </Canvas>
  );
}
