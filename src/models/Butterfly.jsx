import { useRef, useEffect } from 'react'

import butterflyScene from '/assets/3d/butterfly.glb'
import { useGLTF, useAnimations } from '@react-three/drei'

const Butterfly = ({isRotating, ...props}) => {
  const ref = useRef()

  const {scene, animations} = useGLTF(butterflyScene)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    if (isRotating) {
      actions['Idle'].stop()
      actions['Flying'].play()
    } else {
      actions['Flying'].stop()
      actions['Idle'].play()
    }
  }, [actions, isRotating])
  
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Butterfly