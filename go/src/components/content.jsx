const Content = () => {
    const handleNameChange = () => {
        const names = ['Manoel', 'MP', 'Lucy', 'Rod']
        const int = Math.floor(Math.ramdom() * 3)
        return names[int]
    }

    const handleClick = () => {
            console.log("You clicked it")
    }
    
    return (
      
        <main>
                <p>
                    {/* Hello {handleNameChange()}! */}
                </p>
                <button onClick=>Click1</button>
            </main>
    
   

    )
}

export default Content
