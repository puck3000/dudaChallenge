function Drink({ drink }) {
  return (
    <article className=''>
      <div className='flex flex-row mb-5'>
        <img
          className='w-3/5'
          src={drink.img}
          alt={`Picture of a ${drink.name}`}
        />
        <div className='ml-7 text-center text-xl w-2/5 flex flex-col justify-between'>
          <div>
            <p>{drink.units[0].size}</p>
            <p>{drink.units[0].price}</p>
          </div>
          <button className='bg-cancer-green rounded-3xl font-bold text-xl text-black py-2 mx-2 transition-colors hover:text-white  hover:bg-darker-cancer-green'>
            ADD
          </button>
        </div>
      </div>
      <p className='font-bold'>{drink.name}</p>
      <ul className='flex'>
        {drink?.ingredients.map((ingredient) => {
          return (
            <li key={ingredient} className='ingredient'>
              {ingredient}
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default Drink
