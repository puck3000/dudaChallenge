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
        {/* Todo: Img Optim */}
        <Image
          src='/assets/img/3_DrinksquareSpots_3@2x.png'
          alt='BlaBlaBla Bar Mood Image'
          width={1920}
          height={520}
        />
        {/* Lead */}
        {/* filter */}
        {/* search */}
        {/* list */}
      </main>
    </div>
  )
}
