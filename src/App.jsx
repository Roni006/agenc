import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Success from './components/Success/Success'

function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      <Success/>
      <Services/>
    </>
  )
}

export default App
