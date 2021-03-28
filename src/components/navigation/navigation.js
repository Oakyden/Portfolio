import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav 
    id="nav"
    role="navigation"
    class="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
  >
    <li className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">
      <Link to="/">Home</Link>
    </li>
    <li className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">
      <Link to="/blog/">Blog</Link>
    </li>
    <div class="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
      <a href="#_" class="w-full py-2 font-bold text-center text-pink-500">Login</a>
      <a href="#_" class="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-indigo-700 fold-bold">Get Started</a>
    </div>
  </nav>
)
