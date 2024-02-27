import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Carousel from './three/Carousel'
import './projects.scss'

function Projects() {
  return (
    <div className='projects-wrapper'>
      <Canvas>
        <Suspense fallback={null}>
          <Carousel />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Projects