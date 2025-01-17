import { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import DemoComputer from '../models/DemoComputer'
import Loader from '../components/Loader'
import CTA from '../components/CTA'

const projectCount = myProjects.length

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const currentProject = myProjects[currentProjectIndex]

  const handleNavigation = (direction) => {
    setCurrentProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    })
  }

  return (
    <section className='w-full h-full' style={{backgroundColor: '#222222' }}>
      <section className='max-container'>
        <p className='head-text text-white'>My Projects</p>

        <div className='mt-5 flex flex-col gap-3 text-white'>
          <p>They consist of both school assignments and personal initiatives.
             Through my coursework, I've worked on various projects that have helped me apply my knowledge to real-world scenarios, while my own side projects allow me to explore new technologies and experiment with different programming concepts.
             These experiences have helped me grow as a developer and have allowed me to continually challenge myself and improve my skills. </p>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
          <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
            <div className='absolute top-0 right-0'>
              <img src={currentProject.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl' />
            </div>

            <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
              <img src={currentProject.logo} alt='logo' className='w-10 h-10 shadow-sm' />
            </div>

            <div className='flex flex-col gap-5 text-white -600 my-5'>
              <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
              <p className='animatedText text-white'>{currentProject.desc}</p>
              <p className='animatedText text-white'>{currentProject.subdesc}</p>
            </div>

            <div className='flex items-center justify-between flex-wrap gap-5'>
              <div className='flex items-center gap-3'>
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className='tech-logo'>
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              <a className='flex items-center gap-2 cursor-pointer text-white' href={currentProject.href} target='_blank' rel='noreferrer'>
                <p>View Project</p>
                <img src='src/assets/images/arrow-up.png' className='w-3 h-3' alt='arrow' />

              </a>
            </div>

            <div className='flex justify-between items-center mt-7'>
              <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
                <img src='src/assets/images/left-arrow.png' className='w-4 h-4' alt='left arrow' />
              </button>
              <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                <img src='src/assets/images/right-arrow.png' className='w-4 h-4' alt='right arrow' />
              </button>
            </div>
          </div>

          <div className='shadow-2xl shadow-black-200 rounded-lg h-96 md:h-full'>
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />

              <Center>
                <Suspense fallback={<Loader page='projects'/>}>
                  <group scale={1.7} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture}/>
                  </group>
                </Suspense>
              </Center>
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

            </Canvas>
          </div>
        </div>

        <hr className='border-slate-50 mt-10' />

        <CTA />
      </section>
    </section>
  )
}

export default Projects