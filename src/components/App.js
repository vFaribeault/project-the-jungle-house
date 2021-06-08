// Import Banner, Cart, ShoppingList and Footer components to use it in App component
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'
// Import local state from react to save informations
import { useState, useEffect } from 'react'

// Create an App component
function App() {

  // Declare a savedCart variable using localStorage to get the cart at the 1st page load
	const savedCart = localStorage.getItem('cart')

  // Create a Cart local state variable
  // with "cart" as init variable and "updateCart" as setting function
  // and init it with the parsed savedCart (because its an object) if it exists
  // or an empty array if don't (to get an object array of plan items with their properties)
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  // Create an effect variable to allow the user to save his cart even if he refreshes the page
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
    // Save the cart only after each cart re-render
	}, [cart])

  return (
    <div>
      
      <Banner />
      
      <div className='tjh-layout-inner'>
        {/* Use Cart and ShoppingList components with "cart" and "updateCart" as props */}
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      
      <Footer />
    
    </div>
  )
}

// Export file to import it in "index.js"
export default App