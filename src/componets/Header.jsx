import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  const cartItems = useSelector(state => state.cart.items)

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <header className="header">
      <h2>Paradise Nursery</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">
          <FaShoppingCart />
          <span>{totalItems}</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header