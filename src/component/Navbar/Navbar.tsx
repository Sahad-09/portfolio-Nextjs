import Link from 'next/link';
import React from 'react';

function Navbar() {
  type links = {
    id: number;
    title: string;
    url: string;
}[]

    const links:links  =[ 
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio'
    },
    {
      id: 3,
      title: 'About',
      url: '/about'
    },
    {
      id: 4,
      title: 'Contact',
      url: '/contact'
    }
  ]

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Sahad</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
