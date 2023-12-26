import Input from "./components/Input";
import Square from "./components/Square";
import { useState } from 'react'


function App() {
  const [colorValue, setColorValue] = useState('')
  return (
    <div className="App">
      <Square colorValue={colorValue} />
      <Input
        colorValue={colorValue}
      />
    </div>
  );
}

export default App;
