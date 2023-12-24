import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Manoel')

  const handleNameChange = () => {
    const names = ['Manoel', 'MP', 'Lucy', 'Rod', 'Kay']
    const int = Math.floor(Math.random() * 5)
    return names[int]

  return (
    <main>

    </main>
  )
}
}
export default Content
