// Import CareScale component
import CareScale from './CareScale'
// Import PlantItem.css file to add style
import '../styles/PlantItem.css'

// Declare a function to call when you'll ckick on an item
function handleClick(e) {
	alert(`Vous voulez acheter 1 ${e} ? Très bon choix 🌱✨`)
}

// PlanItem component takes 5 props
function PlantItem({ name, cover, id, light, water }) {
  return (
		// Declare an 'onClick' event, pass it 'handleClick' function with the name as argument
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
