import React from 'react'
import BlogCard from '../components/Blog/BlogCard'

const Blog = () => {
    return (
        <div>
            <div className='text-black mt-[28vh] flex items-center ml-42 font-[font_rk2] text-xl'>
                <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                <div className='font-bold'>Blog</div>
            </div>
            <div className='text-black flex flex-row font-[font_rk1] text-xl font-bold items-justify-center mt-[25vh] ml-[140vh]'>
                <div className='pl-4 pr-4 font-[font_rk2]'>Categories:</div>
                <div className='pl-4 pr-4 bg-gray-200 hover:bg-black hover:text-white'>All</div>
                <div className='pl-4 pr-4 bg-gray-200 hover:bg-black hover:text-white'>Creation</div>
                <div className='pl-4 pr-4 bg-gray-200 hover:bg-black hover:text-white'>Tech & AI</div>
                <div className='pl-4 pr-4 bg-gray-200 hover:bg-black hover:text-white'>Advice</div>
            </div>
            <div className='w-full bg-black h-[1px] mt-3'></div>
            <div className='mx-4 my-4 space-y-20'>
                <BlogCard image1={"https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"}
                    date1={"October 3, 2025"}
                    text1={"Write an article about writing an article with ChatGPT: diving into mise en abyme"}
                    image2={"https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=1280&h=960&s=0710934494c383dae85863a13e713d46"}
                    date2={"May 9, 2025"}
                    text2={"Predictive advertising: AI is revolutionizing targeting"} />
                <BlogCard image1={"https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"}
                    date1={"May 9, 2025"}
                    text1={"Advice & Customer relations: A duo that cannot be briefed, that is built"} />
            </div>
        </div>
    )
}

export default Blog
