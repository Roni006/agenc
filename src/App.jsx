import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Review from './components/Review/Review'
import Services from './components/Services/Services'
import Success from './components/Success/Success'
import Whychoose from './components/Whychoose/Whychoose'
import Work from './components/Work/Work'

function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      <Success/>
      <Services/>
      <Work/>
      <Whychoose/>
      <Review/>
    </>
  )
}

export default App
