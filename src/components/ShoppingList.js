// Import plantList datas
import { plantList } from '../datas/plantList'
// Import PlanItem component
import PlantItem from './PlantItem'
// Import ShoppingList.css file to add style
import '../styles/ShoppingList.css'

// Create a ShoppingList component, with "cart" and "updateCart" as props from "App.js" parent local state
function ShoppingList({ cart, updateCart }) {

  // Use an accumalator to try to reduce each list value to one value
	const categories = plantList.reduce((accumulator, plant) =>
    // If category already exists in accumulator, send back accumulator and go to next value
    // If not, push the category inside a new accumulator array
    accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
	)

	{/* You have an acces to the following props thank to "cart" defined in the parent local state */}
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

  // Iterate on categoryList and plantList
	return (
		<div className='tjh-shopping-list'>

			<ul>
				{categories.map((category) => (
          // Do not miss to generate each element key with data value
					<li key={category} className='tjh-plant-item'>{category}</li>
				))}
			</ul>

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
