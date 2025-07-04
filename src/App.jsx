import { useState } from 'react'
import './App.css'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeList, coffees } from './components/CoffeeList'

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
          <CoffeeList />
          <div className='coffeesContainer'>
            <div className='coffeeCard'>
              <div className='coffeeImg'>
                <p className='popularTag'>Popular</p>
              </div>
              <div className='mainInfo'>
                <p>Capuccino</p>
                <p className='priceTag'>$5.20</p>
              </div>
              <div className='extraInfo'>
                <div className='rating'>
                  <img src="./Star_fill.svg" alt="" />
                  <div className='ratingInfo'>
                    <p className='mainRating'>4.7</p>
                    <p className='ratingVotes'>(65 votes)</p>
                  </div>
                </div>
                <p>Sold out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
