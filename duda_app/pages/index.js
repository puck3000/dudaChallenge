import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Drink from '../components/Drink'

// MOCK DATA IMPORT
import data from '../mockData.json'
const blablaData = data.bars[0]

export default function Home() {
  const [drinksInCategory, setdrinksInCategory] = useState(blablaData.drinks)
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase())
  }

  useEffect(() => {
    const filteredList = blablaData.drinks.filter((drink) =>
      drink.name.toLocaleLowerCase().includes(query)
    )
    setdrinksInCategory(filteredList)
  }, [query])

  return (
    <div>
      <Head>
        <title>Duda SPA Coding Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* hero img */}

        <Image
          src='/assets/img/3_DrinksquareSpots_3@2x.png'
          alt='BlaBlaBla Bar Mood Image'
          width={1920}
          height={520}
        />

        <div className='md:max-w-wrapper md:mx-auto md:mt-14 px-6'>
          {/* Lead */}
          <section className=' '>
            <h1 className='text-center text-5xl mb-5'>{blablaData.barName}</h1>
            <p className='text-center text-xl px-5 mb-11'>
              {blablaData.barDescription}
            </p>
          </section>
          {/* filter */}
          {/* search */}
          <div className='w-full h-7 border border-slight-grey bg-transparent rounded-3xl mb-20 flex flex-row items-center justify-center'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='3'
              viewBox='0 0 24 24'
              className='w-3 h-3 ml-3'
            >
              <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>

            <input
              className='w-full bg-transparent border-none h-4 text-sm'
              type='text'
              placeholder='search drink'
              onChange={handleChange}
            ></input>
          </div>
          {/* list */}
          {blablaData.drinks ? (
            <ul className='grid grid-cols-2 gap-x-32'>
              {drinksInCategory.map((drink) => (
                <li key={drink.id}>
                  <Drink drink={drink} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No drinks for this Category available at {blablaData.barName}</p>
          )}
        </div>
      </main>
    </div>
  )
}
