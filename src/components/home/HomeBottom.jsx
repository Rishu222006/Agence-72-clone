import React from 'react'
import { Link } from 'react-router-dom'
import Clock from '../common/Clock'

const HomeBottom = () => {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-2 left-2">
        <Clock />
      </div>
      <div className='font-[font_rk2] flex items-center justify-center gap-2 w-full'>
        <div className='lg:border-2 hover:border-orange-300 hover:text-orange-300 lg:h-28 h-30 flex items-center px-1
      lg:px-6 border-white rounded-full uppercase'>
          <Link className='text-[6.5vw] lg:mt-6' to={'/projects'}>Projects</Link>
        </div>

        <div className='lg:border-3 border-2 lg:h-28 h-30 hover:border-orange-300 hover:text-orange-300 flex items-center px-1 
       lg:px-6 border-white rounded-full uppercase'>
          <Link className='text-[6.5vw] lg:mt-4' to={'/about'}>About Us</Link>
        </div>
      </div>

    </div>
  )
}

export default HomeBottom
