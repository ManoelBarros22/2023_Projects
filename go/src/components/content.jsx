const Content = () => {
    const handleNameChange = () => {
        const names = ['Manoel', 'MP', 'Lucy', 'Rod']
        const int = Math.floor(Math.ramdom() * 3)
        return names[int]
    }

    const handleClick1 = () => {
            console.log("You clicked it")
    }

    const handleClick2 = (name) => {
            console.log("You clicked it")
    }
    
    return (
      
        <main>
                <p>
                    <p>hello</p>
                    {/* Hello {handleNameChange()}! */}
                </p>
                <button onClick={handleClick1}>Click1</button>
                <button onClick={() => handleClick2}>Click2</button>
            </main>
    
   

    )
}

export default Content
