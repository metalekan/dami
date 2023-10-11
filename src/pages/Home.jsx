import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <main className='w-full min-h-screen flex flex-col'>
        <Nav/>
        <Outlet/>
    </main>
  )
}

export default Home