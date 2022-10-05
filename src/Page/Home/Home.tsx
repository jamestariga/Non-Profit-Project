const headerPic = new URL('/images/martialArts.jpg', import.meta.url).href

const Home = () => {
  return (
    <header className='flex flex-col gap-4 items-center justify-center space-y-10 px-10 w-full h-full'>
      <div className='flex flex-col items-center justify-center space-y-8 w-full'>
        <h1 className='text-2xl xl:text-6xl font-bold text-white'>
          Youth Program
        </h1>
        <p className='text-base xl:text-xl text-white'>
          A practical and fun martial art for all boys and girls, ages 8-12
        </p>
      </div>
      <div className='flex items-center justify-center w-full'>
        <div className='rounded-2xl overflow-hidden'>
          <img className='w-full max-w-4xl' src={headerPic} alt='' />
        </div>
      </div>
    </header>
  )
}

export default Home
