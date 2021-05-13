function CareScale({scaleValue, careType}) {
  // Define a scale between 1 and 3
  const range = [1, 2, 3]
  // Define variable for the props value
  const scaleType = careType === 'light' ? '☀️' : '💧'

  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
      )}
    </div>
  )
}

export default CareScale