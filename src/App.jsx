
import data from "./dummy/data.json"
import EventList from './componenets/EventList'
const App = () => {
  return (
    <div>
      <EventList details={data}></EventList>
            </div>
  )
}

export default App
