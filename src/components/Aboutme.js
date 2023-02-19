import React, { useEffect } from 'react'
import logo from '../assets/sapo_ensaboado.png'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

import Aos from "aos";
import 'aos/dist/aos.css'

export default function Aboutme() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div id='about' className='flex justify-center items-center gap-16 bg-neutral-900 text-white h-screen'>
      <img src={logo} alt="capa" className='h-3/6 rounded-3xl shadow-my shadow-white' data-aos='fade-right'/>
      <div className='text-left w-2/5 font-bold text-xl'>
        <h1 className='text-gray-400 pb-1 font-normal'>Welcome to my site, I'm</h1>
        <h3 className='text-2xl text-white pb-1'>Fabrício Sampaio</h3>
        <h4 className='text-2xl text-gray-300 pb-1'>Computer scientist student</h4>
        <p className='text-gray-500 font-normal pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint totam voluptate dolorum, quidem eligendi harum veritatis velit ullam, accusamus obcaecati sapiente quo! Ducimus, recusandae quisquam? Aut quae quia sapiente accusamus esse rerum nesciunt eaque! Dolor exercitationem deleniti molestiae, expedita animi provident laudantium accusamus odio natus obcaecati voluptatem ex non amet.</p>
        <ul className='flex gap-5'>
          <li className='text-4xl hover:text-neutral-500'><a href="https://github.com/iTzFabregas"><FaGithub /></a></li>
          <li className='text-4xl hover:text-neutral-500'><a href="https://www.linkedin.com/in/fabricio-sampaio"><FaLinkedinIn /></a></li>
          <li className='text-4xl hover:text-neutral-500'><a href="mailto:fabricio-sampaio@usp.br"><FaEnvelope /></a></li>
        </ul>
      </div>
    </div>
  )
}
