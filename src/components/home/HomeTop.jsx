import React from 'react'
import Video from './Video'

const HomeTop = () => {
    return (
        <div className='font-[font_rk1] lg:mt-0 mt-72 pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                The spark
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                that
                <div className='h-[8vw] -mt-2 rounded-full overflow-hidden' style={{ clipPath: 'circle(75%)' }}>
                    <Video />
                </div>
                generates
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                their creativity
            </div>
        </div>
    )
}

export default HomeTop
