const Content = () => {
    const handleNameChange = () => {
        const names = ['MP', 'Lucy', 'Rod']
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }
  return (
    <main>
      <p>
        Hello {handleNameChange()}!
      </p>
    </main>
  )
}

export default Content
