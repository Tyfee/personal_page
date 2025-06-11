import { EffectComposer, Pixelation } from "@react-three/postprocessing"
import { useEffect, useRef } from "react"
import * as THREE from 'three'
const VideoPlane = (props: any) => {
  const textureRef = useRef<THREE.VideoTexture>()
useEffect(() => {
  const video = document.createElement('video')
  video.src = `/videos/${props.videoName}.mp4`
  video.crossOrigin = 'anonymous'
  video.loop = true
  video.muted = true
  video.playsInline = true
  video.autoplay = true

  video.play().then(() => {
    console.log("Video is playing:", video)
    const texture = new THREE.VideoTexture(video)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.format = THREE.RGBFormat
    textureRef.current = texture
  }).catch((e) => {
    console.error("Error playing video:", e)
  })
}, [])


  return (
<>
   <pointLight color={props.color} 
   scale={[1,1,1]}
   intensity={23} 
   position={props.lightPosition} 
 />
    <mesh 
    scale={props.scale}
    position={props.position}
    rotation={props.rotation}
    >
      <planeGeometry args={[4, 2.25]} />
      
        <EffectComposer>
        

        <Pixelation
          granularity={1} 
        />
       
            </EffectComposer>
      {textureRef.current && (
        <meshBasicMaterial map={textureRef.current} toneMapped={false} />
      )}
    </mesh>
    </>
  )
}

export default VideoPlane