// Import icons
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Declare a function to call with 2 parameters, when you'll click on water or light icons
function handleClick(care, scale) {
  // Inform with an alert what are the needs for the clicked plant
  if (scale === 3) {
    alert(`This plant needs very much ${care}.`)
  } else if (scale == 2) {
    alert(`This plant needs some ${care}.`)
  } else {
    alert(`This plant needs only few ${care}.`)
  }
}

function CareScale({ scaleValue, careType }) {
  // Define a range between 1 and 3
  const range = [1, 2, 3]
  // Define a scaleType variable to check the careType (light or water) and send back a sun or a drop
  const scaleType =
    careType === 'light' ? (
      <img src={Sun} alt='sun-icon' />
    ) : (
      <img src={Water} alt='water-icon' />
    )

  return (
    // Declare (listen) an 'onClick' event, pass it 'handleClick' function with the careType and scaleValue as arguments
    <div onClick={() => handleClick(careType, scaleValue)}>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()}>{scaleType}</span>
        ) : (
          null
        )
      )}
    </div>
  )
}

export default CareScale
