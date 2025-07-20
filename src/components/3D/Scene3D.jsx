import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

const Scene3D = ({ children, className = "w-full h-64" }) => {
  const { isDark } = useTheme();

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={isDark ? 0.8 : 1.2}
          color={isDark ? '#1e293b' : '#ffffff'}
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={isDark ? 0.5 : 0.8}
          color={isDark ? '#475569' : '#f1f5f9'}
        />
        
        {/* Environment */}
        <Environment preset={isDark ? 'night' : 'sunset'} />
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* 3D Objects */}
        {children}
      </Canvas>
    </div>
  );
};

export default Scene3D; 