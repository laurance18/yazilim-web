import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Stage, useGLTF } from '@react-three/drei';
import { HemisphereLight, PointLight, SpotLight } from 'three';
import Model from './IssLogo';

import { CanvasLoader } from '../Loader';

const Logo = () => {
    const logo = useGLTF("./iss1.gltf");
    return(
        <mesh>
            <HemisphereLight intensity={0.15} groundColor="black" />
            <PointLight intensity={1} />
            <SpotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
            <primitive object={logo.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
        </mesh>
    )
}

const LogoCanvas = () => {
  return (
    // <Canvas
    //     frameloop='demand'
    //     shadows
    //     camera={{ position: [20, 3, 5], fov: 25 }}
    //     gl={{ preserveDrawingBuffer: true }}
    // >
    //     <OrbitControls enableZoom={false} autoRotate />
    //     <mesh>
    //         <boxGeometry args={[5, 5, 5]} />
    //     </mesh>
    //     {/* <Suspense fallback={<CanvasLoader />}>
    //         <OrbitControls enableZoom={false} autoRotate />
    //         <Logo />
    //     </Suspense> */}
    // </Canvas>

    <Canvas>
        <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Stage environment="city" intensity={0.6}>
            <Model />
        </Stage>
    </Canvas>
  )
}

export default LogoCanvas