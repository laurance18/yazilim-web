import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Model from "./Iss";


const LogoCanvas = () => {
  return (

    <Canvas>
        <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Stage environment="city" intensity={0.6}>
            <Model />
        </Stage>
    </Canvas>
  )
}

export default LogoCanvas