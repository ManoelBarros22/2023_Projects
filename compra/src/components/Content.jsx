import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Manoel')

  const handleNameChange = () => {
    const names = ['Manoel', 'MP', 'Lucy', 'Rod', 'Kay']
    const int = Math.floor(Math.random() * 5)
    setName(names[int])

  return (
    <main>
    <p>Olá {handleNameChange()} !</p>
    <button onClick={handleNameChange}>Change Name</button>
    <button onClick={handleClick}>Click It22</button>
    <button onClick={handleClick}>Click It3</button>
    </main>
  )
}
}
export default Content
