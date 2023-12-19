import { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Manoel')
    const handleNameChange = () => {
        const names = ['MP', 'Lucy', 'Rod', 'Manoel']
        const int = Math.floor(Math.random() * 4)
         setName(names[int])
    }

 

    const handleClick2 = () => {
    }

    const handleClick3 = () => {
    }

  return (
    <main>
      <p>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={() => handleClick2('Manoel')}>Click it2</button>
      <button onClick={(e) => handleClick3(e)}>Click it3</button>
    </main>
  )
}

export default Content
