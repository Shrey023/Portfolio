import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Box } from '@react-three/drei';

const VibrantCube = ({ position = [0, 0, 0], size = 1, color = '#ff006e', speed = 1 }) => {
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
    scale: hovered ? 1.5 : 1,
    rotationY: hovered ? Math.PI * 4 : 0,
    color: hovered ? '#ffffff' : currentColor,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Floating animation with more dynamic movement
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.8;
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
      <Box args={[size, size, size]}>
        <animated.meshStandardMaterial 
          color={animatedColor}
          roughness={0.1}
          metalness={0.9}
          emissive={hovered ? currentColor : '#000000'}
          emissiveIntensity={hovered ? 0.8 : 0}
        />
      </Box>
    </animated.mesh>
  );
};

export default VibrantCube; 