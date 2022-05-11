import React, { useState, useContext } from 'react';
import Favorite from './Favorite';
import NavItem from './NavItem';
import { HiMenuAlt3, HiMenuAlt2 } from "react-icons/hi";
import { SiteContext } from '../App';

function NavBar() {

  const [showNav, setShowNav] = useState(false);

  const { dark, setDark } = useContext(SiteContext);

  const handleDark = () => {
    setDark(!dark);
    setShowNav(!showNav);

  }

  return (
    <nav className={(dark ? 'bg-black': 'bg-white') + ' md:flex justify-between items-center sticky top-0 z-20'}>
      <div className="flex items-center justify-between">
      <a href='/'>
        <img className='w-12 h-12 p-2' src='../milo.jpg' alt='logo' />
      </a>

        <Favorite className="md:hidden flex" count={8} />

        {showNav ? <HiMenuAlt3
          onClick={() => setShowNav(!showNav)}
          className={(dark ? 'text-white' : null) + ' md:hidden block w-10 h-10 p-2 cursor-pointer' } />  :<HiMenuAlt2
          onClick={() => setShowNav(!showNav)}
          className={(dark ? 'text-white' : null) + ' md:hidden block w-10 h-10 p-2 cursor-pointer' }/>}
      </div>
      <ul className={(showNav ? "left-0" : "-left-full") + " md:static fixed  bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent md:text-gray-500 bg-gray-900 bg-opacity-90 md:w-auto w-10/12 text-white md:space-y-0 space-y-5 p-2 transition-left"}>
        <NavItem content="Home" href="/home" />
        <NavItem content="Sign Up" href="/signup" />
        <NavItem content="Login" href="/signin" />
        <NavItem content="Logout" href="/logout" />
        <button onClick={() => handleDark()}  className={(dark ? 'text-white' : null) +  ' text-lg font-semibold'}>Enable Dark Theme</button>
        <Favorite className="hidden md:flex" count={8} />

      </ul>
    </nav>
  );
}

export default NavBar