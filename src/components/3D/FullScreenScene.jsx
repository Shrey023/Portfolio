import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';
import VibrantCube from './VibrantCube';
import VibrantSphere from './VibrantSphere';
import VibrantTorus from './VibrantTorus';

const FullScreenScene = ({ className = "w-full h-screen" }) => {
  const { isDark } = useTheme();

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: isDark ? '#0a0a0a' : '#f0f0f0' }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={isDark ? 0.4 : 0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={isDark ? 1.0 : 1.5}
          color={isDark ? '#1e293b' : '#ffffff'}
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={isDark ? 0.8 : 1.2}
          color={isDark ? '#475569' : '#f1f5f9'}
        />
        <pointLight 
          position={[0, 10, 0]} 
          intensity={isDark ? 0.6 : 1.0}
          color="#ff006e"
        />
        
        {/* Stars for dark mode */}
        {isDark && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
        
        {/* Environment */}
        <Environment preset={isDark ? 'night' : 'sunset'} />
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        
        {/* Vibrant 3D Objects */}
        <VibrantCube position={[-4, 0, 0]} size={1.2} speed={0.8} />
        <VibrantSphere position={[4, 0, 0]} radius={0.8} speed={1.2} />
        <VibrantTorus position={[0, 0, 0]} radius={1.0} tubeRadius={0.3} speed={1.0} />
        
        <VibrantCube position={[-2, 3, 0]} size={0.8} speed={1.1} />
        <VibrantSphere position={[2, -3, 0]} radius={0.6} speed={0.9} />
        <VibrantTorus position={[-3, -2, 0]} radius={0.7} tubeRadius={0.2} speed={1.3} />
        
        <VibrantCube position={[3, 2, 0]} size={1.0} speed={0.7} />
        <VibrantSphere position={[-1, -1, 0]} radius={0.5} speed={1.4} />
        <VibrantTorus position={[1, 1, 0]} radius={0.8} tubeRadius={0.25} speed={1.1} />
        
        {/* Additional floating objects */}
        <VibrantCube position={[-5, 1, 0]} size={0.6} speed={1.0} />
        <VibrantSphere position={[5, -1, 0]} radius={0.4} speed={0.8} />
        <VibrantTorus position={[0, 4, 0]} radius={0.6} tubeRadius={0.15} speed={1.2} />
        <VibrantCube position={[0, -4, 0]} size={0.7} speed={0.9} />
      </Canvas>
    </div>
  );
};

export default FullScreenScene; 