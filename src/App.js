import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Counter from './Counter/Counter'
import Congrats from './Joto/Props/Congrats'
import GuessedWords from './Joto/GuessedWords'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Counter count={count}/>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  )
}

export default App
