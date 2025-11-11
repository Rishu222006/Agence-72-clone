import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { useGSAP } from '@gsap/react';

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

    {
        image1: "https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd",
        image2: "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14"
    },
    {
        image1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg",
        image2: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
    }
    ];

    /*useGSAP(function () {
        gsap.from('.hero', {
            height: 0
        })
    })*/

    return (
        <div className='p-4 overflow-y-hidden bg-white'>
            <div className='pt-[45vh]'>
                <h2 className='font-[font_rk2] text-black text-[9vw] uppercase'>Projects</h2>
            </div>
            <div className='-mt-10'>
                {projects.map(function (elem) {
                    return <div>
                        <ProjectCard image1={elem.image1} image2={elem.image2} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Project
