import React from "react"

const CreatureTile = (props) => {
  return(
    <div className="tile" onClick={props.callbackFunction} >
      <p> {props.creatureData.name} </p>
    </div>
  )
}

export default CreatureTile;
