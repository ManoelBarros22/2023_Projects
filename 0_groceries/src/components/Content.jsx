import { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Manoel')
    const [count, setCount] = useState(0)
    const handleNameChange = () => {
        const names = ['MP', 'Lucy', 'Rod', 'Manoel']
        const int = Math.floor(Math.random() * 4)
         setName(names[int])
    }

 

    const handleClick = () => {
    }

    const handleClick3 = () => {
    }

  return (
    <main>
      <p>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it2</button>
      <button onClick={handleClick3}>Click it3</button>
    </main>
  )
}

export default Content
