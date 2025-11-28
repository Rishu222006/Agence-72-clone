import React from 'react'
import Base from './footer'

const ComLink = () => {
    return (
        <div>
            <div className='mt-[40vh] text-italics text-black text-[3vw] mb-[25vh] font-[font_rk1] text-center'>
                <p>This site is not a
                    <span className='font-bold transform transition-transform cursor-pointer hover:scale-110'> complete/exact </span>
                    clone</p>
                <p>of the original site hence not all</p>
                <p>the pages and features have not been copied.</p>
            </div>
            <Base />
        </div>
    )
}

export default ComLink
