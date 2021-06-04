// Import local state from react to save informations
import { useEffect, useState } from 'react'
// Import Footer.css file to add style
import '../styles/Footer.css'

// Create a Footer component
function Footer() {
  // Declare init state for "inputValue" and the function "setInputValue" which allows to change the state
	const [inputValue, setInputValue] = useState('')

  // Declare a function to get the input
	function handleInput(e) {
		setInputValue(e.target.value)
	}

  // Declare a function to get the blur (=the click outside the text area)
  // Check if the input is valid mail
	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Warning : '@' missing , this isn't a valid mail")
		}
	}

	return (
		<footer className='tjh-footer'>

			<div className='tjh-footer-element'>
				For plants enthusiasts 🌿🌱🌵
			</div>

			<div className='tjh-footer-element'>Please let us your email :</div>
      {/* Listen an "onChange" event and "onBlur" event */}
      <input
        placeholder="Enter your email"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
	)
}

export default Footer
