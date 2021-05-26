// Import local state from react to save informations
import { useState } from 'react'
// Import Cart.css file to add style
import '../styles/Cart.css'

// Create a Cart component, with "cart" and "updateCart" as props from "App.js" parent local state
function Cart({ cart, updateCart }) {

  // Create variable for the monstera price
  const monsteraPrice = 8
  // Create an Open Cart state variable, init at "true", with "isOpen" as init variable and "setIsOpen" as setting function
  const [isOpen, setIsOpen] = useState(true)

  return isOpen ? (

    // Add className on cart to then manage style
    <div className='tjh-cart'>

      {/* Add a closed button because the cart is opened */}
      {/* Listen an "onClick" event, pass it the function "setIsOpen" to save input value in local state */}
      {/* Then, you have an access to the value in "isOpen" */}
      <button className='tjh-cart-toggle-button' onClick={() => setIsOpen(false)}>Close the cart</button>

      {/* Add a Cart title */}
      <h2>Cart</h2>

      {/* Add the total price */}
      <h3>Total : {monsteraPrice * cart}€</h3>
      
      {/* Add a button to empty the cart */}
      {/* Listen an "onClick" event, pass it the function "setIsFull" to save input value in local state */}
      {/* Then, you have an access to the value in "isFull" */}
      <button onClick={() => updateCart(0)}>Empty the cart</button>

    </div>

  ) : (
    // Add an opened button because the cart is closed
    // Listen an "onClick" event, pass it the function "setIsOpen" to save input value in local state
    // Then, you have an access to the value in "isOpen"
    <div className='tjh-cart-closed'>
      <button className='tjh-cart-toggle-button' onClick={() => setIsOpen(true)}>Open the cart</button>
    </div>
  )
  
}

// Export file to import it in "App.js"
export default Cart