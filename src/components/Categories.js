// Import Cart.css file to add style
import '../styles/Categories.css'

function Categories({ activeCategory, setActiveCategory }) {

  return (
    <select className='tjh-categories'>
      <option className='tjh-categories-select'></option>
      <option className='tjh-categories-select'></option>
      <option className='tjh-categories-select'></option>
      <option className='tjh-categories-select'></option>
    </select>

  )
}

// Export file to import it in "ShoppingList.js"
export default Categories