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
            <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[url('src\components\common\globe.svg')] bg-cover animate-spin-slow">
                <div className="w-10 h-10 animate-spin-slow opacity-90">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 256 256"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="128" cy="128" r="120" stroke="#cccccc" strokeWidth="4" />
                        <ellipse cx="128" cy="128" rx="120" ry="40" stroke="#cccccc" strokeWidth="4" />
                        <ellipse cx="128" cy="128" rx="40" ry="120" stroke="#cccccc" strokeWidth="4" />
                        <line x1="8" y1="128" x2="248" y2="128" stroke="#cccccc" strokeWidth="4" />
                        <line x1="128" y1="8" x2="128" y2="248" stroke="#cccccc" strokeWidth="4" />
                    </svg>
                </div>
            </div>
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
