import React from 'react'
import logo from '../assets/sapo_ensaboado.png'

export default function Navbar() {
  return (
    <nav className='fixed bg-neutral-900 bg-opacity-75 text-white w-screen'>
      <div className='container flex flex-wrap justify-between items-center pt-4 mx-auto'>
        <img src={logo} alt="logo" className='h-12 rounded-full ml-16' />

        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

        <div id='navbar-default' class="hidden w-full md:block md:w-auto">
          <ul className='flex gap-16'>
            <li><a href="#about" className='hover:underline'>About</a></li>
            <li><a href="#projects" className='hover:underline'>Projects</a></li>
            <li><a href="#skills" className='hover:underline'>Skills</a></li>
            <li><a href="#contact" className='hover:underline'>Contact</a></li>
          </ul>
        </div>
        <a href="https://github.com/itzfabregas" className='p-3 rounded-full bg-neutral-600 border-2 border-neutral-200 mr-16 hover:bg-neutral-700'>Portifolio</a>

      </div>
    </nav>

  )
}
