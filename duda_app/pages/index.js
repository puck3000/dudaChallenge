import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Drink from '../components/Drink'

// MOCK DATA IMPORT
import data from '../mockData.json'
const blablaData = data.bars[0]

export default function Home() {
  const [drinksInCategory, setdrinksInCategory] = useState(blablaData.drinks)

  console.log(drinksInCategory)
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
