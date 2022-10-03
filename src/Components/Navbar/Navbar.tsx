import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import useEventListener from '../../hooks/useEventListener'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.innerWidth > 1020) {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
  }

  useEventListener('scroll', handleScroll)

  return (
    <>
      <nav
        className={`navbar py-6 fixed transition z-50 ${
          isScrolled ? `bg-indigo-900` : `bg-base-100`
        }`}
      >
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className='justify-between'>
                  Parent
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                  </svg>
                </a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className='text-4xl font-extrabold text-white ml-4 xl:ml-12'>
            Shorinji Kempo
          </a>
        </div>
        <div className='navbar-center hidden lg:flex lg:justify-center lg:w-1/2'>
          <ul className='menu menu-horizontal p-0 text-xl font-bold space-x-6'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? `bg-blue-700 text-white` : `text-gray-400`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? `bg-blue-700 text-white` : `text-gray-400`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/FAQ'
                className={({ isActive }) =>
                  isActive ? `bg-blue-700 text-white` : `text-gray-400`
                }
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
