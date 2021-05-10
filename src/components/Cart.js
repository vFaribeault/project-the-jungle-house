// Import CSS file to add style
import '../styles/Cart.css'

// Create a cart component
function Cart() {
  // Create variables for each price
  const priceMonstera = 8
  const priceIvy = 10
  const priceBunchOfFlowers = 15
  // Add a className to put some CSS
  return (
    <div className='tjh-cart'>
      <h2>My cart</h2>
        <ul>
          <li>Monstera : { priceMonstera }€</li>
          <li>Ivy : { priceIvy }€</li>
          <li>Bunch of flowers : { priceBunchOfFlowers }€</li>
        </ul>
        <p>Total price : { priceMonstera + priceIvy + priceBunchOfFlowers }€</p>
    </div>
  )
}

// Export file to import it in "index.js"
export default Cart