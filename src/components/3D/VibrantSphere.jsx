import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Sphere } from '@react-three/drei';

const VibrantSphere = ({ position = [0, 0, 0], radius = 0.5, color = '#8338ec', speed = 1 }) => {
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
    scale: hovered ? 1.8 : 1,
    rotationY: hovered ? Math.PI * 6 : 0,
    color: hovered ? '#ffffff' : currentColor,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Floating animation with more dynamic movement
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.6;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.2;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
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
      <Sphere args={[radius, 32, 32]}>
        <animated.meshStandardMaterial 
          color={animatedColor}
          roughness={0.05}
          metalness={0.95}
          emissive={hovered ? currentColor : '#000000'}
          emissiveIntensity={hovered ? 1.0 : 0}
        />
      </Sphere>
    </animated.mesh>
  );
};

export default VibrantSphere; 