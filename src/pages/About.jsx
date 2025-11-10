import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const About = () => {

    const imgdivRef = useRef(null);
    const imageRf = useRef(null);

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.to(imgdivRef.current, {
            scrollTrigger: {
                trigger: imgdivRef.current,
                start: "top 28%",
                scrub: 1,
                end: 'top -175%',
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                pinType: 'transform',
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                    let imageIndex;
                    if (elem.progress < 1) {
                        imageIndex = Math.floor(elem.progress * imageArray.length)
                    } else {
                        imageIndex = imageArray.length - 1;
                    }
                    imageRf.current.src = imageArray[imageIndex];
                }
            }

        })
    })

    const imageArray = [
    ]

    return (<>
        <div className='section1 mt-[20vh]'>
            <div ref={imgdivRef} className='absolute overflow-hidden top-80 lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] lg:left--[30vw] left-[30vw] lg:rounded-3xl rounded-xl'>
                <img ref={imageRf} src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
                    className='h-full object-cover w-full' />
            </div>
            <div className='relative font-[font_rk2]'>
                <div className=' mt-[55vh]'>
                    <h1 className='text-[14vw] uppercase leading-[15vw] text-center'>Lorem <br />
                        ipsum.</h1>
                </div>
                <div className='pl-[50%] mt-20'>
                    <p className='text-5xl w-3/4 overflow-hidden'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our curiosity fuels our
                        creativity. We remain humble and
                        say no to big egos, even yours. A
                        brand is alive. She has values, a
                        personality, a history. If we forget
                        that, we can make good numbers in
                        the short term, but we kill it in the
                        long term. This is why we are
                        committed to giving perspective, to
                        building influential brands.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default About
