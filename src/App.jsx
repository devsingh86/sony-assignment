import Calendar, {eventData} from './components/Calendar'

function App() {

  return (
    <>
      <Calendar events={eventData.events} />
    </>
  )
}

export default App
