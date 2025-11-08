import React from 'react'
import Video from './Video'

const HomeTop = () => {
    return (
        <div className='font-[font_rk1] pt-5 text-center'>
            <div className='text-[8vw] justify-center flex items-center uppercase leading-[8vw]'>The spark</div>
            <div className='text-[8vw] justify-center flex items-start uppercase leading-[8vw]'>that
                <div className='h-[8vw] -mt-2 rounded-full overflow-hidden' style={{ clipPath: 'circle(75%)' }}><Video /></div>
                generates</div>
            <div className='text-[8vw] justify-center flex items-center uppercase leading-[8vw]'>their creativity</div>
        </div>
    )
}

export default HomeTop
