// Import local state from react to save informations
import { useState } from 'react'
// Import Cart.css file to add style
import '../styles/Categories.css'

function Categories() {
  const [category, updateCategory] = useState([])
  
  return (
    <select className='tjh-categories'>
      <option className='tjh-categories-select'></option>
      <option className='tjh-categories-select'></option>
      <option className='tjh-categories-select'></option>
      <option className='tjh-categories-select'></option>
    </select>

  )
}

// Export file to import it in "App.js"
export default Categories