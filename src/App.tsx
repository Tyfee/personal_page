import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import icon from './assets/logo-DA53tF8t.png'
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

import terminal_ic from './assets/baixados.png'
import music_ic from './assets/cd_audio_cd_a-4.png'
import video_ic from './assets/media_player_file-2.png'
import computer_icon from './assets/baixados_.png'
import shut_icon from './assets/shut_down_normal-4.png'
import { texture } from 'three/tsl'
import { Html } from '@react-three/drei'
import Window98 from 'react-ninetyeight'
import Main from './pages/Main'
import Terminal from './pages/Terminal'
function Computer() {
  const gltf = useLoader(GLTFLoader, '/old_computers.glb')
  return <primitive position={[0,-5,0]} scale={[3,3,3]} object={gltf.scene} />
}



function App() {
  const [shine, setShine] = useState(0)
  const [currentComputer, setCurrentComputer] = useState(-1)
  const [hovered, setHovered] = useState(false)
  const [cameraPos, setCameraPos] = useState([0,0,5])
const [usingComputer, setUsingComputer] = useState(-1)
const [mainIndex, setMainIndex] = useState(0)
const cameraRef = useRef(null)
const programs = [
  "pay me epitath records!!",
  "terminal terminal",
  "videos about literally nothing",
  "some of my below-average music"
]

function Camera(){
  const { camera } = useThree()
   cameraRef.current = camera


 useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(cameraPos[0], cameraPos[1], cameraPos[2]);
      cameraRef.current.updateProjectionMatrix(); // Always update the projection matrix after changing the camera
    }
  }, [cameraPos]);
}

const goTo = (index: number, pos: Array<number>) => {
 
    setCameraPos([pos[0], pos[1], pos[2]])

 setUsingComputer(index)

  setHovered(false)

  


 
  
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
  color={'lime'} 
  
  emissive={'lime'}  transparent={true} opacity={currentComputer === props.index ? .7 : 0}/>
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
        <circleGeometry />
        <meshStandardMaterial
        transparent={true}
        map={tex} />
      </mesh>
    )
  }

  return (
    <>   <div onClick={() => {
      if (usingComputer == -1) {
        switch(currentComputer){
          case 0:
            goTo(0, [1, 1.3, -5]);
            break;
          case 1:
            goTo(1, [4, -2, 0]);
            break;
          case 2:
            goTo(2, [-6, -1, 2]);
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
        <pointLight position={[0,1,-4]} intensity={shine} color={'lime'}/>
       <Collision index={0} scale={[2.5,1.8,1]} position={[.56,1, -4]}/>
   <Sticker position={[0, -0.15, -7.200]} texture={tf}/>
   <Sticker position={[2.9, .5, -7.200]} texture={op}/>
   
   <Sticker position={[-1.24, 2, -7.200]} texture={mk}/>
   { usingComputer == 0 &&
<>
<mesh scale={[3.45,2.55,1]} position={[.82,1.43,-7.2]}>
<planeGeometry />
<Html  
scale={[1,1, 1]}
 position={[-.4,.4,0]}
    style={{
      borderRadius: '50px',       
      textAlign: 'center', 


    animation: 'flicker 0.7s infinite alternate',
    
  }}
   as='div'>
    <Window98
    icon={icon}
    actions={['minimize', 'close']}
    width={"800px"}
    color={'#003303'}
    color2={'#517866'}
    title={programs[mainIndex]}
    content={<>
    {mainIndex == 0 ?<Main/>
    : mainIndex == 1? <Terminal/>
    : mainIndex == 2? <Terminal/>
    : mainIndex == 3? <Terminal/>
    
    : mainIndex == 4? <Terminal/>
  : <></>}
    </>}
    />


    <p>
      <div style={{display: 'flex'}}>

      <img onClick={() => setMainIndex(0)} className='program_icon' src={computer_icon}/>
<img onClick={() => setMainIndex(1)} className='program_icon' src={terminal_ic}/>
<img onClick={() => setMainIndex(2)} className='program_icon' src={video_ic}/>
<img onClick={() => setMainIndex(3)} className='program_icon' src={music_ic}/>
<img onClick={() => setMainIndex(4)} className='program_icon' src={video_ic}/>
<img onClick={() => {
  console.log('huu')
  setUsingComputer(-1)
  setCurrentComputer(-1)
  goTo(-1, [0,0,5])}} className='program_icon' src={shut_icon}/>

      </div>
    </p>
  </Html>
  <meshPhongMaterial
  />
<pointLight
intensity={10}
color={'lime'}
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
  

        <pointLight position={[4,-2,-2]} intensity={shine} color={'lime'}/>
        <Collision rotation={[0,-.3,0]} index={1} scale={[3.3,2.4,.1]} position={[4.9,-1.85,-4]}/>
        
        <pointLight position={[-6,-2,-1]} intensity={shine} color={'lime'}/>
        <Collision rotation={[0,-5.1,0]} index={2} scale={[2.1,1.8,.1]} position={[-5.2,-.87,0.45]}/>
        

        <ambientLight intensity={1.0}/>
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
