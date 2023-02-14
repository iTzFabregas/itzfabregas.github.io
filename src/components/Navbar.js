import React from 'react'
import logo from '../assets/sapo_ensaboado.png'

export default function Navbar() {
  return (
    <div data-aos="fade-up">
        <img src={logo} alt='logo'></img>
        <ul>
            <li>AboutMe</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

    </div>
  )
}
