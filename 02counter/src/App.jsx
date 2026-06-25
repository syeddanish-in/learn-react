import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  
  let counter = 15;

  const addValue = () => {

    console.log('Clicked', counter);
    counter = counter + 1
  }


  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button >Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
