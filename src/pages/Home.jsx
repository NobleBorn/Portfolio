import { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Butterfly from '../models/Butterfly'
import HomeInfo from '../components/HomeInfo'
import Robot from '../models/Robot'

import sound from '../assets/magic.mp3'
import soundon from '../assets/icons/soundon.png'
import soundoff from '../assets/icons/soundoff.png'

const Home = () => {
  const audioRef = useRef(new Audio(sound))
  audioRef.current.loop = true
  audioRef.current.volume = 0.4

  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play()
    } 

    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = null
    let screenRotation = [0.1, -0.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2]
      screenPosition = [0, -11, -30]
    } else {
      screenScale = [0.3, 0.3, 0.3]
      screenPosition = [0, -11, -38]
    }

    return [ screenScale, screenPosition, screenRotation ] 

  }

  const adjustButterFlyForScreenSize = () => {
    let screenScale, screenPosition 

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7]
      screenPosition = [0, -1.5, -2]
    } else {
      screenScale = [1, 1, 1]
      screenPosition = [0, -2, -3.5]
    }

    return [ screenScale, screenPosition ] 

  }

  const adjustRobotForScreenSize = () => {
    let screenScale, screenPosition 

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3]
      screenPosition = [0, -500, 0]
    } else {
      screenScale = [0.5, 0.5, 0.5]
      screenPosition = [0, -150, 5]
    }

    return [ screenScale, screenPosition ] 

  }

  const [ islandScale, islandPosition, islandRotation ] = adjustIslandForScreenSize()
  const [ butterflyScale, butterflyPosition ] = adjustButterFlyForScreenSize()
  const [ robotScale, robotPosition ] = adjustRobotForScreenSize()

  return (
    <section className='w-full h-screen relative'> 
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader page='home'/>}>
          <directionalLight position={[1, 3, 1]} intensity={2}/>
          <ambientLight intensity={2} />
          <hemisphereLight skyColor="#b1eff" groundColor="#000000" intensity={1}/>
          <fog attach="fog" args={['#d4d4d4', 0, 150]} />
          
          <Island 
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Butterfly 
            isRotating={isRotating}
            scale={butterflyScale}
            position={butterflyPosition}
            rotation={[0, 1.5, 0]}
          />
          <Robot
            scale={robotScale}
            position={robotPosition}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img 
          src={!isPlayingMusic ? soundoff : soundon} 
          alt='sound' 
          className='w-10 h-10 cursor-pointer object-contain' 
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home