import { handleNameChange } from '../utils'
const Content = () => {
  return (
    <main>
    <p>Olá {handleNameChange()} !</p>
    </main>
  )
}

export default Content
