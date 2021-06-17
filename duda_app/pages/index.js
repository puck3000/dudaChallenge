import Head from 'next/head'
import { useEffect, useState } from 'react'
import Drink from '../components/Drink'

// MOCK DATA IMPORT
import data from '../mockData.json'
const blablaData = data.bars[0]
const categories = data.categories

export default function Home() {
  const [drinksInCategory, setdrinksInCategory] = useState(blablaData.drinks)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(true)

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase())
  }

  const filterByCategoryId = (categories) => {
    const foundMatch = categories.find(
      (category) => category === selectedCategory.catId
    )
    return foundMatch
  }

  useEffect(() => {
    const listFilteredByTitle = blablaData.drinks.filter((drink) =>
      drink.name.toLocaleLowerCase().includes(query)
    )
    setdrinksInCategory(listFilteredByTitle)
  }, [query])

  useEffect(() => {
    const listFilteredByCategory = blablaData.drinks.filter((drink) =>
      filterByCategoryId(drink.categories)
    )
    if (selectedCategory.catId === 0) {
      setdrinksInCategory(blablaData.drinks)
    } else {
      setdrinksInCategory(listFilteredByCategory)
    }
  }, [selectedCategory])

  return (
    <div>
      <Head>
        <title>Duda SPA Coding Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* hero img */}
        <img
          src='/assets/img/3_DrinksquareSpots_3@2x.png'
          alt='BlaBlaBla Bar Mood Image'
          className='object-cover mb-12 md:object-fit h-80 md:w-full md:mb-14'
        />

        <div className='px-6 md:max-w-wrapper md:mx-auto'>
          {/* Lead */}
          <section className=''>
            <h1 className='mb-5 text-2xl text-center md:text-5xl'>
              {blablaData.barName}
            </h1>
            <p className='px-5 mb-12 text-base text-center md:text-xl'>
              {blablaData.barDescription}
            </p>
          </section>
          {/* filter */}
          <div
            className='cursor-pointer'
            onClick={() => setShowFilters(!showFilters)}
          >
            <h2
              className='mb-1 text-xs text-center'
              style={{ textShadow: '0 0 5px #fff' }}
            >
              Filter
            </h2>
            <img
              src='/assets/img/np_arrow.svg'
              alt='arrow'
              className={`w-2 mb-10 mx-auto transform transition-transform ${
                showFilters ? 'rotate-180' : 'a'
              }`}
            />
          </div>
          {categories && showFilters && (
            <ul className='text-center'>
              {categories.map((category) => {
                return (
                  <li
                    key={category.catId}
                    onClick={() => setSelectedCategory(category)}
                    className={`border mr-2 mb-2 last:mr-0 inline-block border-slight-grey rounded-2xl px-3 py-1 hover:bg-white hover:text-black transition-colors cursor-pointer ${
                      selectedCategory.catId === category.catId &&
                      'bg-white text-black'
                    }`}
                  >
                    {category.name}
                  </li>
                )
              })}
            </ul>
          )}

          {/* search */}
          <div className='flex flex-row items-center justify-center mb-20 bg-transparent border h-7 border-slight-grey rounded-3xl'>
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
              className='w-full h-4 bg-transparent border-none '
              type='text'
              placeholder='search drink'
              onChange={handleChange}
            ></input>
          </div>
          {/* list */}
          {drinksInCategory.length ? (
            <ul className='md:grid md:grid-cols-2 gap-x-32'>
              {drinksInCategory.map((drink) => (
                <li className='mb-11 md:mb-20' key={drink.id}>
                  <Drink drink={drink} />
                </li>
              ))}
            </ul>
          ) : (
            <div className='my-12 text-center'>
              <h2 className='mb-6 text-4xl'>Sorry,</h2>
              <p>
                but there are no drinks for this Category available at{' '}
                {blablaData.barName}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
