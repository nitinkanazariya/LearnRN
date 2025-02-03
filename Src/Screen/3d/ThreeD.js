
import React, { Suspense } from 'react';
import { View, Text } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { useGLTF } from '@react-three/drei/native';
import useControls from "r3f-native-orbitcontrols";
import { DirectionalLight, PointLight } from 'three';

// 3D Model Component
// function Model3D(props) {
//   const { nodes, materials } = useGLTF(require('./Src/bench.glb'));

//   return (
//     <group {...props} dispose={null} scale={1}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.defaultMaterial.geometry}
//           material={materials.Material__4}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload('./Src/bench.glb'); // Preloading the 3D model

// Main App Component


export function Model3D(props) {
  const { nodes, materials } = useGLTF(require('../3d/bench.glb'))
  return (
    <group {...props} dispose={null} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Bench}
        scale={0.324}
      />
    </group>
  )
}

useGLTF.preload('../3d/bench.glb')
const ThreeD = () => {
  const [OrbitControls, events] = useControls(); // OrbitControls for 3D interaction

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }} {...events}>
      <Canvas>
        <OrbitControls enablePan={true} >
          <DirectionalLight isDirectionalLight={true} color={'#9e9e9e'} intensity={1} />
        </OrbitControls>
        <Suspense fallback={null}>
          <Model3D />
        </Suspense>
      </Canvas>
    </View>
  );
};

export default ThreeD;
