// Import plantList datas
import { plantList } from '../datas/plantList'
// Import CareScale component
import CareScale from './CareScale'
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
			<ul className='tjh-plant-list'>
				{categoryList.map((category) =>
          // Do not miss to generate each element key with data value
					<li  key={category} className='tjh-plant-item'>
            {category}
          </li>
				)}
			</ul>
			<ul className='tjh-plant-list'>
				{plantList.map((plant) =>
          // Do not miss to generate each element key with id
					<li key={plant.id} className='tjh-plant-item'>
            {plant.name}
            {plant.isBestSale ? <span className='tjh-sales'>On sale</span> : null}
						{/* Use CareScale components with a "type" prop for both water and light */}
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
					</li>
				)}
			</ul>
		</div>
	)
}

// Export file to import it in "App.js" ..
export default ShoppingList
