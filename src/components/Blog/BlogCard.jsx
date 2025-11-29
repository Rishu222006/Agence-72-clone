import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
    return (
        <div className='w-full h-full mb-[80px] flex gap-5'>

            <div className='w-1/2 flex flex-col'>
                <div className='group h-[400px] overflow-hidden rounded-[50px] relative'>
                    <img
                        src={props.image1}
                        alt=""
                        className='w-full h-full object-cover transition-transform duration-500 ease-out cursor-pointer group-hover:scale-110'
                    />
                </div>
                <div className='text-black flex items-center font-[font_rk2] text-xl mt-4'>
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <div className='font-bold'>{props.date1}</div>
                </div>
                <Link className='text-black flex items-center leading-none font-[font_rk2] text-[40px] mt-4 cursor-pointer hover:underline'
                    to={'/com_link'}>
                    <div className=''>{props.text1}</div>
                </Link>
            </div>

            {props.image2 && (
                <div className='w-1/2 flex flex-col'>
                    <div className='group h-[400px] overflow-hidden rounded-[50px] relative'>
                        <img
                            src={props.image2}
                            alt=""
                            className='w-full h-full object-cover transition-transform duration-500 ease-out cursor-pointer group-hover:scale-110'
                        />
                    </div>
                    <div className='text-black flex items-center font-[font_rk2] text-xl mt-4'>
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <div className='font-bold'>{props.date2}</div>
                    </div>
                    <Link className='text-black flex items-center leading-none font-[font_rk2] text-[40px] mt-4 cursor-pointer hover:underline'
                        to={'/com_link'}>
                        <div className=''>{props.text2}</div>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default BlogCard
