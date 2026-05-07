import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import Header from './Header'

import aloe from '../assets/aloe.jpg'
import fern from '../assets/fern.jpg'
import snake from '../assets/snake.jpg'
import monstera from '../assets/monstera.jpg'
import cactus from '../assets/cactus.jpg'
import peace from '../assets/peace.jpg'

const plants = [
  {
    id: 1,
    name: 'Aloe Vera',
    price: 10,
    image: aloe,
    category: 'Succulents'
  },
  {
    id: 2,
    name: 'Cactus',
    price: 15,
    image: cactus,
    category: 'Succulents'
  },
  {
    id: 3,
    name: 'Fern',
    price: 18,
    image: fern,
    category: 'Indoor'
  },
  {
    id: 4,
    name: 'Peace Lily',
    price: 20,
    image: peace,
    category: 'Indoor'
  },
  {
    id: 5,
    name: 'Snake Plant',
    price: 22,
    image: snake,
    category: 'Air Purifying'
  },
  {
    id: 6,
    name: 'Monstera',
    price: 25,
    image: monstera,
    category: 'Air Purifying'
  }
]

const ProductList = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  return (
    <>
      <Header />

      <div className="products">

        {['Succulents', 'Indoor', 'Air Purifying'].map(category => (
          <div key={category}>
            <h2>{category}</h2>

            <div className="product-grid">

              {plants
                .filter(plant => plant.category === category)
                .map(plant => {

                  const added = cartItems.find(i => i.id === plant.id)

                  return (
                    <div className="card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />

                      <h3>{plant.name}</h3>

                      <p>${plant.price}</p>

                      <button
                        disabled={added}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {added ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  )
                })}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList