import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Project from './pages/project'
import Nvbar from './components/navigation/Nvbar'
import FullNav from './components/navigation/FullNav'
import Blog from './pages/Blog'
import ComLink from './components/common/com_link'

const App = () => {


  return (
    <div className='text-white overflow-x-hidden'>


      <Nvbar />
      <FullNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/com_link' element={<ComLink />} />
      </Routes>
    </div>
  )
}

export default App
