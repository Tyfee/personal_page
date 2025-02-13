import winamp from '../assets/Winamp-Windows-11.png'

const Music = () => {
    return (
        <>
        <div style={{height: '400px'}}>
<img style={{pointerEvents: 'none',width: '780px'}} src={winamp}/>
     
     <a style={{padding: '4px', color: '#ff3311', textDecoration: 'underline'}} href='https://soundcloud.com/layinsalt'>Soundcloud</a>
     <a style={{padding: '4px', color: 'darkGreen', textDecoration: 'underline'}} href='https://soundcloud.com/layinsalt'>Spotify</a>
     <a style={{padding: '4px', color: 'royalBlue', textDecoration: 'underline'}} href='https://soundcloud.com/layinsalt'>Bandcamp</a>
     <a style={{padding: '4px', color: 'red', textDecoration: 'underline'}} href='https://soundcloud.com/layinsalt'>Youtube</a>
      
        </div>
        </>
    )
}

export default Music