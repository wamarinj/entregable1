import { useState } from 'react'
import './App.css'
import Quotes from "./assets/Quotes.json"


function App() {
  
  
  const randomIndex = Math.floor(Math.random() * Quotes.length)
  const [index, setIndex] = useState(randomIndex)
  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length)
    setIndex(randomIndex)    
  }
  
  
  const colors = ['#293462', '#008000', '#008080', '#000080', '#FF9551', '#FF4A4A', '#D61C4E','#FFB3B3']
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`
  
  return (
    <div className='container'>
      <div className='quoteBox' style={{ color: colors[randomColor] }}>
        <h1><i class="fa-solid fa-quote-left"></i>{Quotes[index].quote}</h1>
        <h2>{Quotes[index].author}</h2>
        <button style={{ color: colors[randomColor] }} onClick={changeQuote}>
          <i class="fa-solid fa-circle-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

export default App
