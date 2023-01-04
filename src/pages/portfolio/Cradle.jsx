import React from 'react'

//images
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
                    <div className='flex justify-center items-center lg:flex-row sm:flex-col max-sm:flex-col'>
                        <img src={cradle_1} className="lg:w-1/5 sm:w-3/6 max-sm:w-4/6 p-5" alt="" />
                        <img src={cradle_2} className="lg:w-1/5 sm:w-3/6 max-sm:w-4/6 p-5 pt-12" alt="" />
                        <img src={cradle_3} className="lg:w-1/5 sm:w-3/6 max-sm:w-4/6 p-5 pt-12" alt="" />
                        <img src={cradle_4} className="lg:w-1/5 sm:w-3/6 max-sm:w-4/6 p-5 pt-12" alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-32'>
                <div className='flex justify-center'>
                    <div className='bg-yellow-200 lg:w-2/6 sm:w-full max-sm:w-full py-12 text-center text-black font-bold'>
                        <p className='text-4xl'>What is Cradle?</p>
                    </div>
                </div>

                <div className='flex justify-start'>
                    <div className='bg-red-400 mt-12 lg:w-3/5 sm:w-full max-sm:w-full p-20 text-white font-bold lg:ml-32'>
                        <p className='text-2xl'>
                            How might we enrich parent-baby relationships, through improved baby sleeping habits and parents’
                            mental well-being with the use of digitization and automation within the baby crib market?
                        </p>
                        <p className='text-2xl pt-5 lg:pr-60'>
                            This led us to Cradle, a smart baby crib focused on automation through a technological ecosystem
                        </p>
                    </div>
                </div>

                <div className='flex lg:justify-end sm:justify-center max-sm:justify-center sm:items-center max-sm:items-center'>
                    <img src={cradle_5} className="lg:translate-y-[-10rem] lg:w-3/6 sm:w-full max-sm:w-full mx-12" alt="" />
                </div>
            </div>

            <div className='flex justify-center items-center flex-col'>
                <p className='bg-yellow-200 lg:w-2/6 sm:w-full max-sm:w-full py-12 text-4xl text-black font-bold text-center'>User-Journey Map</p>
                <img className='bg-red-400 lg:p-12 sm:p-2 max-sm:p-2 lg:w-5/6 sm:w-full max-sm:w-full' src={cradle_6} alt="" />
            </div>

            <div className='mt-20'>
                <div className='flex justify-center items-center flex-col text-black font-bold'>
                    <p className='lg:w-4/6 sm:w-full max-sm:w-full bg-yellow-500 lg:p-20 sm:p-12 max-sm:p-8 pb-40 lg:text-3xl sm:text-2xl max-sm:text-2xl text-center'>
                        In the early stages she was frustrated with how her parenting experiences had gone so far but she is determined to do whatever
                        she can in her power to create a premiere sleep schedule and routine for her and her son.
                    </p>
                </div>
                <div className='flex justify-center flex-col items-center lg:translate-y-[-6rem]'>
                    <div className='lg:w-3/6 sm:w-full max-sm:w-full bg-red-400 py-10 px-16 font-bold text-black text-center'>
                        <p className='pb-10 lg:text-3xl sm:text-2xl max-sm:text-2xl'>
                            During the setup of Cradle, Beth had the concern of how easy it would be to utilize all the features of Cradle as well how easy it would be to use their mobile application.
                        </p>
                        <p className='lg:text-3xl sm:text-2xl max-sm:text-2xl'>
                            She is now over a week in and she is now very relieved to see how easy it was to customize her crib from her smartphone via the mobile application
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='bg-yellow-500 font-bold text-black text-3xl px-28 py-12 text-center'>
                    <p>Watch our full presentation on</p>
                    <p>Cradle here:</p>
                </div>
                <iframe width="80%" height="800px" src="https://www.youtube.com/embed/8Z6Eu1Ql1Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    )
}
