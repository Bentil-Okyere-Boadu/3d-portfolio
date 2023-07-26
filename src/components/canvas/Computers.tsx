import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

type Props = {
  isMobile: boolean
}

const Computers = ({isMobile} : Props) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene} 
        scale={isMobile? 0.5 : 0.75}
        position={isMobile? [0, -2.8, -0.85] : [0, -3.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        />
    </mesh>
  );
};

const ComputerCanvas = () => {

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    //Listener for changes the screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');

    setIsMobile(mediaQuery.matches);

    // Define callback fxn to handle changes to the media query
    const handleMQChange = (event: any) => {
      setIsMobile(event.matches)
    }

    //Callback fxn as a listener for the changes to the media query
    mediaQuery.addEventListener('change', handleMQChange);


    //remove the listenr when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMQChange);
    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
     <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
         /> 
         <Computers isMobile={isMobile}/>
      </Suspense> 
      <Preload all/>
    </Canvas>
  );
};

export default ComputerCanvas;
