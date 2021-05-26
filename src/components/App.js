// Import Banner, Cart, ShoppingList and Footer components to use it in App component
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'

// Create an App component
function App() {
  // Create a Cart state variable, with "cart" as init variable and "updateCart" as setting function
  const [cart, updateCart] = useState([])


  return (
    <div>
      
      <Banner />
      
      <div className='tjh-layout-inner'>
        <Cart />
        <ShoppingList />
      </div>
      
      <Footer />
    
    </div>
  )
}

// Export file to import it in "index.js"
export default App