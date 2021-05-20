import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='tjh-footer'>
			<div className='tjh-footer-element'>
				For plants enthusiasts 🌿🌱🌵
			</div>
			<div className='tjh-footer-element'>Please let us your email :</div>
		</footer>
	)
}

export default Footer