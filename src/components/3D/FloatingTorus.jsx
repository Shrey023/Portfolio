import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Torus } from '@react-three/drei';

const FloatingTorus = ({ position = [0, 0, 0], radius = 0.5, tubeRadius = 0.2, color = '#06b6d4', speed = 1 }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Animation spring for hover effect
  const { scale, rotationY } = useSpring({
    scale: hovered ? 1.4 : 1,
    rotationY: hovered ? Math.PI * 2 : 0,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      scale={scale}
      rotation-y={rotationY}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Torus args={[radius, tubeRadius, 16, 32]}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.4}
          metalness={0.6}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
          wireframe={hovered}
        />
      </Torus>
    </animated.mesh>
  );
};

export default FloatingTorus; 