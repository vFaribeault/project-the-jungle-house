// Import CareScale component
import CareScale from './CareScale'
// Import PlantItem.css file to add style
// import '../styles/PlantItem.css'

// Declare a function to call when you'll click on an item
function handleClick(plant) {
	alert(`Do you want to buy 1 ${plant} ? Very good choice !`)
}

// Create a PlanItem component which takes 5 props
function PlantItem({ name, cover, id, light, water }) {
  return (
		// Declare (listen) an 'onClick' event, pass it 'handleClick' function with the name as argument
		<li key={id} className='tjh-plant-item' onClick={() => handleClick(name)}>
			<img className='tjh-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
        {/* Use CareScale component with a "type" and a "value" props for both water and light */}
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

// Export file to import it in "App.js"
export default PlantItem
