import { useState } from 'react'
import './App.css'
import { CoffeeList } from './components/CoffeeList'

function App() {
  const [allProducts, setAllProducts] = useState(true);

  return (
    <>
      <div className="mainBg">
        <div className='headerBg'></div>
        <div className='mainContent'>
          <div className='description'>
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className='sortingButtons'>
              <button onClick={() => setAllProducts(true)} className={allProducts ? 'active' : 'inactive'}>All Products</button>
              <button onClick={() => setAllProducts(false)} className={!allProducts ? 'active' : 'inactive'}>Available Now</button>
            </div>
          </div>
          <CoffeeList allProducts={allProducts}/>
        </div>
      </div>
    </>
  )
}

export default App
