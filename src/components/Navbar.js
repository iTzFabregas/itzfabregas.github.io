import React from 'react'
import logo from '../assets/sapo_ensaboado.png'

export default function Navbar() {
  return (
    <div className='fixed bg-neutral-900 bg-opacity-75 text-white w-full'>
      <div className='flex justify-between items-center p-4 w-full'>

        <img src={logo} alt="logo"  className='h-14 rounded-full ml-16'/>
        <ul className='flex gap-16'>
          <li></li><a href="#about" className='hover:underline'>About</a>
          <li></li><a href="#projects" className='hover:underline'>Projects</a>
          <li></li><a href="#skills" className='hover:underline'>Skills</a>
          <li></li><a href="#contact" className='hover:underline'>Contact</a>
        </ul>
        <a href="https://github.com/itzfabregas" className='p-3 rounded-full bg-neutral-600 border-2 border-neutral-200 mr-16 hover:bg-neutral-700'>Portifólio</a>
        
      </div>
    </div>

  )
}
