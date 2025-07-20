import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Box } from '@react-three/drei';

const FloatingCube = ({ position = [0, 0, 0], size = 1, color = '#6366f1', speed = 1 }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Animation spring for hover effect
  const { scale, rotationY } = useSpring({
    scale: hovered ? 1.2 : 1,
    rotationY: hovered ? Math.PI * 2 : 0,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
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
      <Box args={[size, size, size]}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.3}
          metalness={0.7}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </Box>
    </animated.mesh>
  );
};

export default FloatingCube; 