import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Success from './components/Success/Success'
import Work from './components/Work/Work'

function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      <Success/>
      <Services/>
      <Work/>
    </>
  )
}

export default App
