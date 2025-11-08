import React from 'react'

const Project = () => {
    return (
        <div className='p-4 overflow-y-hidden bg-white'>
            <div className='pt-[45vh]'>
                <h2 className='font-[font_rk2] text-black text-[9vw] uppercase'>Projects</h2>
            </div>
            <div className='-mt-10'>
                <div className='w-full h-[290px] mb-4 flex gap-5'>
                    <div className='w-1/2 transition rounded-none h-full overflow-hidden hover:rounded-[50px] relative'>
                        <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" className='w-full h-full object-cover' />
                        <div className='absolute top-0 flex items-center justify-center padding-2 left-0 bg-black/10 z-20 h-full w-full'>
                            <h2 className='uppercase text-3xl font-[font_rk1] border-2 rounded-full'>View Project</h2>
                        </div>
                    </div>
                    <div className='w-1/2 h-full relative overflow-hidden hover:rounded-4xl'>
                        <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" className='w-full h-full object-cover' />
                        <div className='absolute top-0 flex items-center justify-center padding-2 left-0 bg-black/10 z-20 h-full w-full'>
                            <h2 className='uppercase text-3xl font-[font_rk1] border-2 rounded-full'>View Project</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
