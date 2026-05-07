import { useSelector, useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from '../redux/CartSlice'

import { Link } from 'react-router-dom'
import Header from './Header'

const CartItem = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cart.items)

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const totalPlants = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <>
      <Header />

      <div className="cart-page">

        <h2>Total Plants: {totalPlants}</h2>

        <h2>Total Cost: ${totalCost}</h2>

        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>Total: ${item.price * item.quantity}</p>

              <div className="buttons">

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <button
                  onClick={() =>
                    dispatch(removeItem(item.id))
                  }
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        ))}

        <div className="cart-actions">
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>

          <button
            onClick={() => alert('Coming Soon')}
          >
            Checkout
          </button>
        </div>

      </div>
    </>
  )
}

export default CartItem