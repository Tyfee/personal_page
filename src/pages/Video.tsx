import './video.css'

const Video = () => {
  const videos = [
    {
        title: "whatt",
        url: "",
        views: "",
        date: "",
        duration: '6:00',
        thumb: "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png"
    },
    {
        title: "how to disappear completely",
        url: "",
        views: "",
        date: "",
        duration: '1:34',
        thumb: "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png"
    }
  ]
  const video_render = videos.map((i) => {
    return(
    <>
    <div style={{width: '150px',display: 'flex',flexDirection: 'column', padding: '10px'}}>
        <img className="thumb" src={i.thumb}/>

  <div style={{rowGap: '0px' ,display: 'flex', flexDirection: 'column',alignItems: 'start', textAlign: 'start' }}>
        <a style={{textWrap: 'wrap',textAlign: 'start', textDecoration: 'underline'}} href={`${i.url}`}>{i.title}</a>
<strong  style={{ color: 'black'}}>{i.duration}</strong>

<a style={{textAlign: 'start', color: 'grey'}}>Added: {}</a>
   </div>
   
    </div>
    </>
    )
    })
    return (
        <>
        <div style={{
            border: '1px solid grey',
            display: 'flex',
            height: '400px'}}>
{video_render}

        </div>
        </>
    )
}

export default Video