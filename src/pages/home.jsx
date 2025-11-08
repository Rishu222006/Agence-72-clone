import React from 'react'
import Video from '../components/home/Video'
import HomeTop from '../components/home/HomeTop'
import HomeBottom from '../components/home/HomeBottom'
import HomeBody from '../components/home/HomeBody'

const Home = () => {
    return (
        <div>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden'>
                <HomeTop />
                <HomeBody />
                <HomeBottom />
            </div>
        </div>
    )
}

export default Home
