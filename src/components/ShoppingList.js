// Import plantList datas
import { plantList } from '../datas/plantList'
// Import PlanItem component
import PlantItem from './PlantItem'
// Import ShoppingList.css file to add style
import '../styles/ShoppingList.css'

// Create a ShoppingList component, with "cart" and "updateCart" as props from "App.js" parent local state
function ShoppingList({ cart, updateCart }) {

  // Use an accumalator to try to reduce each list value to one value
	const categoryList = plantList.reduce((accumulator, plant) =>
    // If category already exists in accumulator, send back accumulator and go to next value
    // If not, push the category inside a new accumulator array
    accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
	)

  // Iterate on categoryList and plantList
	return (
		<div className='tjh-shopping-list'>

			<ul>
				{categoryList.map((category) => (
          // Do not miss to generate each element key with data value
					<li key={category} className='tjh-plant-item'>{category}</li>
				))}
			</ul>

			<ul className='tjh-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<div key={id}>
						<PlantItem cover={cover} name={name} water={water} light={light} />
						{/* Add a button to add the plan to the cart */}
      			{/* Listen an "onClick" event, pass it the function "updateCart" to save input value in local state */}
      			{/* Then, you have an access to the value in "cart" */}
						<button onClick={() => updateCart(cart + 1)} >Add</button>
					</div>
				))}
			</ul>

		</div>
	)
}

// Export file to import it in "App.js"
export default ShoppingList
