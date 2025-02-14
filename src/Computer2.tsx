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
import notepad_icon from './assets/notepad-4.png'

import icon from './assets/logo-DA53tF8t.png'
import shut_icon from './assets/shut_down_normal-4.png'
import Blog from "./pages/Blog"
const Computer2 = (props: any) => {
    
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
 position={[0.88,-.5,-1]}
    style={{
      borderRadius: '50px',       
      textAlign: 'center', 
      transform:' perspective(200px) rotateY(1deg)',

    animation: 'flicker 0.7s infinite alternate',
    
  }}
   as='div'>
    <Window98
    icon={icon}
    actions={['minimize', 'close']}
    width={"800px"}
    color={'#003303'}
    color2={'#517866'}
    title={'essays, poetry and uhhhhhhhhh'}
    content=
      {mainIndex == 0?
     <Blog/>
        :  mainIndex == 1? <Terminal/> :  <></>
    }
  
    />


    <p>
      <div style={{display: 'flex'}}>

      <img onClick={() => setMainIndex(0)} className='program_icon' src={notepad_icon}/>
<img onClick={() => setMainIndex(1)} className='program_icon' src={terminal_ic}/>
<img onClick={props.onShut} className='program_icon' src={shut_icon}/>

      </div>
    </p>
  </Html>
        </>
    )
}

export default Computer2