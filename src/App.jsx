import { useState } from 'react'
import './App.css'
import Mycomponent from './components/Mycomponent' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Project TK</div>
      <Mycomponent></Mycomponent></>
  )
}

export default App