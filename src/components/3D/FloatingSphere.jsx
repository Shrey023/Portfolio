import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Sphere } from '@react-three/drei';

const FloatingSphere = ({ position = [0, 0, 0], radius = 0.5, color = '#8b5cf6', speed = 1 }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Animation spring for hover effect
  const { scale, rotationY } = useSpring({
    scale: hovered ? 1.3 : 1,
    rotationY: hovered ? Math.PI * 2 : 0,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.4;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
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
        <meshStandardMaterial 
          color={color} 
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.4 : 0}
        />
      </Sphere>
    </animated.mesh>
  );
};

export default FloatingSphere; 