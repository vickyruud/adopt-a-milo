import React, { useState } from 'react';
import '../styles/navbar.css'
import Favorite from './Favorite';
import NavItem from './NavItem';
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {

  const [showNav, setShowNav] = useState(false)

  return (
    <nav className='md:flex justify-between items-center bg-white sticky top-0 z-20'>
      <div className="flex items-center justify-between">
      <a href='/'>
        <img className='w-12 h-12 p-2' src='../milo.jpg' alt='logo' />
        </a>
        <AiOutlineMenu className='md:hidden block
        w-10 h-10 p-2 cursor-pointer'/>
      </div>
      <ul className={(showNav ? "left-0" : "-left-full") + " md:static fixed  bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent md:text-gray-500 bg-gray-500 bg-opacity-90 md:w-auto w-10/12 text-white md:space-y-0 space-y-5 p-2"}>
        <NavItem content="home" href="/home" />
        <NavItem content="Sign Up" href="/signup" />
        <NavItem content="Login" href="/signin" />
        <NavItem content="Logout" href="/logout" />
        <Favorite className="hidden" count={8} />

      </ul>
    </nav>
  );
}

export default NavBar