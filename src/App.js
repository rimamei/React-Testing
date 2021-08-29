import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Counter from './Counter/counter'
import Congrats from './Joto/Congrats/Congrats'
import GuessedWords from './Joto/GuessedWords'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter />
      <Congrats />
      <GuessedWords guessedWords={'test'} />
    </div>
  )
}

export default App
