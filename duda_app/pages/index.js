import Head from 'next/head'
import Image from 'next/image'

// MOCK DATA IMPORT
import data from '../mockData.json'
const blablaData = data.bars[0]

export default function Home() {
  console.log(blablaData)
  return (
    <div>
      <Head>
        <title>Duda SPA Coding Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-main-blue h-screen w-screen'>
        {/* hero img */}

        <Image
          src='/assets/img/3_DrinksquareSpots_3@2x.png'
          alt='BlaBlaBla Bar Mood Image'
          width={1920}
          height={520}
        />

        <div className='md:max-w-wrapper md:mx-auto md:mt-14'>
          {/* Lead */}
          <section className='text-white '>
            <h1 className='text-white text-center text-5xl mb-5'>
              {blablaData.barName}
            </h1>
            <p className='text-center text-xl px-5 mb-11'>
              {blablaData.barDescription}
            </p>
          </section>
          {/* filter */}
          {/* search */}
          {/* list */}
        </div>
      </main>
    </div>
  )
}
