import React, { useState } from 'react';
import '../styles/navbar.css'
import Favorite from './Favorite';
import NavItem from './NavItem';
import { HiMenuAlt3, HiMenuAlt2 } from "react-icons/hi";

function NavBar() {

  const [showNav, setShowNav] = useState(false)

  return (
    <nav className='md:flex justify-between items-center bg-white sticky top-0 z-20'>
      <div className="flex items-center justify-between">
      <a href='/'>
        <img className='w-12 h-12 p-2' src='../milo.jpg' alt='logo' />
        </a>

        <Favorite className="md:hidden flex" count={8} />

        {showNav ? <HiMenuAlt3
          onClick={() => setShowNav(!showNav)}
          className='md:hidden block
        w-10 h-10 p-2 cursor-pointer'/>  :<HiMenuAlt2
          onClick={() => setShowNav(!showNav)}
          className='md:hidden block
        w-10 h-10 p-2 cursor-pointer'/>}
      </div>
      <ul className={(showNav ? "left-0" : "-left-full") + " md:static fixed  bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent md:text-gray-500 bg-gray-500 bg-opacity-90 md:w-auto w-10/12 text-white md:space-y-0 space-y-5 p-2 transition-left"}>
        <NavItem content="home" href="/home" />
        <NavItem content="Sign Up" href="/signup" />
        <NavItem content="Login" href="/signin" />
        <NavItem content="Logout" href="/logout" />
        <Favorite className="hidden md:flex" count={8} />

      </ul>
    </nav>
  );
}

export default NavBar