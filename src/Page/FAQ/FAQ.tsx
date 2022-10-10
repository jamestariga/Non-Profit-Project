import Data from './Data'

type mapTypes = {
  id: number
  title: string
  description: string
}

const FAQ = () => {
  return (
    <>
      <header className='flex flex-col items-center justify-center gap-8 px-8'>
        <h1 className='text-4xl font-bold text-center text-white'>
          Frequently Asked Questions
        </h1>
        <p className='text-center text-white'>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
        <input
          type='text'
          placeholder='Search'
          className='input input-bordered border-4 w-full max-w-lg text-white'
        />
      </header>
      <section className='flex flex-col items-center justify-center gap-8 px-8'>
        {Data.map(({ id, title, description }: mapTypes) => (
          <div
            key={id}
            tabIndex={0}
            className='collapse collapse-arrow border border-base-300 rounded-box max-w-lg w-full bg-red-700'
          >
            <input type='checkbox' />
            <div className='collapse-title'>
              <h1 className='text-xl font-bold text-white'>{title}</h1>
            </div>
            <div className='collapse-content bg-red-500'>
              <p className='text-white text-lg leading-loose'>{description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default FAQ
