const Content = () => {
    const handleNameChange = () => {
        const names = ['Manoel', 'MP', 'Lucy', 'Rod']
        const int = Math.floor(Math.ramdom() * 3)
        return names[int]
    }
    
    return (
    <main>
        <p>
           {/* Hello {handleNameChange()}! */}
        </p>
    </main>
    )
}

export default Content
