// Create a cart component
function Cart() {
  // Declare the price variables
  const priceMonstera = 8
  const priceIvy = 10
  const priceBunchOfFlowers = 15
  // Return the right HTML with name and price for each article, also the total price
  return (
    <div>
      <h2>My cart</h2>
        <ul>
          <li>Monstera : { priceMonstera }€</li>
          <li>Ivy : { priceIvy }€</li>
          <li>Bunch of flowers : { priceBunchOfFlowers }€</li>
        </ul>
        <p>Total price : { priceMonstera + priceIvy + priceBunchOfFlowers }€</p>
    </div>)
}

export default Cart