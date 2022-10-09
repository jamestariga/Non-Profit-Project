const instructor1 = new URL('/images/instructor1.jpg', import.meta.url).href
const instructor2 = new URL('/images/instructor2.jpg', import.meta.url).href

const Instructor = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center space-y-4 px-10 pb-10'>
        <h1 className='text-4xl text-center leading-loose text-white font-bold'>
          Our Youth Instructors
        </h1>
        <div className='flex flex-row flex-wrap justify-center gap-10 w-full'>
          <div className='flex flex-col basis-full items-center space-y-10 p-8 bg-red-500 max-w-4xl rounded-2xl'>
            <h1 className='text-2xl text-center leading-loose text-white font-bold'>
              Masa Okuma
            </h1>
            <div className='flex items-center justify-center w-full'>
              <div className='rounded-2xl overflow-hidden transition-all'>
                <img className='w-full max-w-7xl' src={instructor1} alt='' />
              </div>
            </div>
            <p className='text-lg leading-loose text-white'>
              Okuma Sensei (6th dan) leads a focused and intense class, with
              particular attention placed on the basics, or kihon. Located at a
              beautiful Buddhist temple, Tozenji Dojo has beautiful wood floors
              (with mats available) and a full wall mirror.
            </p>
          </div>
          <div className='flex flex-col basis-full items-center space-y-10 p-8 bg-red-500 max-w-4xl rounded-2xl'>
            <h1 className='text-2xl text-center leading-loose text-white font-bold'>
              Masaaki Hashimoto
            </h1>
            <div className='flex items-center justify-center w-full'>
              <div className='rounded-2xl overflow-hidden transition-all'>
                <img className='w-full max-w-7xl' src={instructor2} alt='' />
              </div>
            </div>
            <p className='text-lg leading-loose text-white'>
              Hashimoto Sensei (7th dan) began training in the late 70's, and
              began teaching in Vancouver in 1982. Bringing over thirty five
              years of experience to the dojo, he is largely responsible for the
              development of Shorinji Kempo in Vancouver today. He teaches class
              at Trout Lake Community Centre.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Instructor
