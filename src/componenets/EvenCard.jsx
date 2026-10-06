import '../App.css'
const EvenCard = (props) => {
    const {id,name,venue,date,registered,capacity}=props
  return (
    <div className='card'>
        <h1>{id}.{name}</h1>
        <h2>{venue}</h2>
        <h3>{date}</h3>
        <h3>Number of registered {registered}</h3>
        {registered>capacity ? 
    <h4 className='in'>Registration Open</h4>: <h4 className='out'>Registration closed</h4>    
    }        
      
    </div>
  )
}

export default EvenCard
