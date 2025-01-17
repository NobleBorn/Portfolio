import { useRef, useState, useEffect } from 'react'

import robotScene from '../assets/3d/robot.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Blade = ({ ...props }) => {
  const ref = useRef()
  
  const {scene} = useGLTF(robotScene)

  useFrame(({ clock }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
  
    // Define the radius of the circle
    const radius = 3; // You can change this for a larger or smaller circle
    const speed = 0.5; // Controls the speed of the circular motion (change to your liking)
  
    // Update X and Z positions to make the object move in a circle
    const angle = clock.elapsedTime * speed;
    ref.current.position.x = Math.cos(clock.elapsedTime * speed) * radius / 2;
    ref.current.position.z = Math.sin(clock.elapsedTime * speed) * radius / 2;

    ref.current.rotation.y = -angle; 
  });

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Blade