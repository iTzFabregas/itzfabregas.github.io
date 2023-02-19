import React from 'react'
import logo from '../assets/sapo_ensaboado.png'

export default function Navbar() {
  return (
    <nav className='fixed bg-neutral-900 bg-opacity-75 text-white w-screen'>
      <div className='container flex justify-between items-center pt-4 pb-4 mx-auto'>

        <img src={logo} alt="logo" className='h-12 rounded-full md:ml-16 ml-8' />

        <div id='navbar-itens' class="hidden w-full md:block md:w-auto">

          <ul className='flex gap-16'>
            <li><a href="#about" className='hover:underline'>About</a></li>
            <li><a href="#projects" className='hover:underline'>Projects</a></li>
            <li><a href="#skills" className='hover:underline'>Skills</a></li>
            <li><a href="#contact" className='hover:underline'>Contact</a></li>
          </ul>

        </div>

        <a href="https://github.com/itzfabregas" className='p-3 rounded-full bg-neutral-600 border-2 border-neutral-200 md:mr-16 mr-8 hover:bg-neutral-700'>Portifolio</a>

      </div>
    </nav>

  )
}
