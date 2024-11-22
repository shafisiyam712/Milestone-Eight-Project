/* eslint-disable react/prop-types */

import { NavLink, useLocation } from 'react-router-dom';
import banner from '../assets/banner.jpg'
const Navbar = () => {
  
  const { pathname } = useLocation()
  return (

    <div className='w-11/12 mx-auto'>
      {
       ( pathname === '/' || pathname === '`/category/${category.category}`') && (
          <>
            <section className="bg-[#9538E2] mt-4 rounded-xl h-[500px] relative">
              <div className="navbar  md:pl-36 md:pr-36">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                      <NavLink
                        className={({ isActive }) =>
                          `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                        }
                        to='/'> Home </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                        }
                        to='/statistics'> Statistics </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                        }
                        to='/dashboard'>Dashboard</NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                        }
                        to='/about'>About</NavLink>


                    </ul>
                  </div>
                  <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 gap-2">
                    <NavLink
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-white' : 'hover:text-white '}`
                      }
                      to='/'> Home </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-white' : 'hover:text-white'}`
                      }
                      to='/statistics'> Statistics </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-white' : 'hover:text-white'}`
                      }
                      to='/dashboard'>Dashboard</NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-white' : 'hover:text-white'}`
                      }
                      to='/about'>About</NavLink>
                  </ul>
                </div>
                <div className="navbar-end flex gap-2">
                  <div className="border rounded-full p-2 bg-white h-10 w-10">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="border rounded-full p-2 bg-white h-10 w-10 text-center">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center text-center mt-6 space-y-5">
                <h1 className="text-4xl text-white font-extrabold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="text-white text-xs">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
               <div>
               <NavLink to='/dashboard'>
                  <button className="btn bg-white rounded-full text-purple-700}">Shope Now</button>
                </NavLink>
               </div>
                 
              </div>
            </section>

            <div className="w-2/3 mx-auto border rounded-xl p-4 bg-white/30 absolute top-80 left-56">
              <div className='h-[250px] md:h-[450px]'>
                <img className='w-full h-full rounded-xl' src={banner} alt="" />
              </div>
            </div>
          </>
        )
      }
      {
        pathname !== '/' && (
          <>
            <div className="navbar  md:pl-36 md:pr-36">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <NavLink
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                      }
                      to='/'> Home </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                      }
                      to='/statistics'> Statistics </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                      }
                      to='/dashboard'>Dashboard</NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                      }
                      to='/about'>About</NavLink>
                  </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold ${isActive ? 'text-purple-800' : 'hover:text-purple-800'}`
                    }
                    to='/'> Home </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold ${isActive ? 'text-purple-800' : 'hover:text-purple-800'}`
                    }
                    to='/statistics'> Statistics </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold ${isActive ? 'text-purple-800' : 'hover:text-purple-800'}`
                    }
                    to='/dashboard'>Dashboard</NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold ${isActive ? 'text-purple-800' : 'hover:text-purple-800'}`
                    }
                    to='/about'>About</NavLink>
                </ul>
              </div>
              <div className="navbar-end flex gap-2">
                <div className="border rounded-full p-2 bg-white h-10 w-10">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="border rounded-full p-2 bg-white h-10 w-10 text-center">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>

          </>
        )
      }

    </div>
  );
};

export default Navbar;