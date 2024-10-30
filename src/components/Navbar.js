'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import Image from 'next/image';
import CustomInput from './CustomInput';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1116px] mx-auto px-3">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
            <Link className="flex-shrink-0 flex items-center" href="/">
              <Image
                src="/header-logo.svg"
                alt="Logo"
                width={163}
                height={40}
                priority
              />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 flex items-start">
                <span>Categories</span>
                <Icon name="chevronDown" className="ml-1 w-6 h-6" />
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/categories/electronics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Electronics
                  </Link>
                  <Link href="/categories/clothing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Clothing
                  </Link>
                  <Link href="/categories/books" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Books
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Search, Cart, and Profile */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <CustomInput
                type="text"
                placeholder="Search products..."
                className='py-[10px] pr-[36px]'
              />
              <Icon name='search' color='transparent' className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              <Icon name='cart' className="w-6 h-6" color='transparent' />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Icon name='userProfile' className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Icon name='cart' className="w-6 h-6" color='transparent' />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Icon name='userProfile' className="w-6 h-6" color='transparent' />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <Icon name='closeIcon' className="w-6 h-6" /> : <Icon name='burgerMenu' className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-1">
            <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              Home
            </Link>
            <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              Categories
            </button>
            <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              Contact
            </Link>
            <div className="px-4 py-2">
              <CustomInput
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;