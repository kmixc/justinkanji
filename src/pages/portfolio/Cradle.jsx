import React from 'react'

import cradle_1 from "../../img/cradle/cradle_screen_1.png"
import cradle_2 from "../../img/cradle/cradle_screen_2.png"
import cradle_3 from "../../img/cradle/cradle_screen_3.png"
import cradle_4 from "../../img/cradle/cradle_screen_4.png"
import cradle_5 from "../../img/cradle/cradle_samplepost.png"
import cradle_6 from "../../img/cradle/cradle_userjourneymap.jpg"


export default function Cradle() {
    return (
        <div>
            <div className='mt-24'>
                <div className='bg-red-400 text-black font-bold lg:w-1/6 sm:w-full lg:h-96 sm:h-56 flex flex-col justify-center items-center lg:absolute p-12 lg:ml-72 lg:mt-32 sm:mt-24'>
                    <h2 className='text-5xl text-center'>Cradle.</h2>
                    <h3 className='text-2xl text-center'>Never Lose Sight</h3>
                    <p className='text-md text-center'>one-of-a-kind built in baby monitor right on your phone</p>
                </div>
                <div className='flex justify-end'>
                    <div className='bg-yellow-200 text-black font-bold flex flex-col justify-center items-center lg:w-4/6 sm:w-full lg:mr-24 p-12'>
                        <div className='flex justify-center'>
                            <img src={cradle_1} className="lg:w-1/4 sm:w-3/6 max-sm:w-3/6 p-5" alt="" />
                            <img src={cradle_2} className="lg:w-1/4 sm:w-3/6 max-sm:w-3/6 p-5 pt-12" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-24'>
                <div className='bg-yellow-200 text-black font-bold flex flex-col justify-center items-center lg:w-5/6 sm:w-full lg:mr-24 p-12'>
                    <div className='flex justify-center'>
                        <img src={cradle_1} className="lg:w-1/5 sm:w-3/6 max-sm:w-3/6 p-5" alt="" />
                        <img src={cradle_2} className="lg:w-1/5 sm:w-3/6 max-sm:w-3/6 p-5 pt-12" alt="" />
                        <img src={cradle_3} className="lg:w-1/5 sm:w-3/6 max-sm:w-3/6 p-5 pt-12" alt="" />
                        <img src={cradle_4} className="lg:w-1/5 sm:w-3/6 max-sm:w-3/6 p-5 pt-12" alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-32'>
                <div className='flex justify-center'>
                    <div className='bg-yellow-200 px-16 py-10 text-black font-bold'>
                        <p className='text-4xl'>What is Cradle?</p>
                    </div>
                </div>

                <div className='flex justify-start'>
                    <div className='bg-red-400 mt-12 w-3/5 p-20 text-white font-bold ml-32'>
                        <p className='text-2xl'>
                            How might we enrich parent-baby relationships, through improved baby sleeping habits and parents’
                            mental well-being with the use of digitization and automation within the baby crib market?
                        </p>
                        <p className='text-2xl pt-5 pr-44'>
                            This led us to Cradle, a smart baby crib focused on automation through a technological ecosystem
                        </p>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <img src={cradle_5} className="translate-y-[-10rem] w-3/6 mx-12" alt="" />
                </div>
            </div>

            <div className='flex justify-center items-center flex-col'>
                <p className='bg-yellow-200 py-10 px-20 text-4xl text-black font-bold'>User-Journey Map</p>
                <img className='bg-red-400 p-12' src={cradle_6} alt="" />
            </div>

            <div>
                <div>
                    <p>
                        In the early stages she was frustrated with how her parenting experiences had gone so far but she is determined to do whatever
                        she can in her power to create a premiere sleep schedule and routine for her and her son.
                    </p>
                </div>
                <div>
                    <p>
                        During the setup of Cradle, Beth had the concern of how easy it would be to utilize all the features of Cradle as well how easy it would be to use their mobile application.
                    </p>
                    <p>
                        She is now over a week in and she is now very relieved to see how easy it was to customize her crib from her smartphone via the mobile application
                    </p>
                </div>
            </div>

            <div>
                <p>Watch our full presentation on Cradle here:</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8Z6Eu1Ql1Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    )
}
