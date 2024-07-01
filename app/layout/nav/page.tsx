'use client'
import React from 'react'
import Image from 'next/image'

const Nav = () => {
  const navItem = ['Home','TV Shows','Movies']
  const navLink = ['/', '/tvshows', '/']
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false)
  
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])

  return (
    <nav className={"items-center p-3 fixed w-screen z-30 "+ (navbarOpen ?  "bg-black bg-opacity-75 h-full": (scroll ? "bg-black shadow-xl" : "bg-opacity-0"))}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex justify-between lg:w-auto">
          <h1 className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white flex-start"><a href='/'>Movie App</a></h1>
        </div>
        <ul className="list-none max-sm:hidden flex">
        {navItem.map((item, index) => (
          navLink.map((link, linkIndex) => (
            linkIndex === index ? (
              <li className="nav-item" key={linkIndex}>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={link}
                >
                  <i className="text-md leading-lg text-white">
                    <span className="p-2">{item}</span>
                  </i>
                </a>
              </li>
            ) : null
          ))
        ))}
        <li className='nav-item'>
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
              <g fill="#fffefe" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path></g></g>
            </svg>
          </a>
        </li>
          {/* <li className='nav-item'>
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
              <DarkModeToggle/>
            </a>
          </li> */}
        </ul>
          <div className="md:hidden">
            {navbarOpen ? 
            <button className="p-2" onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg className={`"fill-current h-6 w-6 transition-transform duration-300 ${navbarOpen ? "rotate-180" : ""}`} viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="white" strokeWidth="4" /></svg>
            </button>
            :
            <button className={"navbar-burger flex items-center text-white p-3"} onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg className={`block h-4 w-4 fill-current transition-transform duration-300 ${navbarOpen ? "rotate-45 opacity-0" : ""}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            }
          </div>
      </div>
      <ul className={"mobile-nav-item "+(navbarOpen ? 'absolute right-0 top-0 z-10 w-full text-right mobile-menu h-screen mt-16' : 'hidden')}>
          
      {navItem.map((item, index) => (
          navLink.map((link, linkIndex) => (
            linkIndex === index ? (
              <li className="nav-item" key={linkIndex}>
                <a href={link} className="px-8 py-3 block text-xs uppercase font-bold leading-snug text-white italic active:border-b-2 " role="menuitem">{item}</a>
              </li>
            ) : null
          ))
        ))}
          {/* <li className='nav-item'>
            <a className="px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 flex-row-reverse">
              <DarkModeToggle/>
            </a>
          </li> */}
      </ul>
    </nav> 
  )
}

export default Nav