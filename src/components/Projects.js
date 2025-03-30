import "aos/dist/aos.css";

export default function Projects() {

    return (
        <div id='projects' className='relative h-screen text-white'>
            <h1 className='font-bold text-5xl text-center'>Some of my projects</h1>
            <div className='p-20 h-[80%] flex w-full justify-between gap-8'>
                <div 
                    data-aos="fade-right" // Aparece subindo
                    data-aos-offset="500" // Só ativa depois de scrolar 200px
                    data-aos-duration="2000" // Tempo da animação
                    className='bg-blue-300 w-full flex flex-col justify-center text-center items-center gap-4 p-5'
                >
                    <p>Cálculo Vocacional - Jornadas Educação</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea recusandae sunt, libero possimus illum esse magnam odio, nulla consequuntur eos culpa ipsum dolores neque officia. Quis, harum consequuntur et, nisi eum iure modi!</p>
                    <img src="./template.png" alt="Site1" className='border-white border transition-all duration-300 hover:scale-105'/>
                </div>
                <div 
                    data-aos="fade-up" // Aparece subindo
                    data-aos-offset="400" // Só ativa depois de scrolar 200px
                    data-aos-duration="10000" // Tempo da animação
                    className='bg-yellow-300 w-full flex flex-col justify-center text-center items-center gap-4 p-5'
                >
                    <p>Cálculo Vocacional - Jornadas Educação</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea recusandae sunt, libero possimus illum esse magnam odio, nulla consequuntur eos culpa ipsum dolores neque officia. Quis, harum consequuntur et, nisi eum iure modi!</p>
                    <img src="./template.png" alt="Site1" className='border-white border transition-all duration-300 hover:scale-105'/>
                </div>
                <div 
                    data-aos="fade-down" // Aparece subindo
                    data-aos-offset="400" // Só ativa depois de scrolar 200px
                    data-aos-duration="1000" // Tempo da animação
                    className='bg-red-300 w-full flex flex-col justify-center text-center items-center gap-4 p-5'
                >
                    <p>Cálculo Vocacional - Jornadas Educação</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea recusandae sunt, libero possimus illum esse magnam odio, nulla consequuntur eos culpa ipsum dolores neque officia. Quis, harum consequuntur et, nisi eum iure modi!</p>
                    <img src="./template.png" alt="Site1" className='border-white border transition-all duration-300 hover:scale-105'/>
                </div>
                <div 
                    data-aos="fade-left" // Aparece subindo
                    data-aos-offset="200" // Só ativa depois de scrolar 200px
                    data-aos-duration="1000" // Tempo da animação
                    className='bg-green-300 w-full flex flex-col justify-center text-center items-center gap-4 p-5'
                >
                    <p>Cálculo Vocacional - Jornadas Educação</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea recusandae sunt, libero possimus illum esse magnam odio, nulla consequuntur eos culpa ipsum dolores neque officia. Quis, harum consequuntur et, nisi eum iure modi!</p>
                    <img src="./template.png" alt="Site1" className='border-white border transition-all duration-300 hover:scale-105'/>
                </div>
            </div>
        </div>
    )
}
