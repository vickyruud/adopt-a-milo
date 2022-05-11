import React, { useContext } from 'react';
import { SiteContext } from '../App';


function NavItem({ content, href }) {
  
  const { dark } = useContext(SiteContext);

  return (
    <li className={(dark ? 'text-white' : null) + ' text-lg font-semibold'}>
      <a href={href}>{content}</a>
    </li>
  )
}

export default NavItem