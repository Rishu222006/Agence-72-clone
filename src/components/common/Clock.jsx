import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const Interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(Interval);
    }, []);

    const formattedTime = time.toLocaleTimeString("en-CA", {
        hour12: false,
    })

    return (
        <div className='font-[font_rk2] flex flex-row'>
            <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[url('/globe.svg')] bg-cover animate-spin-slow" />

            <div className='flex flex-row text-[25px]'>
                <h2 className='px-4'>
                    Delhi
                </h2>
                <h1>
                    {formattedTime}
                </h1>
            </div>
        </div>
    )
}

export default Clock
