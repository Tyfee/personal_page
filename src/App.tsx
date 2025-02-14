import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Decal, PerspectiveCamera } from '@react-three/drei'
import { Bloom, EffectComposer, LensFlare, Pixelation } from '@react-three/postprocessing'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { AmbientLight, Scene } from 'three'
import { useSpring } from '@react-spring/three'
import * as THREE from 'three'
import { Vector3 } from 'three'
import { updateCamera } from '@react-three/fiber/dist/declarations/src/core/utils'
import { DecalGeometry } from 'three/examples/jsm/Addons.js'
import tf from './assets/tf.jpg'
import op from './assets/artpoin-one-piece-cute3.png'
import mk from './assets/monokuma.png'
import ymo from './assets/ymo.png'
import jags from './assets/jacksonville-jaguars-nfl-logo-sticker-ua5e2-x450.png'
import ukiyoe from './assets/7c066eedac98ecc7b06613a51ccf569f_t-removebg-preview.png'

import { texture } from 'three/tsl'
import { Html } from '@react-three/drei'
import Computer1 from './Computer1'
import Computer2 from './Computer2'
import Computer3 from './Computer3'

function Computer() {
  const gltf = useLoader(GLTFLoader, '/old_computers.glb')
  const computerRef = useRef()

  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child: any) => {
    
      })
    }
  }, [gltf])

  return <primitive ref={computerRef} position={[0, -5, 0]} scale={[3, 3, 3]} object={gltf.scene} />
}


