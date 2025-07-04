import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mainBg">
        <div className='headerBg'></div>
        <div className='mainContent'>
          <div className='description'>
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className='sortingButtons'>
              <button>All Products</button>
              <button>Available Now</button>
            </div>
          </div>
          <div className='coffeesContainer'>
            <div className='coffeeCard'>
              <p>img</p>
              <div className='mainInfo'>
                <p>Capuccino</p>
                <p>$5.20</p>
              </div>
              <div className='rating'>
                <img src="./Star_fill.svg" alt="" />
                <p>4.7(65 votes)</p>
              </div>
            </div>
            <div className='coffeeCard'>
              <p>img</p>
              <div className='mainInfo'>
                <p>Capuccino</p>
                <p>$5.20</p>
              </div>
              <div className='rating'>
                <img src="./Star_fill.svg" alt="" />
                <p>4.7(65 votes)</p>
              </div>
            </div>
            <div className='coffeeCard'>
              <p>img</p>
              <div className='mainInfo'>
                <p>Capuccino</p>
                <p>$5.20</p>
              </div>
              <div className='rating'>
                <img src="./Star_fill.svg" alt="" />
                <p>4.7(65 votes)</p>
              </div>
            </div>
            <div className='coffeeCard'>
              <p>img</p>
              <div className='mainInfo'>
                <p>Capuccino</p>
                <p>$5.20</p>
              </div>
              <div className='rating'>
                <img src="./Star_fill.svg" alt="" />
                <p>4.7(65 votes)</p>
              </div>
            </div>
            <div className='coffeeCard'>
              <p>img</p>
              <div className='mainInfo'>
                <p>Capuccino</p>
                <p>$5.20</p>
              </div>
              <div className='rating'>
                <img src="./Star_fill.svg" alt="" />
                <p>4.7(65 votes)</p>
              </div>
            </div>
            <div className='coffeeCard'>
              <p>img</p>
              <div className='mainInfo'>
                <p>Capuccino</p>
                <p>$5.20</p>
              </div>
              <div className='rating'>
                <img src="./Star_fill.svg" alt="" />
                <p>4.7(65 votes)</p>
              </div>
            </div>
            <div className='coffeeCard'>
              <p>img</p>
              <div className='mainInfo'>
                <p>Capuccino</p>
                <p>$5.20</p>
              </div>
              <div className='rating'>
                <img src="./Star_fill.svg" alt="" />
                <p>4.7(65 votes)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
