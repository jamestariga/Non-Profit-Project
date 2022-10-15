import Data from './Data'

type mapTypes = {
  id: number
  image: string
  title: string
  description: string
}

const Information = () => {
  return (
    <>
      <section className='flex flex-col gap-4 md:items-center justify-center space-y-10 pb-8 px-6 lg:px-10'>
        <div className='pt-16 flex flex-col w-full 2xl:w-3/5'>
          {Data.map(({ id, image, title, description }: mapTypes) => (
            <div
              key={id}
              className='flex flex-col 2xl:flex-row justify-start items-center gap-10 overflow-hidden p-4 md:p-8'
            >
              <div className='hover:scale-[1.05] duration-300 transition-all w-full lg:w-1/2'>
                <img src={image} alt='' className='rounded-2xl' />
              </div>
              <div className='lg:w-3/5 2xl:w-1/2 flex flex-col justify-center items-center space-y-8'>
                <h2 className='text-white text-2xl 4xl:text-4xl font-bold'>
                  {title}
                </h2>
                <p className='text-white text-base md:text-lg 4xl:text-xl leading-loose'>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Information
