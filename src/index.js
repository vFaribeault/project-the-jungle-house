// Import React, ReactDOM, index.css and App component
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'

// Generate the React app in "root" element ID
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
