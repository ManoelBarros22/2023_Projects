

import './App.css'

function App() {
  const name = "Manoel"
  const name2 = "Barros"
  const handleNameChange = () => {
    const names = ['MP', 'Lucy', 'Rod']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }
  return (
    
    <>
    <h1>{name} {name2}</h1>
    Hello {handleNameChange()}!!
    
     
    </>
  )
}

export default App
