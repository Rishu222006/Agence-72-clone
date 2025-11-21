import React from 'react'

const Blog = () => {
    return (
        <div>
            <div className='text-black mt-[28vh] flex items-center ml-42 font-[font_rk2] text-xl'>
                <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                <div className='font-bold'>Blog</div>
            </div>
            <div className='text-black flex flex-row font-[font_rk1] text-xl font-bold items-justify-center mt-[25vh] ml-[145vh]'>
                <div className='pl-4 pr-4 font-[font_rk2]'>Categories:</div>
                <div className='pl-4 pr-4 bg-gray-200'>All</div>
                <div className='pl-4 pr-4 bg-gray-200'>Creation</div>
                <div className='pl-4 pr-4 bg-gray-200'>Tech & AI</div>
                <div className='pl-4 pr-4 bg-gray-200'>Advice</div>
            </div>
            <div className='w-full bg-black h-[1px] mt-3'></div>
        </div>
    )
}

export default Blog
