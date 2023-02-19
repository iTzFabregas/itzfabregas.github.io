import React from 'react'
import logo from '../assets/sapo_ensaboado.png'

export default function Navbar() {
  return (
    
    <div className='flex'>

      <img src={logo} alt="EUUU" />
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <a href="https://github.com/itzfabregas">Portifólio</a>
    </div>

  )
}
