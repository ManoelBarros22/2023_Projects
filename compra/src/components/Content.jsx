import { handleNameChange, handleClick } from '../utils'
const Content = () => {
  return (
    <main>
    <p>Olá {handleNameChange()} !</p>
    <button onClick={handleClick456}>Click It</button>
    </main>
  )
}

export default Content
