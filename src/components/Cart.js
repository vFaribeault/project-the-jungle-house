// Import local state from react to save informations
import { useState } from 'react'
// Import Cart.css file to add style
import '../styles/Cart.css'

// Create a Cart component
function Cart() {
  // Create variable for the monstera price
  const monsteraPrice = 8
  // Create a Cart stateful component init with 0€
  // "cart" is the init variable and "updateCart" the setting function
  const [cart, updateCart] = useState(0)

  // Add className on cart to then manage style
  return (
    <div className='tjh-cart'>
      <h2>Cart</h2>
      <div>
        Monstera : {monsteraPrice}€
        <button onClick={() => updateCart(cart + 1)}>Add</button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
    </div>
  )
}

// Export file to import it in "App.js"
export default Cart