import React from 'react'

function Title() {
    console.log("title")
  return (
    <div>Title</div>
  )
}

export default React.memo(Title)
// so here react.memo just checks if everytime the component is rendered . it will return the component only if there is some change in the state or prop is observed and if no change is observed then nothing is returned