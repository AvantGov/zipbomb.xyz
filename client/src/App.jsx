//depends
import React, { useEffect } from 'react'

// comps
import Display from './Components/Display';

//utils 
import { _createHydra } from './utils/_createHydra'

//css
import './CSS/App.css'

function App() {

  useEffect(() => {
    const canvas = document.querySelector("#canvas1");

    if (!canvas) {
      const App = document.querySelector("#App")
      App.insertBefore(_createHydra(), App.childNodes[0]);
    }
  },[])
  

  return (
    <div className='App' id='App'>
        <Display />
    </div>
  )
}

export default App
