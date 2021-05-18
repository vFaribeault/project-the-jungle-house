// Import icons
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
  // Define a range between 1 and 3
  const range = [1, 2, 3]
  // Define a scaleType variable to check the careType (light or water)
  // and send back a sun or a drop
  const scaleType = careType === 'light' ? (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)

  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
      )}
    </div>
  )
}

export default CareScale