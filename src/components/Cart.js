// Import local state from react to save informations
import { useState } from 'react'
// Import Cart.css file to add style
import '../styles/Cart.css'

// Create a Cart component, with "cart" and "updateCart" as props from "App.js" parent local state
function Cart({ cart, updateCart }) {

  // Create an Open Cart state variable, init at "true", with "isOpen" as init variable and "setIsOpen" as setting function
  const [isOpen, setIsOpen] = useState(true)

  // Use an accumalator to try to reduce each list value to one value
  const total = cart.reduce((accumulator, plantType) =>
    // If plant already exists in accumulator, send back accumulator and go to next value
    // If not, push the category inside a new accumulator array
    accumulator + plantType.amount * plantType.price,
    0
  )

  return isOpen ? (

    // Add className on cart to then manage style
    <div className='tjh-cart'>

      {/* Add a closed button because the cart is opened */}
      {/* Listen an "onClick" event, pass it the function "setIsOpen" to save input value in local state */}
      {/* Then, you have an access to the value in "isOpen" */}
      <button className='tjh-cart-toggle-button' onClick={() => setIsOpen(false)}>Close the cart</button>

      {/* Add a Cart title */}
      <h2>Cart</h2>

      {/* Iterate on cart */}
      {/* You have an acces to the following props because "cart" is defined in the parent local state */}
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ x {amount}
        </div>
      ))}

      {/* Add the total price */}
      <h3>Total : {total}€</h3>
      
      {/* Add a button to empty the cart */}
      {/* Listen an "onClick" event, pass it the function "setIsFull" to save input value in local state */}
      {/* Then, you have an access to the value in "isFull" */}
      <button onClick={() => updateCart([])}>Empty the cart</button>

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