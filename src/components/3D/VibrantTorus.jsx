import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Torus } from '@react-three/drei';

const VibrantTorus = ({ position = [0, 0, 0], radius = 0.5, tubeRadius = 0.2, color = '#06ffa5', speed = 1 }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Vibrant color palette
  const vibrantColors = [
    '#ff006e', // Hot Pink
    '#8338ec', // Purple
    '#3a86ff', // Blue
    '#06ffa5', // Cyan
    '#ffbe0b', // Yellow
    '#fb5607', // Orange
    '#ff006e', // Hot Pink
    '#8338ec', // Purple
  ];
  
  const currentColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  
  // Animation spring for hover effect
  const { scale, rotationY, color: animatedColor } = useSpring({
    scale: hovered ? 2.0 : 1,
    rotationY: hovered ? Math.PI * 8 : 0,
    color: hovered ? '#ffffff' : currentColor,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Floating animation with more dynamic movement
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.4;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.9;
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
        <animated.meshStandardMaterial 
          color={animatedColor}
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? currentColor : '#000000'}
          emissiveIntensity={hovered ? 0.9 : 0}
          wireframe={hovered}
        />
      </Torus>
    </animated.mesh>
  );
};

export default VibrantTorus; 