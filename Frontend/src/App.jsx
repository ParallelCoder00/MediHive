import Navbar from "./Components/Navbar"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Topbar from "./Components/Topbar"

function App() {
  return (
    <Router>
      <Topbar/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
