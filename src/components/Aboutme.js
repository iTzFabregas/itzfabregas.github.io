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
    <div id='about' className='text-white'>
      <div className='relative flex md:flex-row flex-col justify-center items-center md:gap-16 gap-8 h-screen'>

        <img src={logo} alt="capa" className='relative md:w-4/12 w-5/12 rounded-3xl' />

        <div className='bg-[#171717] p-8 rounded-3xl relative md:text-left text-center md:w-2/5 w-4/5 font-bold text-'>

          <h1 className='text-gray-400 pb-1 font-normal'>Welcome to my site, I'm</h1>
          <h3 className='text-2xl text-white pb-1'>Fabrício Sampaio</h3>
          <h4 className='text-2xl text-gray-300 pb-1'>Computer scientist student</h4>
          <p className='text-gray-500 font-normal pb-4 text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint totam voluptate dolorum, quidem eligendi harum veritatis velit ullam, accusamus obcaecati sapiente quo! Ducimus, recusandae quisquam? Aut quae quia sapiente accusamus esse rerum nesciunt eaque! Dolor exercitationem deleniti molestiae, expedita animi provident laudantium accusamus odio natus obcaecati voluptatem ex non amet.</p>

          <ul className='flex gap-5 md:justify-start justify-center'>
            <li className='text-4xl hover:text-neutral-500'><a href="https://github.com/iTzFabregas" target="_blank" rel="noreferrer" data-aos="zoom-in"><FaGithub /></a></li>
            <li className='text-4xl hover:text-neutral-500'><a href="https://www.linkedin.com/in/fabricio-sampaio" target="_blank" rel="noreferrer" data-aos="zoom-in"><FaLinkedinIn /></a></li>
            <li className='text-4xl hover:text-neutral-500'><a href="mailto:fabricio-sampaio@usp.br" target="_blank" rel="noreferrer" data-aos="zoom-in"><FaEnvelope /></a></li>
          </ul>

        </div>
      </div>

    </div>
  )
}