function App() {
  const [shine, setShine] = useState(0)
  const [currentComputer, setCurrentComputer] = useState(-1)
  const [hovered, setHovered] = useState(false)
  const [cameraPos, setCameraPos] = useState([0,0,5])
  const [light, setLight] = useState('lime')
const [usingComputer, setUsingComputer] = useState(-1)
const cameraRef = useRef(null)


function Camera(){
  const { camera } = useThree()
   cameraRef.current = camera


 useEffect(() => {
    if (cameraRef.current) {
    
  // Assuming cameraRef is your camera object and cameraPos is your target position.
const targetPosition = [cameraPos[0], cameraPos[1], cameraPos[2]];
const currentPosition = cameraRef.current.position.toArray();

// Smoothness factor, tweak for faster or slower movement.
const smoothFactor = 0.9;

// In your update loop (like in a render or animation loop):
const lerpPosition = [
  currentPosition[0] + (targetPosition[0] - currentPosition[0]) * smoothFactor,
  currentPosition[1] + (targetPosition[1] - currentPosition[1]) * smoothFactor,
  currentPosition[2] + (targetPosition[2] - currentPosition[2]) * smoothFactor
];

cameraRef.current.position.set(lerpPosition[0], lerpPosition[1], lerpPosition[2]);


if(usingComputer == 1){
  cameraRef.current.rotation.set(0,-.4,0);
}
if(usingComputer == 2){
  cameraRef.current.rotation.set(0,1.02,0);
}
if(usingComputer == -1){
  cameraRef.current.rotation.set(0,0,0);
}
  
    }
  }, [cameraPos]);
}

const goTo = (index: number, pos: Array<number>) => {
 
    setCameraPos([pos[0], pos[1], pos[2]])
  setTimeout(() => {

    setUsingComputer(index)

    setHovered(false)
  }, 100)

  


 
  
 }


 
const Collision = (props: any) => {

  return(
    <>
 {usingComputer == -1 && <mesh 
  onPointerOut={() =>{ 
    setCurrentComputer(-1); 
    setHovered(false)}} 
  
  onPointerOver={(e) => {

    setCurrentComputer(props.index); setHovered(true)
   
  }
  
  } rotation={props.rotation} scale={props.scale} position={props.position}>
  <boxGeometry />
  <meshPhongMaterial 
  color={light} 
  
  emissive={light}  transparent={true} opacity={currentComputer === props.index ? .7 : 0}/>
</mesh>}
</>
)
}

  useEffect(() => {
    const interval = setInterval(() => {
      setShine((prevShine) => (prevShine < 20 ? prevShine + 2 : prevShine - 2));
    }, 100); // Adjust interval time as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); 

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const Sticker = (props: any) => {
    const tex = useLoader(THREE.TextureLoader, props.texture)
  
    // Check if the texture is loaded before rendering
    if (!tex) return null
  
    return (
      <mesh scale={[0.2, 0.2, 0.1]} position={props.position}>
        {props.shape == 0  &&<circleGeometry />}
        {props.shape == 1  &&<planeGeometry />}
        <meshStandardMaterial
        transparent={true}
        map={tex} />
      </mesh>
    )
  }


const returnToRoom =() => {
  setUsingComputer(-1)
  setCurrentComputer(-1)
  goTo(-1, [0,0,5])

}

const changeColor = (color: string) => {
setLight(color)
}

  return (
    <>   <div onClick={() => {
      if (usingComputer == -1) {
        switch(currentComputer){
          case 0:
            goTo(0, [1, 1.3, -5]);
            break;
          case 1:
            goTo(1, [4, -2, -2.8]);
            break;
          case 2:
            goTo(2, [-2, -1, -2.5]);
            break;
          default:
            // Optionally handle default case or do nothing
            break;
        }}
    }} style={{width: '100vw', height: '100vh'}} id="canvas-container">
      <Canvas>         
<PerspectiveCamera
position={new Vector3(cameraPos[0], cameraPos[1], cameraPos[2])}/>
       <Camera/>
        <pointLight position={[0,1,-4]} intensity={shine / 1.8} color={light}/>
       <Collision index={0} scale={[2.5,1.8,1]} position={[.56,1, -4]}/>
   <Sticker shape={0} position={[0, -0.15, -7.200]} texture={tf}/>
   <Sticker shape={0} position={[2.9, .5, -7.200]} texture={op}/>
   
   <Sticker shape={0} position={[-1.24, 2, -7.200]} texture={mk}/>
   
   <Sticker shape={0}  position={[2.89, 2.2, -7.200]} texture={ymo}/>
   
   <Sticker shape={0}  position={[2.8, -0.1, -7.200]} texture={jags}/>



      { usingComputer == 0 &&
<>
<mesh scale={[3.45,2.55,1]} position={[.82,1.43,-7.2]}>
<planeGeometry />
  <meshPhongMaterial
  />
  <Computer1 onShut={returnToRoom}/>
  <pointLight
intensity={10}
color={light}
decay={.2}
/>
  </mesh>
  
  
  <EffectComposer>
  
  
  <Pixelation
    granularity={3} // pixel granularity
  />
 
      </EffectComposer>
  </>
  }
  


  { usingComputer == 1 &&
<>
<mesh scale={[3.45,2.55,1]} position={[.82,1.43,-7.2]}>
<planeGeometry />
  <meshPhongMaterial 
  />
  <Computer2 onShut={returnToRoom}/>
<pointLight
intensity={10}
color={light}
decay={.2}
/>
  </mesh>
  
  
  <EffectComposer>
  
  
  <Pixelation
    granularity={3} // pixel granularity
  />
 
      </EffectComposer>
  </>
  }




{ usingComputer == 2 &&
<>
<mesh scale={[3,2,1]} position={[-7,0,0]}>
<planeGeometry />
  <meshPhongMaterial
  
  />
  <Computer3 
  changeColor={changeColor}
  onShut={returnToRoom}/>
<pointLight
intensity={10}
color={light}
decay={.2}
/>
  </mesh>
  
  
  <EffectComposer>
  
  
  <Pixelation
    granularity={3} // pixel granularity
  />
 
      </EffectComposer>
  </>
  }




        <pointLight position={[4,-2,-2]} intensity={shine} color={light}/>
        <Collision rotation={[0,-.3,0]} index={1} scale={[3.3,2.4,.1]} position={[4.9,-1.85,-4]}/>

        <pointLight position={[-6,-2,-1]} intensity={shine} color={light}/>
        <Collision rotation={[0,-5.1,0]} index={2} scale={[2.1,1.8,.1]} position={[-5.2,-.87,0.45]}/>
        

        <ambientLight color={'white'} intensity={1}/>
     <Computer/>
        </Canvas>
   </div>
    <div style={{position: 'absolute', bottom: 0, left: "2%"}}>
      <a href="https://sketchfab.com/3d-models/old-computers-7bb6e720499a467b8e0427451d180063">3D MODEL </a>
    </div>
    </>
  )
}

export default App
