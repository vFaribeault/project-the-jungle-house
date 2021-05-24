// Import Banner, Cart, ShoppingList and Footer components to use it in App component
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

// Create an App component
function App() {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer />
    </div>
  )
}

// Export file to import it in "index.js"
export default App