// Import CSS file to add style
import '../styles/Banner.css'

// Create a banner component
function Banner() {
  // Create variable for title
  const title = 'The jungle house'
  // Add a className to put some CSS
  return <div className='tjh-banner'>
      <h1>{ title }</h1>
    </div>
}

// Export file to import it in "index.js"
export default Banner