import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { navlink } from '../data/dummydata'
import logo from "../data/imgs/logo.png"
import { Menu } from '@mui/icons-material'

const Header = () => {
    const [responsive, setResponsive] = useState(false)
  return (
      <>
          <header>
              <div className='container flexsb'>
                  <div className="logo">
                      <Link className="logoa" to="/"><img src={logo} alt=''  data-aos="fade-right"/></Link>
                  </div>
                  <div className={responsive ? "hideMenu" : "nav"}>
                      {navlink.map((links, i) => (
                           <Link  to={links.url} key={i}>{ links.text}</Link>
                      )
                         
                      )}
                  </div>
                  <div className='toggle div'>
                      
                  <button className='toggle' onClick={() => setResponsive(!responsive)}>
                      <Menu className='icon'></Menu>
                  </button>
                  </div>
              </div>
          </header>
      </>
  )
}

export default Header
