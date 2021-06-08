// Import local state from react to save informations
// Import effect from react to to create side effects
import { useState, useEffect } from 'react'
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

  // Create an effect variable, pass it a function which returns an alert (1st parameter) and "total" dependencies array (2nd parameter)
  // Means that the alert will appear only when "total" changes
  useEffect(() => {
    alert(`I'll have to pay ${total}€ 💸`)
  }, [total])

  // Create an effect variable, pass it a function which returns an update of meta title (1st parameter) and "total" dependencies array (2nd parameter)
  // Means that the meta title will update with cart amount only when "total" changes
  useEffect(() => {
    document.title = `TJH: ${total}€ buying`
  }, [total])

  // Check if the cart is opened or close
  return isOpen ? (

    // If the cart is opened
    <div className='tjh-cart'>

      {/* Add a closed button because the cart is opened */}
      {/* Listen an "onClick" event, pass it the function "setIsOpen" to save input value in local state */}
      {/* Then, you have an access to the value in "isOpen" */}
      <button className='tjh-cart-toggle-button' onClick={() => setIsOpen(false)}>Close the cart</button>

      {/* Check if the cart is full or empty */}
      {cart.length > 0 ? (
        
        // If the cart is full
        <div>

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

        // Otherwise, the cart is empty
        <div>Your cart is empty</div>

      )}

    </div>

  ) : (

    // Otherwise, the cart is closed
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