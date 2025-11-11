import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className='w-full h-[290px] mb-4 flex gap-5'>
            <div className='w-1/2 group transition rounded-none h-full overflow-hidden hover:rounded-[50px] relative'>
                <img src={props.image1} alt="" className='w-full h-full object-cover' />
                <div className='absolute opacity-0 group-hover:opacity-100 top-0 flex items-center justify-center padding-2 left-0 bg-black/10 z-20 h-full w-full'>
                    <h2 className='uppercase text-3xl font-[font_rk1] border-2 rounded-full'>View Project</h2>
                </div>
            </div>
            <div className='w-1/2 group transition rounded-none h-full overflow-hidden hover:rounded-[50px] relative'>
                <img src={props.image2} alt="" className='w-full h-full object-cover' />
                <div className='absolute opacity-0 group-hover:opacity-100 top-0 flex items-center justify-center padding-2 left-0 bg-black/10 z-20 h-full w-full'>
                    <h2 className='uppercase text-3xl font-[font_rk1] border-2 rounded-full'>View Project</h2>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard


