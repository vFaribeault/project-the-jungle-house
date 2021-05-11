// Import ShoppingList.css file to add style
import '../styles/ShoppingList.css'
// Import plantList array
import { plantList } from '../datas/plantList'

// Create a ShoppingList component
function ShoppingList() {
  // Use an accumalator to try to reduce each list value to one value
	const categoryList = plantList.reduce((accumulator, plant) =>
    // If category already exists in accumulator, send back accumulator and go to next value
    // If not, push the category inside a new accumulator array
    accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
	)
  // Iterate on categoryList and plantList
	return (
		<div>
			<ul>
				{categoryList.map((category) =>
          // Do not miss to generate each element key with data value
					<li key={category}>{category}</li>
				)}
			</ul>
			<ul>
				{plantList.map((plant) =>
          // Do not miss to generate each element key with id
					<li key={plant.id}>
            {plant.name + ' '}
            {plant.isBestSale ? <span>🔥</span> : null}
          </li>
				)}
			</ul>
		</div>
	)
}

// Export file to import it in "App.js"
export default ShoppingList
