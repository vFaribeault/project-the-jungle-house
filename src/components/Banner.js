// Import Banner.css file and logo to add style
import '../styles/Banner.css'
import logo from '../assets/logo.png'

// Create a Banner component
function Banner() {
  // Create variable for title
  const title = 'The jungle house'
  // Add className on banner, logo and title to then manage style
  return <div className='tjh-banner'>
      <img src={ logo } alt='La maison jungle' className='tjh-logo' />
      <h1 className='tjh-title'>{title}</h1>
    </div>
}

// Export file to import it in "App.js"
export default Banner