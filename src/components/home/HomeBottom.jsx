import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font_rk2] flex items-center justify-center gap-2'>
      <div className='lg:border-3 border-2 hover:border-orange-300 hover:text-orange-300 lg:h-44 h-30 flex items-center px-3 pt-1
      lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6.5vw] lg:mt-6' to={'/projects'}>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 lg:h-44 h-30 hover:border-orange-300 hover:text-orange-300 flex items-center px-3 pt-1 
       lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6.5vw] lg:mt-4' to={'/about'}>About Us</Link>
      </div>
    </div>
  )
}

export default HomeBottom
