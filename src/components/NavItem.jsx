import React from 'react';

function NavItem({content, href}) {
  return (
    <li className='text-lg font-semibold'>
      <a href={href}>{content}</a>
    </li>
  )
}

export default NavItem