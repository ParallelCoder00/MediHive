import Navbar from "./Components/Navbar"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Topbar from "./Components/Topbar"
import Products from "./Pages/Products"
import ProductDetails from "./Pages/ProductDetails"
import CartPage from "./Pages/CartPage"
import { CartProvider } from "./Context/CartProvider"

function App() {
  return (
    <CartProvider>
      <Router>
        <Topbar/>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/detail/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  )
}

export default App
