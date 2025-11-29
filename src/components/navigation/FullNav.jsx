import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { Navbarcontext } from '../common/Navcontext'
import { Link } from 'react-router-dom'
import Clock from '../common/Clock'

const FullNav = () => {

    const stairParentRef = useRef(null);
    const screenRef = useRef(null);
    const [navOpen, setNavOpen] = useContext(Navbarcontext);
    console.log(navOpen);

    function animAtion() {
        const tl = gsap.timeline();
        tl.to('.fullnav', {
            display: 'block'
        })
        tl.to('.navanim', {
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1,
        })
    }

    function animationReverse() {
        const tl = gsap.timeline();
        tl.to('.navlink', {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        })
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        }, "-=0.2")
        tl.to('.navanim', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.fullnav', {
            display: 'none',
        })
    }

    useGSAP(function () {
        if (navOpen) {
            animAtion();
        } else {
            animationReverse();
        }
    }, [navOpen])


    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [navOpen]);

    return (
        <div ref={screenRef} id='fullnav' className='fullnav hidden h-screen w-screen pointer-events-auto overflow-x-hidden fixed inset-0 z-50'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='navanim h-full w-1/5 bg-black'></div>
                    <div className='navanim h-full w-1/5 bg-black'></div>
                    <div className='navanim h-full w-1/5 bg-black'></div>
                    <div className='navanim h-full w-1/5 bg-black'></div>
                    <div className='navanim h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={stairParentRef} className='relative'>
                <div className='flex justify-between p-5 w-full items-start'>
                    <div className=''>
                        <div className='w-36 navlink'>
                            <svg className='w-full ' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                                <path fill='white' d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div className='navlink h-36 w-36 flex items-center justify-center cursor-pointer group'>
                            <div
                                onClick={() => {
                                    setNavOpen(false)
                                }} className='relative w-40 h-40'>
                                <div className='absolute w-0.5 h-40 bg-white group-hover:bg-orange-400 top-1/2 left-1/2 transform -translate-y-1/2 rotate-45'></div>
                                <div className='absolute w-0.5 h-40 bg-white group-hover:bg-orange-400 top-1/2 left-1/2 transform -translate-y-1/2 -rotate-45'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='links' className=''>
                    <div className='link origin-top relative border-white border-y-1'>
                        <Link to={'/projects'}>
                            <h1 className='font-[font_rk2] text-5xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-5 pt-3 uppercase'>Projects</h1>
                        </Link>
                        <div className='moveLink pointer-events-none text-black bg-orange-400 flex top-0 absolute'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To See Everything</h2>
                                <img className='h-29 rounded-full shrink-0 w-70  object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To See Everything</h2>
                                <img className='h-29 rounded-full w-70 shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To See Everything</h2>
                                <img className='h-29 rounded-full shrink-0 w-70  object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To See Everything</h2>
                                <img className='h-29 rounded-full w-70 shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-white border-y-1'>
                        <Link to={'/about'}>
                            <h1 className='font-[font_rk2] text-5xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-5 pt-3 uppercase'>About Us</h1>
                        </Link>
                        <div className='moveLink pointer-events-none text-black bg-orange-400 flex top-0 absolute'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To Know Everything</h2>
                                <img className='h-29 rounded-full shrink-0 w-70  object-cover' src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg" />
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To Know Everything</h2>
                                <img className='h-29 rounded-full w-70 shrink-0 object-cover' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To Know Everything</h2>
                                <img className='h-29 rounded-full shrink-0 w-70  object-cover' src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg" />
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To Know Everything</h2>
                                <img className='h-29 rounded-full w-70 shrink-0 object-cover' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-white border-y-1'>
                        <Link to={'/'}>
                            <h1 className='font-[font_rk2] text-5xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-5 pt-3 uppercase'>Contact</h1>
                        </Link>
                        <div className='moveLink pointer-events-none text-black bg-orange-400 flex top-0 absolute'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To Send A Fax</h2>
                                <img className='h-29 rounded-full shrink-0 w-70  object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To Send A Fax</h2>
                                <img className='h-29 rounded-full w-70 shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To Send A Fax</h2>
                                <img className='h-29 rounded-full shrink-0 w-70  object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>To Send A Fax</h2>
                                <img className='h-29 rounded-full w-70 shrink-0 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-white border-y-1'>
                        <Link to={'/blogs'}>
                            <h1 className='font-[font_rk2] text-5xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-5 pt-3 uppercase'>Blog</h1>
                        </Link>
                        <div className='moveLink pointer-events-none text-black bg-orange-400 flex top-0 absolute'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>Read The Articles</h2>
                                <img className='h-29 rounded-full shrink-0 w-70  object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" />
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>Read The Articles</h2>
                                <img className='h-29 rounded-full w-70 shrink-0 object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>Read The Articles</h2>
                                <img className='h-29 rounded-full shrink-0 w-70  object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" />
                                <h2 className='whitespace-nowrap font-[font_rk1] text-[6vw] text-center leading-[0.8] p-2 uppercase'>Read The Articles</h2>
                                <img className='h-29 rounded-full w-70 shrink-0 object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" />
                            </div>
                        </div>
                    </div>
                    <div className='link mt-[10vh] flex flex-row'>
                        <div className="mr-[135px] ml-0">
                            <Clock />
                        </div>
                        <div className="flex flex-row justify-center items-center px-20">
                            <div className="px-4 font-[font_rk1] hover:text-orange-300 cursor-pointer">
                                PRIVACY POLICY
                            </div>
                            <div className="px-4 font-[font_rk1] hover:text-orange-300 cursor-pointer">
                                PRIVACY NOTICE
                            </div>
                            <div className="px-4 font-[font_rk1] hover:text-orange-300 cursor-pointer">
                                ETHICAL REPORT
                            </div>
                            <div className="px-4 font-[font_rk1] hover:text-orange-300 cursor-pointer">
                                CONSENT OPTIONS
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row gap-2 pt-5  right-0 px-6">
                                <Link className="font-[font_rk2] text-white border-2 text-[40px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[35px] w-[70px] flex items-center justify-center"
                                    to={'/com_link'}>
                                    FB
                                </Link>
                                <Link className="font-[font_rk2] text-white border-2 text-[40px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[35px] w-[70px] flex items-center justify-center"
                                    to={'/com_link'}>
                                    IG
                                </Link>
                                <Link className="font-[font_rk2] text-white border-2 text-[40px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[35px] w-[70px] flex items-center justify-center"
                                    to={'/com_link'}>
                                    IN
                                </Link>
                                <Link className="font-[font_rk2] text-white border-2 text-[40px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[35px] w-[70px] flex items-center justify-center"
                                    to={'com_link'}>
                                    BE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullNav
