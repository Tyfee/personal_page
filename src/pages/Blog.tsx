const Blog = () => {
   
   const Post = ({title, text, image} : any) => {
    return (
        <>
      <div style={styles.container}>
      {image && <img src={image} alt="Post" style={styles.image} />}
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.text}>{text}</p>
    </div>
        </>
    )
   }
   
   const styles = {
    container: {
      backgroundColor: '#fff', 
      border: '3px solid #000', 
      width: '80%',
      maxWidth: '800px',
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Times New Roman, serif',
      color: '#000', 
    },
    title: {
      fontFamily: 'Verdana, Geneva, sans-serif', 
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      margin: '0 0 15px',
    },
    text: {
      fontFamily: 'Arial, Helvetica, sans-serif', 
      fontSize: '1rem',
      lineHeight: '1.6',
      textAlign: 'justify', 
    },
    image: {
      display: 'block',
      width: '50%',
      margin: '20px 0',
      pointerEvents: 'none'
    },
  };
  

    return (
        <>
           <div style={{height: '400px', overflow: 'scroll'}}>
           <h1 style={{color: 'black'}}>how to build an ocean</h1> 
       <p style={{color: 'grey'}}>a blog about absolutely nothing i can't stress this enough omg</p>
       <p><Post  title="What up buckaroo"
        text="This is a sample post, if i ever post anything here, it would look like this."
        image="https://i.imgflip.com/5tyxhy.png">
        
        </Post></p>
        </div>
        </>
    )
}

export default Blog;