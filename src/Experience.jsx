import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Sea from './Sea'
import PalmIsland from './models/PalmTreeIsland'
import CrabIsland from './models/CrabIsland'
import VolcanoIsland from './models/VolcanoIsland'
import Whale from './models/Whale'
import { Perf } from 'r3f-perf'
extend({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree()

    // const cubeRef = useRef()
    // const groupRef = useRef()

    useFrame((state, delta) =>
    {
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0, 0, 0)

        // cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })

    return <>
        <Perf position="top-left" />
        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Sea />
        <PalmIsland />
        <CrabIsland />
        <VolcanoIsland />
        <Whale />
    </>
}