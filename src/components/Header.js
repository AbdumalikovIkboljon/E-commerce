import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='mx-auto z-10 w-full'>
      <div className='bg-black-900 flex gap-2 py-2 items-center justify-center flex-wrap'>
        <p className='text-white text-sm leading-6 text-center md:text-left'>
          Get 25% OFF on your first order.
        </p>
        <Link className='capitalize font-medium text-sm leading-6 text-white' href='/'>
          Order now
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
