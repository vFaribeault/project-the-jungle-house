// Import CSS file to add style
import '../styles/Banner.css'
// Import logo
import logo from '../assets/logo.png'

// Create a banner component
function Banner() {
  // Create variable for title
  const title = 'The jungle house'
  // Add className on banner, logo and title to put some CSS
  return <div className='tjh-banner'>
      <img src={ logo } alt='La maison jungle' className='tjh-logo' />
      <h1 className='tjh-title'>{title}</h1>
    </div>
}

// Export file to import it in "index.js"
export default Banner