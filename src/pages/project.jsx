import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Base from "../components/common/footer";

const Project = () => {

    const projects = [{
        image1: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
        image2: "https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
    },
    {
        image1: "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
        image2: "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821"
    },
    {
        image1: "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
        image2: "https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124"
    },

        /*{
            image1: "https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd",
            image2: "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14"
        },
        {
            image1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg",
            image2: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
        }*/
    ];

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(function () {
        gsap.from('.hero', {
            height: '100px',
            stagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: '.lol',
                start: 'top 100%',
                end: 'top -150%',
                scrub: true,
            }
        })
    });

    return (
        <div>
            <div className='lg:p-4 p-2 overflow-y-hidden bg-white'>
                <div className='pt-[45vh]'>
                    <h2 className='font-[font_rk2] text-black lg:text-[9.5vw] text-7xl uppercase'>Projects</h2>
                </div>
                <div className='-lg:mt-20 lol'>
                    {projects.map(function (elem, idx) {
                        return <div key={idx} className='hero h-[600px] lg:h-[850px] w-full mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
                            <ProjectCard image1={elem.image1} image2={elem.image2} />
                        </div>
                    })}
                </div>
            </div>
            <Base />
        </div>
    )
}

export default Project
