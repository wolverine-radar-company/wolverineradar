import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const { query } = router;
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (query.success) {
      window.history.replaceState({}, document.title, '/');
      setSuccess(JSON.parse(query.success));
    }
    setTimeout(() => {
      setSuccess(false);
    }, 2000); // Timeout after 2 seconds
  }, [query.success]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // If scrolling down and beyond a certain point, hide the navbar
        setIsMobileMenuOpen(false);
        setIsVisible(false);
      } else {
        // If scrolling up, show the navbar
        setIsVisible(true);
      }

      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <nav className={`${isVisible ? 'top-0' : '-top-24'} transition-top duration-300 ease-in-out fixed w-full z-50 ${isMobileMenuOpen || hasScrolled ? 'bg-black' : 'bg-transparent'} `}>
      {success && (
        <div className="text-center text-white_txt text-lg bg-success h-10 mb-2 flex justify-center items-center">
          <p>Successfully logged out.</p>
        </div>
      )}
      <header className="p-3 font-extrabold text-white_txt">
        <div className="mx-auto flex h-16 items-center gap-4 sm:gap-8">
          <Link className={`flex items-center`} href="/">
            <Image src="/logo.png" width={30} height={30} alt="Logo" />
            <span className="ml-4 text-2xl hidden md:block">Wolverine Radar</span>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between font-extrabold">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li className='group transition-all duration-300 ease-in-out'>
                  {/* <Link href="/products" className="text-wr_text bg-left-bottom bg-gradient-to-r from-wr_red to-wr_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Products
                  </Link> */}
                </li>
                <li className='group transition-all duration-300 ease-in-out'>
                  <Link href="/blog" className="text-wr_text bg-left-bottom bg-gradient-to-r from-wr_yellow to-wr_yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Blog
                  </Link>
                </li>
                <li className='group transition-all duration-300 ease-in-out'>
                  <Link href="/contact" className="text-wr_text bg-left-bottom bg-gradient-to-r from-wr_yellow to-wr_yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 text-large lg:mr-8">
              <div className='group transition-all duration-300 ease-in-out'>
                <Link className='text-white text-sm hidden md:inline-block bg-left-bottom bg-gradient-to-r from-wr_cyan to-wr_cyan bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href={"/account/dashboard"}>
                  Dashboard
                </Link>
              </div>
              <div className="sm:flex sm:gap-4">
                <Link
                  href={user ? '/api/auth/logout' : '/api/auth/login'}
                  className="border border-white block rounded-md px-5 py-2.5 text-sm text-white transition hover:border-wr_blue"
                >
                  {user ? 'Logout' : 'Login'}
                </Link>
              </div>

              <button
                className="block rounded p-2.5 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Toggle menu</span>
                {isMobileMenuOpen ? <AiOutlineClose className="h-5 w-5 mr-4" /> : <AiOutlineMenu className="h-5 w-5 mr-4" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden font-extrabold absolute w-full h-full bg-black right-0">
            <ul className="px-10 flex-col items-center text-right gap-6 text-sm bg-black bottom-0 max-h-screen">
              <li className="py-5 group transition-all duration-300 ease-in-out">
                <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} href="/account/dashboard" className="text-wr_text bg-left-bottom bg-gradient-to-r from-wr_cyan to-wr_cyan bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {"Dashboard"}
                </Link>
              </li>
              <li className="py-5 group transition-all duration-300 ease-in-out">
                <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} href="/products" className="text-wr_text bg-left-bottom bg-gradient-to-r from-wr_red to-wr_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Products
                </Link>
              </li>
              <li className="py-5 group transition-all duration-300 ease-in-out">
                <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} href="/blog" className="text-wr_text bg-left-bottom bg-gradient-to-r from-wr_yellow to-wr_yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Blog
                </Link>
              </li>
              <li className="py-5 group transition-all duration-300 ease-in-out">
                <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} href="/contact" className="text-wr_text bg-left-bottom bg-gradient-to-r from-wr_yellow to-wr_yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </nav>
  );
}
