import React from 'react'

function Hero({heroName}) {

    if(heroName === "Joker"){
        throw new Error('Not a Hero')               //here we added a new error to check what happens and we manage it 
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
