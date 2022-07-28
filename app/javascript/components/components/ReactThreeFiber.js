import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function ReactThreeFiber() {
  return (
    <>
    <h2 className="text-2xl font-bold">React3 Fiber Demo</h2>
      <Canvas shadows>
        <directionalLight position={[0,10,0]} intensity={1} castShadow shadow-mapSize={[1024,1024]}/>

        <ambientLight intensity={1}/>

        <mesh castShadow position={[0,1,0]}>
          <sphereGeometry />
          <meshStandardMaterial attach={'material'} color='red'/>
        </mesh>

        <mesh castShadow position={[-5,1,0]}>
          <boxGeometry />
          <meshStandardMaterial attach={'material'} color='red'/>
        </mesh>

        <mesh castShadow position={[5,1,0]}>
          <dodecahedronGeometry />
          <meshStandardMaterial attach={'material'} color='red'/>
        </mesh>

        {/* <mesh rotation={[-Math.PI/2, 0, 0]} position={[0,-.5,0]} receiveShadow>
          <planeBufferGeometry attach={'geometry'} args={[25,25]}  />
          <meshPhongMaterial attach={'material'} color='white'/>
        </mesh> */}

        <OrbitControls/>

      </Canvas>
    </>
  )
}
