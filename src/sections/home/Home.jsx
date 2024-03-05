import { Layout } from 'antd'
import React from 'react'
import Gig from '../../components/gig/Gig'
import './home.scss'

function Home() {
  return (
    <Layout className='home-layout'>
        <Gig></Gig>
    </Layout>
  )
}

export default Home