import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 80) {
          navbar.classList.add('bg-black');
        } else {
          navbar.classList.remove('bg-black');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id='navbar' className="bg-primary_white p-4 color-primary font-extrabold text-white_txt fixed w-full top-0 z-10">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-8 lg:px-10">
        <Link className="flex items-center" href="/">
          <Image
            src="/White_Icon_Transparent.PNG"
            width={30}
            height={35}
            alt="Logo"
          />
          <span className='ml-2 font-extrabold'>Wolverine Radar</span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between font-extrabold">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link href="/team" className="text-gray-500 transition hover:text-gray-500/75">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 transition hover:text-gray-500/75">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 text-large">
            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <AiOutlineClose className="h-5 w-5" />
              ) : (
                <AiOutlineMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden font-extrabold">
          <ul className="px-20 flex-col items-center text-right gap-6 text-sm">
            <li className='py-5 underline'>
              <Link href="/team" className="text-gray-500 transition hover:text-gray-500/75">
                Team
              </Link>
            </li>
            <li className='py-5 underline'>
              <Link href="/blog" className="text-gray-500 transition hover:text-gray-500/75">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
