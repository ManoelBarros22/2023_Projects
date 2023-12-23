import { handleNameChange, handleClick } from '../utils'
const Content = () => {
  return (
    <main>
    <p>Olá {handleNameChange()} !</p>
    <button onClick={handleClick000}>Click It</button>
    </main>
  )
}

export default Content
