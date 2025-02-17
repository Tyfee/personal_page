

import me from '../assets/me.png'
import './main.css'
import soundcloud_ic from '../assets/Social_Media/Minimalistic_Shaded/Soundcloud.png'
import twitch_ic from '../assets/Social_Media/Minimalistic_Shaded/Twitch.png'
import youtube_ic from '../assets/Social_Media/Minimalistic_Shaded/YouTube.png'


const Main = () => {
    return(
        <>
        <div className='div' style={{
            backgroundColor: 'rgb(100, 255,100, .3)',
            height: '400px'}}>
          <div style={{display: 'flex'}}>
            <img className='me' src={me}/>
 
            <div>
    <h1 style={{color: 'black'}}>HOW ARE YOU TODAY?</h1>
    <strong style={{color: 'black'}}>brazilian dude who makes music, videogames and other cronically online shit.</strong>
    <a style={{textDecoration: 'underline'}} href='https://tyfee.top/comission'> want a website like this?</a>
    </div>

    </div>
 <div style={{display: 'flex'}}></div>
<img className='icon' src={soundcloud_ic}/>

<img className='icon' src={twitch_ic}/>



<img className='icon' src={youtube_ic}/>
    </div>
</>
)
}

export default Main;