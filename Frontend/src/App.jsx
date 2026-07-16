import Navbar from "./Components/Navbar"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Topbar from "./Components/Topbar"
import Products from "./Pages/Products"
import ProductDetails from "./Pages/ProductDetails"

function App() {
  return (
    <Router>
      <Topbar/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/detail/:id" element={<ProductDetails/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
