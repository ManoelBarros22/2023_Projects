import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { handleNameChange } from '../src/utils'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
     
      <div className="App">
         <Header />
      </div>
    <p>Oi {handleNameChange()}!</p>
    </>
  )
}

export default App
