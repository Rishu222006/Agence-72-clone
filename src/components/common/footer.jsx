import React from "react";
import Clock from "./Clock";

const Base = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bg-black w-full h-[56vh] flex flex-col items-start">
            <div className="flex flex-row mb-[34vh]">
                <div className="flex flex-row gap-6 pt-5 px-6">
                    <div className="font-[font_rk2] text-white border-2 text-[75px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[80px] w-[130px] flex items-center justify-center">
                        FB
                    </div>
                    <div className="font-[font_rk2] text-white border-2 text-[75px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[80px] w-[130px] flex items-center justify-center">
                        IG
                    </div>
                    <div className="font-[font_rk2] text-white border-2 text-[75px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[80px] w-[130px] flex items-center justify-center">
                        IN
                    </div>
                    <div className="font-[font_rk2] text-white border-2 text-[75px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[80px] w-[130px] flex items-center justify-center">
                        BE
                    </div>
                </div>
                <div className="ml-[70vh] pt-5 px-6">
                    <div className="font-[font_rk2] text-white border-2 text-[75px] cursor-pointer hover:text-orange-300 hover:border-orange-300 border-white rounded-[40px] h-[80px] w-[300px] flex items-center justify-center">
                        Contact
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="mr-[150px] ml-[20px]">
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
                <div className="ml-[150px]">
                    <button onClick={scrollToTop}
                        className="font-[font_rk2] text-[25px] hover:text-orange-300 cursor-pointer"
                    >Back To Top
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Base;
