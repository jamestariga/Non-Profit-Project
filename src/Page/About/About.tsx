import Instructor from '../../Components/Instructor'
import headerPic from '/images/1.jpg'

const About = () => {
  return (
    <>
      <header className='flex flex-col gap-4 items-center justify-center space-y-10 pb-8 px-10'>
        <div className='flex flex-col justify-center items-center space-y-6 xl:w-3/5'>
          <div className='flex items-center justify-center w-full'>
            <div className='rounded-2xl overflow-hidden transition-all'>
              <img className='w-full max-w-7xl' src={headerPic} alt='' />
            </div>
          </div>
          <h1 className='text-2xl lg:text-4xl font-extrabold text-white'>
            A Brief History of our Branches
          </h1>
          <p className='text-xl leading-loose text-white'>
            Shorinji Kempo is a traditional Japanese martial art. Shorinji Kempo
            in Vancouver was developed by Masaaki Hashimoto Sensei who is
            currently the director of Shorinji Kempo Canada.
          </p>
          <h1 className='text-2xl lg:text-4xl font-extrabold text-white'>
            Benefits of Shorinji Kempo
          </h1>
          <h1 className='text-xl lg:text-2xl font-extrabold text-white'>
            “Self defense, spiritual cultivation and improved health”
          </h1>
          <p className='text-lg leading-loose text-white'>
            Shorinji Kempo cultivates healthy bodies, indomitable courage, and
            well-rounded character in order to make individuals capable of
            leading happy lives. Shorinji Kempo teaches that the essence of
            budo/martial arts is not to fight and defeat enemies, but to stop
            fighting between people, and to enable the harmony for a peaceful
            society.
          </p>
        </div>
      </header>
      <Instructor />
    </>
  )
}

export default About
