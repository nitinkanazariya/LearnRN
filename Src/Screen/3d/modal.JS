
import React, { } from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Model3D(props) {
  const { nodes, materials } = useGLTF(require('./car2.glb'));
  return (
    <group {...props} dispose={null} scale={1}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Material__4}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/car2.glb');


