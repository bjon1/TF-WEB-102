import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BaristaForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title-container">
        <div className="control">
          <img src="https://quiet-macaron-ca013a.netlify.app/assets/omg-logo.79cdfddd.png" alt="Coffee bag" id="coffee-bag" />
          <h1 className="title">On My Grind</h1>
        </div>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </>
  )
}

export default App
