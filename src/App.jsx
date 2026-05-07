import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import AboutUs from './components/AboutUs'

function Home() {
  return (
    <div className="landing">

      <AboutUs />

      <Link to="/products">
        <button className="start-btn">
          Get Started
        </button>
      </Link>

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App