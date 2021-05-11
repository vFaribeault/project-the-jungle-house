// Import ShoppingList.css file to add style
import '../styles/ShoppingList.css'

// Create a plantList array
const plantList = [
  'monstera',
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier'
]

// Create a ShoppingList component
function ShoppingList() {
  // Iterate on the plantList array to generate each article separately and its key
  return (
    <ul>
      {plantList.map((plant, index) => (
        // Do not miss to generate each element key with the index
        <li key={`${plant}-${index}`}>{ plant }</li>
      ))}
    </ul>
  )
}

// Export file to import it in "App.js"
export default ShoppingList
