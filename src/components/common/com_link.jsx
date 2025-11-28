import React, { useEffect } from 'react'
import Base from './footer'
import { Link } from 'react-router-dom';

const ComLink = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='mt-[30vh] text-italics text-black text-[2vw] mb-[25vh] font-[font_rk1] text-center'>
                <p>This site is not a complete/exact clone</p>
                <p>of the original site hence not all</p>
                <p>the pages and features have not been copied.</p>
                <br />
                <Link className='font-bold border-2 rounded-4xl p-4 transform inline-block hover:bg-black hover:text-white transition-transform hover:scale-125 border-black' to={'/'}>
                    Back To Home Page
                </Link>
            </div>
            <Base />
        </div>
    )
}

export default ComLink
