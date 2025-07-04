export function CoffeeCard({ coffee }) {
  return (
    <div className='coffeeCard'>
      <div
        className='coffeeImg'
        style={{
          backgroundImage: `url(${coffee.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {coffee.popular && <p className='popularTag'>Popular</p>}
      </div>
      <div className='mainInfo'>
        <p>{coffee.name}</p>
        <p className='priceTag'>{coffee.price}</p>
      </div>
      <div className='extraInfo'>
        <div className='rating'>
          <img
            src={coffee.votes === 0 ? "./Star.svg" : "./Star_fill.svg"}
            alt=""
          />
          <div className='ratingInfo'>
            <p className='mainRating'>{coffee.rating}</p>
            <p className='ratingVotes'>
              {coffee.votes === 0 ? "No ratings" : `(${coffee.votes} votes)`}
            </p>
          </div>
        </div>
        {!coffee.available && <p>Sold out</p>}
      </div>
    </div>
  );
}