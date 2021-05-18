// Import plantList datas
import { plantList } from '../datas/plantList'
// Import PlanItem component
import PlantItem from './PlantItem'
// Import ShoppingList.css file to add style
import '../styles/ShoppingList.css'

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
					<li key={category} className='tjh-plant-item'>{category}</li>
				)}
			</ul>
			<ul className='tjh-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem id={id} cover={cover} name={name} water={water} light={light} />
				))}
			</ul>
		</div>
	)
}

// Export file to import it in "App.js"
export default ShoppingList
