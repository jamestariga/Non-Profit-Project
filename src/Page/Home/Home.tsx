import { useState } from 'react'
import useEventListener from '../../hooks/useEventListener'
import Location from '../../Components/Location'
import Carousel from '../../Components/Carousel'
import Contact from '../../Components/Contact'

import programPic from '/images/6.jpg'
import benefitPic from '/images/20.jpg'

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEventListener('visibilitychange', handleVisibilityChange)

  return (
    <>
      <header className='flex flex-col gap-4 md:items-center justify-center space-y-10 pb-8 px-6 lg:px-10 w-full h-full'>
        <div className='flex flex-col items-center justify-center space-y-8 w-full'>
          <h1 className='text-4xl lg:text-6xl text-center font-bold text-white'>
            Kempo For Kids & Youth Program
          </h1>
          <p className='text-lg xl:text-xl text-white'>
            A practical and fun martial art for all boys and girls, ages 8-12
          </p>
          <button className='btn lg:btn-lg border-none bg-red-500 hover:bg-red-700 text-white lg:text-3xl'>
            Sign Up
          </button>
        </div>
        <Carousel isVisible={isVisible} />
      </header>
      <section className='px-10 pb-10 w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center space-y-6 lg:w-4/5 xl:w-3/5'>
          <h2 className='text-4xl text-center leading-loose text-white font-bold'>
            Welcome to the BC Shorinji Kempo Community!
          </h2>
          <p className='text-white text-lg leading-loose'>
            Shorinji Kempo is a Japanese martial art practiced in 39 countries
            worldwide. We invite you to join us in our mission to improve the
            world through the principles of our daily practice. Currently
            accepting new students.
          </p>
        </div>
        <div className='pt-16 flex flex-col w-full xl:w-3/5'>
          <div className='flex flex-col md:flex-row justify-start items-center gap-10 overflow-hidden md:p-8'>
            <div className='hover:scale-[1.05] duration-300 transition-all w-full lg:w-1/2'>
              <img src={programPic} alt='' className='rounded-2xl' />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-8'>
              <h2 className='text-white text-2xl 4xl:text-4xl font-bold'>
                The Program
              </h2>
              <p className='text-white text-base md:text-lg 4xl:text-xl leading-loose'>
                Train, learn and grow. Our Youth Classes go further than
                physical fitness. Participants also develop interpersonal skills
                under the mentorship of a certified Youth Coach.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-start items-center gap-10 overflow-hidden md:p-8'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-8'>
              <h2 className='text-white text-2xl 4xl:text-4xl font-bold'>
                Benefits
              </h2>
              <p className='text-white text-base md:text-lg 4xl:text-xl leading-loose'>
                Designed to reinforce a positive, motivated mentality, our
                classes teach Youth to never give up. Develop strong athletic
                skills while improving self-esteem, discipline, classroom
                behavior and more.
              </p>
            </div>
            <div className='hover:scale-[1.05] duration-300 transition-all w-full lg:w-1/2'>
              <img src={benefitPic} alt='' className='rounded-2xl' />
            </div>
          </div>
        </div>
      </section>
      <Location />
      <Contact />
    </>
  )
}

export default Home
