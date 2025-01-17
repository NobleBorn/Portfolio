import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import islandScene from '/assets/3d/island.glb'

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }, ref) => {
  const islandRef = useRef()

  const group = useRef()

  const { gl, viewport } = useThree()
  const { nodes, materials, animations } = useGLTF(islandScene)
  const { actions } = useAnimations(animations, group)

  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    };
  }

  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(1);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(2);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={islandRef} {...props} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="butterfly_6"
                position={[21.205, 55.192, 34.777]}
                rotation={[0, -0.853, 0]}
                scale={6.574}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.butterfly}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="butterfly__5" />
                </group>
              </group>
              <group
                name="Cube_7"
                position={[-0.481, 59.978, 0.699]}
                scale={[-174.944, 174.944, 174.944]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Sphere}
                />
              </group>
              <group
                name="Light_8"
                position={[-76.03, 179.407, 51.884]}
                rotation={[1.19, 1.055, -1.611]}
                scale={0.383}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group name="Tree_main_9" position={[0, 38.153, 0]} scale={0.417}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Tree_main_and_grass_robot}
                />
              </group>
              <group name="Tree_up_10" position={[-5.915, 116.301, 4.803]} scale={0.082}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Tree_up}
                />
              </group>
              <group name="Robot_11" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Robot}
                />
              </group>
              <group name="grass_main_12" position={[0, 38.967, 0]} scale={0.101}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Grass_down}
                />
              </group>
              <group
                name="Plane_13"
                position={[1.739, 63.316, -37.507]}
                rotation={[0.005, -0.001, -0.003]}
                scale={0.305}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group name="Plane001_14" position={[57.853, 33.041, 73.42]} scale={0.306}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane002_15"
                position={[69.083, 33.247, 19.37]}
                rotation={[-0.011, 0.006, 0.001]}
                scale={0.308}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group name="Plane003_16" position={[92.863, 32.319, -15.171]} scale={0.306}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group name="Plane004_17" position={[30.67, 65.47, 56.263]} scale={0.305}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane005_18"
                position={[82.241, 58.908, -33.3]}
                rotation={[-0.006, 0.003, 0]}
                scale={0.306}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane006_19"
                position={[44.661, 70.548, -12.69]}
                rotation={[-0.006, 0.006, 0.001]}
                scale={0.305}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane007_20"
                position={[47.795, 53.954, -14.125]}
                rotation={[0.005, -0.003, -0.003]}
                scale={0.305}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane008_21"
                position={[26.726, 62.139, 0.094]}
                rotation={[0.003, -0.001, -0.006]}
                scale={0.307}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane009_22"
                position={[36.199, 51.669, 4.72]}
                rotation={[-0.004, 0.004, 0.003]}
                scale={0.306}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane010_23"
                position={[26.152, 58.314, -24.463]}
                rotation={[-0.006, 0.004, 0.001]}
                scale={0.306}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane012_24"
                position={[-20.865, 83.645, -34.65]}
                rotation={[-0.008, 0.004, 0.001]}
                scale={0.305}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane013_25"
                position={[-37.308, 67.816, -4.285]}
                rotation={[-0.004, 0.002, 0.001]}
                scale={0.305}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane014_26"
                position={[-46.179, 50.708, -23.877]}
                rotation={[-0.002, 0.001, 0.001]}
                scale={0.305}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane015_27"
                position={[-49.394, 62.611, -38.923]}
                rotation={[0.003, -0.002, -0.002]}
                scale={0.305}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane016_28"
                position={[-58.197, 68.525, -7.572]}
                rotation={[0.007, -0.001, -0.004]}
                scale={0.305}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials['emission.001']}
                />
              </group>
              <group
                name="Plane017_29"
                position={[-59.853, 42.106, -37.005]}
                rotation={[-0.004, 0.003, 0.001]}
                scale={0.305}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials['emission.001']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

export default Island
