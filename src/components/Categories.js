// Import Cart.css file to add style
import '../styles/Categories.css'

// Create a Categories component, with "categories", "activeCategory" and "setActiveCategory" as props from "ShoppingList.js" parent local state
function Categories({ categories, activeCategory, setActiveCategory }) {

	return (
		<div className='tjh-categories'>

      {/* Create a dropdown list with name of categories*/}
			<select className='tjh-categories-select' value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
        {/* First option is an empty line */}
				<option value=''>---</option>
        {/* Other options are the categories, so iterate on it */}
				{categories.map((cat) => (
					<option key={cat} value={cat}>{cat}</option>
				))}
			</select>

      {/* Add a button to reinitialize the cart when you click on it */}
      {/* Listen an "onClick" event, pass it the function "setActiveCategory" to save an empty string as input value in local state */}
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>

		</div>
	)
}

// Export file to import it in "ShoppingList.js"
export default Categories