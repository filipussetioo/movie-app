'use client'
import React from 'react'

const Nav = () => {
  const navItem = ['Home','Popular','Movies','TV Shows']
  const navLink = ['/', '/#about', '/', '/#project']
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false)
  
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])

  return (
    <nav className={"items-center p-3 fixed w-screen z-30 "+ (navbarOpen ?  "bg-black bg-opacity-75 h-full": (scroll ? "bg-slate-950 bg-opacity-25 shadow-xl" : "bg-black"))}>
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