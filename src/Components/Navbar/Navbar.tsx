import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import useEventListener from '../../hooks/useEventListener'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEventListener('scroll', handleScroll)

  return (
    <>
      <nav
        className={`navbar py-6 fixed transition z-50 ${
          isScrolled ? `bg-red-700` : `bg-base-100`
        }`}
      >
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <HiOutlineMenuAlt1 className='h-8 w-8 text-red-500' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? `bg-red-500 text-white` : `text-gray-200`
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
                    isActive ? `bg-red-500 text-white` : `text-gray-200`
                  }
                  end
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/faq'
                  className={({ isActive }) =>
                    isActive ? `bg-red-500 text-white` : `text-gray-200`
                  }
                  end
                >
                  FAQ
                </NavLink>
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
                  isActive ? `bg-red-500 text-white` : `text-gray-200`
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
                  isActive ? `bg-red-500 text-white` : `text-gray-200`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/FAQ'
                className={({ isActive }) =>
                  isActive ? `bg-red-500 text-white` : `text-gray-200`
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
