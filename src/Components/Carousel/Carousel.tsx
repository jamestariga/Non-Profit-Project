import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Carousel as Carousels } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Data from './Data'

type CarouselProps = {
  isVisible: boolean
}

type mapTypes = {
  id: number
  image: string
}

const renderCustomThumbs = () => {
  return Data.map((item: mapTypes) => (
    <div key={item.id}>
      <img src={item.image} alt='' className='max-w-full max-h-full' />
    </div>
  ))
}

const Carousel = (prop: CarouselProps) => {
  const { isVisible } = prop

  const carouselOptions = () => {
    return {
      showThumbs: true,
      showStatus: false,
      showIndicators: true,
      infiniteLoop: false,
      swipeable: true,
      // centerMode: true,
      emulateTouch: true,
      autoPlay: isVisible ? true : false,
      interval: 8000,
      transitionTime: 1000,
      width: '100%',
      showArrows: true,
      renderThumbs: renderCustomThumbs,
      renderArrowPrev: (
        onClickHandler: () => void,
        hasPrev: boolean,
        label: string
      ) =>
        hasPrev && (
          <button
            type='button'
            onClick={onClickHandler}
            title={label}
            className='bg-blurred absolute left-5 top-24 md:top-44 xl:top-72 p-2 rounded-full text-white text-sm font-bold z-10'
          >
            <FiChevronLeft className='h-6 w-6' />
          </button>
        ),
      renderArrowNext: (
        onClickHandler: () => void,
        hasPrev: boolean,
        label: string
      ) =>
        hasPrev && (
          <button
            type='button'
            onClick={onClickHandler}
            title={label}
            className='bg-blurred absolute right-5 top-24 md:top-44 xl:top-72 p-2 rounded-full text-white text-sm font-bold z-10'
          >
            <FiChevronRight className='h-6 w-6' />
          </button>
        ),
    }
  }

  return (
    <Carousels
      {...carouselOptions()}
      className='flex flex-col justify-center items-center w-full md:w-3/4'
    >
      {Data.map(({ id, image }: mapTypes) => (
        <div key={id} className='px-4'>
          <div className='flex justify-center gap-10 space-x-10 w-full min-h-[5rem] h-[15rem] md:h-[25rem] xl:h-[40rem] overflow-hidden cursor-pointer rounded-xl'>
            <img src={image} alt={image} className='max-w-full max-h-full' />
          </div>
        </div>
      ))}
    </Carousels>
  )
}

export default Carousel
