import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Search } from 'lucide-react';
import { Link } from 'react-router-dom';



const Navbar = ({ toggleEnrollModal }) => {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // State to track which menu item is currently active
  const [activeItem, setActiveItem] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false); // for transparing nav

  // List of menu items...
  const navLinks = [
    { name: 'About', to: '/about' },
    { name: 'Courses', to: '/courses' },
    { name: 'Events', to: '/events' },
    { name: 'Results', to: '/results' },
    { name: 'Home', to: '/home' },
    { name: 'Careers', to: '/careers' },
    { name: 'Contact', to: '/contact-us' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Terms', to: '/privacy-terms' },
  ];

  // Function to handle clicking a link
  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsOpen(false); // Close mobile menu when a link is clicked
  };


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/80 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
        }`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo Section */}
            <div className="flex items-center space-x-2 mr-4 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transform rotate-8 hover:rotate-0 transition-transform drop-shadow-2xl drop-shadow-blue-500/30 animate-slide-in-left">
                <Link to='/'><img src='./Pngs/logo.png' alt='logo' className="text-white w-full" /></Link>
              </div>

              <div className='animate-slide-in-left'>
                <h1 className="text-2xl font-bold text-white tracking-tight">SSI<span className="text-blue-500">Bannu</span></h1>
              </div>
            </div>


            {/* Desktop Menu (Hidden on mobile) */}
            <div className="hidden md:block animate-fade-in mr-12">
              <div className="ml-10 flex items-baseline sm:space-x-2 md:space-x-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => handleNavClick(item.name)}
                    // Class logic:
                    // - transition-all: Smooth animation for colors
                    // - hover:text-blue-400: Change color on mouse over
                    // - Active state check: adds distinct color and underline style if active
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out relative group ${activeItem === item.name
                      ? 'text-blue-400 bg-slate-800'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                  >
                    {item.name}
                    {/* Animated bottom bar for active/hover state */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-300 ${activeItem === item.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                  </Link>

                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center md:ml-1 space-x-6 animate-slide-in">

              {/* <button className="text-slate-300 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button> */}

              <button
                onClick={toggleEnrollModal}
                className="bg-white text-black px-5 py-1.5 rounded-full font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5"
              >
                Enroll Now
              </button>
            </div>



            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {/* Toggle between Menu icon and X icon */}
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>


        {/* Mobile Menu Dropdown (Conditional Rendering) */}
        {/* Logic: If 'isOpen' is true, show the div. Otherwise, hidden. */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => handleNavClick(item.name)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${activeItem === item.name
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => { toggleEnrollModal(); }}
              className="bg-blue-600 text-white w-full py-3 rounded-lg font-bold mt-4"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar