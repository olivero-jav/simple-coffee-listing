export function CoffeeCard({ coffee }) {
    return (
        <div>
            <div className='coffeeCard'>
              <div className='coffeeImg'>
                {coffee.popular && <p className='popularTag'>Popular</p>}
              </div>
              <div className='mainInfo'>
                <p>{coffee.name}</p>
                <p className='priceTag'>{coffee.price}</p>
              </div>
              <div className='extraInfo'>
                <div className='rating'>
                  <img src="./Star_fill.svg" alt="" />
                  <div className='ratingInfo'>
                    <p className='mainRating'>{coffee.rating}</p>
                    <p className='ratingVotes'>({coffee.votes} votes)</p>
                  </div>
                </div>
                {coffee.soldOut && <p>Sold out</p>}
              </div>
            </div>
        </div>
    );
}