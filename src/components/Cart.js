// Import local state from react to save informations
import { useState } from 'react'
// Import Cart.css file to add style
import '../styles/Cart.css'

// Create a Cart component
function Cart() {
  // Create variable for the monstera price
  const monsteraPrice = 8

  // Create a Cart stateful component, with "cart" as init variable and "updateCart" as setting function
  // Initialised it at 0€
  const [cart, updateCart] = useState(0)

  return (
    // Add className on cart to then manage style
    <div className='tjh-cart'>
      <h2>Cart</h2>
      <div>
        Monstera : {monsteraPrice}€
        {/* Listen an "onClick" event and pass it the function "updateCart" to save input value in local state */}
				{/* Then, you have an access to the user value in "cart" */}
        <button onClick={() => updateCart(cart + 1)}>Add</button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
    </div>
  )
}

// Export file to import it in "App.js"
export default Cart