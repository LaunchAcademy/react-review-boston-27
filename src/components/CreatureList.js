import React from "react"

import CreatureTile from "./CreatureTile"

const CreatureList = (props) => {
  const newCreatureComponentArray = props.creatures.map((creature) => {

    const someCallbackFunction = () => {
      return(
        prompt("do YoU LoVE cheeSe?")
      )
    }

    return(
      <CreatureTile
        key={creature.name}
        creatureData={creature}
        callbackFunction={someCallbackFunction}
      />
    )
  })


  return(
    <div className="container">
      <h2>Our Magical Creatures</h2>

      {newCreatureComponentArray}
    </div>
  )
}

export default CreatureList;
