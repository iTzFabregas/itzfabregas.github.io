import React, { useEffect } from 'react'
import logo from '../assets/sapo_ensaboado.png'

import Aos from "aos";
import 'aos/dist/aos.css'

export default function Aboutme() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div id='about' className='flex justify-center items-center gap-16 bg-neutral-900 text-white h-screen'>
      <img src={logo} alt="capa" className='h-3/5 rounded-3xl'/>
      <div className='text-left w-2/5 font-bold text-xl'>
        <h1 className='text-gray-400 pb-1 font-normal'>Welcome to my site, I'm</h1>
        <h3 className='text-2xl text-white pb-1'>Fabrício Sampaio</h3>
        <h4 className='text-2xl text-gray-300 pb-1'>Computer scientist student</h4>
        <p className='text-gray-500 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint totam voluptate dolorum, quidem eligendi harum veritatis velit ullam, accusamus obcaecati sapiente quo! Ducimus, recusandae quisquam? Aut quae quia sapiente accusamus esse rerum nesciunt eaque! Dolor exercitationem deleniti molestiae, expedita animi provident laudantium accusamus odio natus obcaecati voluptatem ex non amet.</p>
      </div>
    </div>
  )
}
