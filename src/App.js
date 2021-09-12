import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Counter from './Counter/Counter'
import Congrats from './Joto/Props/Congrats'
import GuessedWords from './Joto/GuessedWords'
import Input from './Joto/Input'

function App() {
  const [count, setCount] = useState(0)

  const success = false
  const secretWord = 'party'
  const guessedWords = []

  return (
    <div data-test='app-component' className='container'>
      <Counter count={count} />
      <h1>Jotto</h1>
      <Congrats success={success} />
      <GuessedWords
        guessedWords={guessedWords}
      />
      <Input success={success} secretWord={secretWord} />
    </div>
  )
}

export default App
