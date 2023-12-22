const NameChange = () => {
    const handleNameChange = () => {
        const names = ['Manoel', 'MP', 'Lucy', 'Rod']
        const int = Math.floor(Math.ramdom() * 3)
        return names[int]
    }
  return (
    <p>
      hello {handleNameChange()}!
    </p>
  )
}

export default NameChange
