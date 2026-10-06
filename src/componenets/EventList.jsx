
import EvenCard from './EvenCard'
const EventList = (props) => {
  return (
    <div className='list'>
      {props.details.map((elems,idx)=>{
        return <div key={idx}>
            <EvenCard id={elems.id}
        name={elems.eventName}
        venue={elems.venue}
        date={elems.date}
        registered={elems.registered}
        capacity={elems.capacity}
        ></EvenCard>
        </div>
      })}
      
    </div>
  )
}

export default EventList
