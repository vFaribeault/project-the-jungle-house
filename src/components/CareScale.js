function CareScale(props) {
  // Define variable for the props value
  const scaleValue = props.value
  // Define a scale between 1 and 3
  const range = [1, 2, 3]

  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? <span key={rangeElement.toString()}>☀️</span> : null
      )}
    </div>
  )
}
  
export default CareScale