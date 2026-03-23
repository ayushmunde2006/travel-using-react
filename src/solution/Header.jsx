import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { IoCloseSharp } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Packages', to: 'packages' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    if (menuOpen) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 bg-[#373331] z-1000 left-0 w-full py-4 lg:px-[100px] px-7 transition-all duration-300 ${
          menuOpen
            ? 'bg-black'
            : scrolled
            ? 'bg-black/700 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-orange-600 font-bold lg:text-4xl text-3xl">
            GLOBESPRINT
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-black text-2xl md:hidden z-[60]"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10 text-lg text-black font-poppins">
              {menuLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    className="cursor-pointer hover:text-orange-600 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white z-[55] transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } flex items-center justify-center`}
      >
        <IoCloseSharp
          className="absolute top-5 right-6 text-3xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />

        <ul className="flex flex-col space-y-8 text-2xl text-center font-poppins">
          {menuLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-orange-600 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;