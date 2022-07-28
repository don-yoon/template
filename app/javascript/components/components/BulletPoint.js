import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function RotateShape() {
  const myMesh = useRef();
  const [hovered, hover] = useState(false)
  useFrame((state, delta) => {
      myMesh.current.rotation.y += 0.01
  })
  return (
    <mesh
    ref={ myMesh }
    scale={2}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    >
      <dodecahedronGeometry />
      <meshStandardMaterial attach={"material"} color={hovered ? 'green' : 'red'} />
    </mesh>
  );
}
export default function BulletPoint() {
    
  return (

      <Canvas style={{width: "5vw", height: "5vw"}} >
        <directionalLight
          position={[0, 10, 0]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
        <ambientLight intensity={1} />
        <RotateShape />
      </Canvas>

    
  );
}
