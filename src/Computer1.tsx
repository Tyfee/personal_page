import { Html } from "@react-three/drei"
import { useState } from "react"
import Window98 from "react-ninetyeight"
import Main from "./pages/Main"
import Terminal from "./pages/Terminal"
import Video from "./pages/Video"
import Music from "./pages/Music"
import terminal_ic from './assets/baixados.png'
import music_ic from './assets/cd_audio_cd_a-4.png'
import video_ic from './assets/media_player_file-2.png'
import computer_icon from './assets/baixados_.png'

import icon from './assets/logo-DA53tF8t.png'
import shut_icon from './assets/shut_down_normal-4.png'
const Computer1 = (props: any) => {
    
    const [mainIndex, setMainIndex] = useState(0)
    const programs = [
      "pay me epitath records!!",
      "terminal terminal",
      "videos about literally nothing",
      "some of my below-average music"
    ]
    
    return (
        <>
        
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
    : mainIndex == 2? <Video/>
    : mainIndex == 3? <Music/>
    
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
<img onClick={props.onShut} className='program_icon' src={shut_icon}/>

      </div>
    </p>
  </Html>
        </>
    )
}

export default Computer1