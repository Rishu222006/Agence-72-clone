import React from 'react'

const BlogCard = (props) => {
    return (
        <div className='w-full h-full mb-4 flex gap-5'>

            <div className='w-1/2 flex flex-col'>
                <div className='group h-[400px] overflow-hidden rounded-[50px] relative'>
                    <img
                        src={props.image1}
                        alt=""
                        className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
                    />
                </div>
                <div className='text-black flex items-center font-[font_rk2] text-xl mt-4'>
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <div className='font-bold'>{props.date1}</div>
                </div>
                <div className='text-black flex items-center leading-none font-[font_rk2] text-[40px] mt-4'>
                    <div className=''>{props.text1}</div>
                </div>
            </div>

            <div className='w-1/2 flex flex-col'>
                <div className='group h-[400px] overflow-hidden rounded-[50px] relative'>
                    <img
                        src={props.image2}
                        alt=""
                        className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
                    />
                </div>
                <div className='text-black flex items-center font-[font_rk2] text-xl mt-4'>
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <div className='font-bold'>{props.date2}</div>
                </div>
                <div className='text-black flex items-center leading-none font-[font_rk2] text-[40px] mt-4'>
                    <div className=''>{props.text2}</div>
                </div>
            </div>

        </div>
    )
}

export default BlogCard
