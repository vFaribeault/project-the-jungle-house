// Import CareScale component
import CareScale from './CareScale'
// Import PlantItem.css file to add style
import '../styles/PlantItem.css'

// PlanItem component takes 5 props
function PlantItem({ name, cover, id, light, water }) {
  return (
		<li key={id} className='tjh-plant-item'>
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
