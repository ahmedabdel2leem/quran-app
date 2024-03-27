"use client"
import React, { useState } from 'react'
import 'flowbite';
import Link from 'next/link';


export function EmblaCarouselReading() {
    const [activeLinkTranslate, setActiveLinkTranslate] = useState(false);
    const [activeLinkReading, setActiveLinkReading] = useState(false);

    const handleSetActiveLinkTranslate = () => {
        setActiveLinkTranslate(true);
        setActiveLinkReading(false); // Deactivate the other link
    };

    const handleSetActiveLinkReading = () => {
        setActiveLinkReading(true);
        setActiveLinkTranslate(false); // Deactivate the other link
    };


    return <>
    


        <div id="indicators-carousel " className="relative max-w-6xl mx-auto " data-carousel="static">
           
                <div className="buttns flex w-fit mx-auto py-4 px-3 rounded-[20px] border my-4 ">
                    <Link href="/"><h3 className={`${activeLinkTranslate ? "active" : '' } bg-teal-500 p-3 text-[20px] text-white rounded-[15px] mr-10`} onClick={handleSetActiveLinkTranslate}>translate</h3></Link>
                    <Link href="/"><h3 className={`${activeLinkReading ? "active" : '' } bg-teal-500 p-3 text-[20px] text-white rounded-[15px] `} onClick={handleSetActiveLinkReading}>reading</h3></Link>
            </div>
            {/* Carousel wrapper */}
            <div className="relative flex justify-center items-center  h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className="hidden absolute  duration-700 ease-in-ou" data-carousel-item="active">
                    <p className='w-[40%] text-center m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae! Nesciunt et nobis, numquam accusamus, eius maxime nam perspiciatis voluptates, atque obcaecati tempora aperiam labore ipsam velit accusantium cumque omnis? 1
                    </p>
                </div>
                {/* Item 2 */}
                <div className="hidden absolute duration-700 ease-in-out " data-carousel-item>
                    <p className='w-[40%] text-center m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae! Nesciunt et nobis, numquam accusamus, eius maxime nam perspiciatis voluptates, atque obcaecati tempora aperiam labore ipsam velit accusantium cumque omnis? 2
                    </p>
                </div>
                {/* Item 3 */}
                <div className="hidden absolute duration-700 ease-in-out" data-carousel-item>
                    <p className='w-[40%] text-center m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae! Nesciunt et nobis, numquam accusamus, eius maxime nam perspiciatis voluptates, atque obcaecati tempora aperiam labore ipsam velit accusantium cumque omnis? 3
                    </p>
                </div>
            </div>
            {/* Slider indicators */}
            <div className="relative flex justify-center z-30 space-x-3 rtl:space-x-reverse ">
                <button type="button" className="w-3 h-3  rounded-full bg-teal-500" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
                <button type="button" className="w-3 h-3 rounded-full bg-teal-500" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
                <button type="button" className="w-3 h-3 rounded-full bg-teal-500" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
              
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 dark:bg-gray-800/30 group-hover:bg-teal-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 dark:bg-gray-800/30 group-hover:bg-teal-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>



    </>
}

