// Import Banner, Cart and ShoppingList components to use it in App component
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

// Create an App component
function App() {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
    </div>
  )
}

// Export file to import it in "index.js"
export default App