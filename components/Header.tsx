
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClasses = "bg-dark-tertiary text-white";
  const inactiveLinkClasses = "text-gray-300 hover:bg-dark-secondary hover:text-white";

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;

  return (
    <header className="bg-dark-secondary/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold text-white tracking-wider">
              <span className="text-brand-purple">A</span>ura
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
              <NavLink to="/category/VN" className={getNavLinkClass}>VN Templates</NavLink>
              <NavLink to="/category/CapCut" className={getNavLinkClass}>CapCut Templates</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-dark-tertiary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={getNavLinkClass} end onClick={()=>setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/category/VN" className={getNavLinkClass} onClick={()=>setIsMenuOpen(false)}>VN Templates</NavLink>
            <NavLink to="/category/CapCut" className={getNavLinkClass} onClick={()=>setIsMenuOpen(false)}>CapCut Templates</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
