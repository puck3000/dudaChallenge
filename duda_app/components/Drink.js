import Image from 'next/image'

function Drink({ drink }) {
  return (
    <article className=''>
      <div className='flex flex-row mb-5'>
        <div className='w-3/5'>
          <Image
            src={drink.img}
            height='500'
            width='500'
            alt={`Picture of a ${drink.name}`}
          />
        </div>
        <div className='flex flex-col justify-between w-2/5 text-xl text-center ml-7'>
          <div>
            <p>{drink.units[0].size}</p>
            <p>{drink.units[0].price}</p>
          </div>
          <button className='py-2 mx-2 text-xl font-bold text-black transition-colors bg-cancer-green rounded-3xl hover:text-white hover:bg-darker-cancer-green'>
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
