import React from 'react';

import CreatureList from "./CreatureList"

const App = props => {

  return(
    <div className="app">
      <h1>App Component</h1>

      <CreatureList
        creatures={props.creatures}
      />
    </div>
  )
}

export default App;
