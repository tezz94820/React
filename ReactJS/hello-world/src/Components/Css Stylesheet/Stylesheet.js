import React from 'react'
import './myStyles.css'
function Stylesheet(props) {
  let className = props.primary ? 'primary' :''   //we can change the class of h1 element by template literals/variables
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>    {/*//2 classeson a single element*/}
    </div>
  )
}

export default Stylesheet
