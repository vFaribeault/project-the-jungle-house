// Import plantList datas
import { plantList } from '../datas/plantList'
// Import PlanItem component
import PlantItem from './PlantItem'
// Import Categories component
import Categories from './Categories'
// Import local state from react to save informations
import { useState } from 'react'
// Import ShoppingList.css file to add style
import '../styles/ShoppingList.css'


// Create a ShoppingList component, with "cart" and "updateCart" as props from "App.js" parent local state
function ShoppingList({ cart, updateCart }) {

	// // Create an Active Category state variable, , init with an empty string, with "activeCategory" as init variable and "setActiveCategory" as setting function
	const [activeCategory, setActiveCategory] = useState('')

  // Use an accumalator to try to reduce each list value to one value
	const categories = plantList.reduce((accumulator, plant) =>
    // If category already exists in accumulator, send back accumulator and go to next value
    // If not, push the category inside a new accumulator array
    accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
	)

	// Create a function to add the plan to the Cart
	// You have an access to the following props thanks to "cart" defined in the parent local state
	function addToCart(name, price) {

		// Check if the plant you want to add is already present in the cart
		const currentPlantSaved = cart.find(
			(plant) => plant.name === name
		)

		// If the plant you add is already present in the cart, create a new array without this new plant with "filter"
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			// Add this new array to "updateCart"
			updateCart([
				// By using the spread operator
				...cartFilteredCurrentPlant,
				// With props (name, price, object amount) inside the new object added
				// Don't forget to incremente the amount of the new plant you let aside
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		
		// Otherwise, get the existing cart and add the new plant as object withn its props
		// Don't forget to initialize the amount of the new plant at "1"
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

  return (
		<div className='tjh-shopping-list'>
			{/* Use Categories components with "activeCategory" and "setActiveCategory" as props */}
			<Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

			{/* Iterate on plantList and use the PlanItem component for each item */}
			<ul className='tjh-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem cover={cover} name={name} water={water} light={light} price={price} />
						{/* Add a button to add the plant to the cart */}
      			{/* Listen an "onClick" event, pass it the function "addToCart" to save input value in local state */}
      			{/* Then, you have an access to values in "name" and "price" */}
						<button onClick={() => addToCart(name, price)} >Add</button>
					</div>
				))}
			</ul>

		</div>
	)
}

// Export file to import it in "App.js"
export default ShoppingList
