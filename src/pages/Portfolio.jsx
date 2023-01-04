import React from 'react'
import { BsArrowRight } from "react-icons/bs"

//CRADLE
import cradle_1 from "../img/cradle/cradle_screen_1.png"
import cradle_2 from "../img/cradle/cradle_screen_2.png"

//FNTSY
import fntsy_1 from "../img/FNTSY/fntsy_mockup_3.png"
import fntsy_2 from "../img/FNTSY/fntsy_mockup_5.png"

//CHARIOT
import chariot_1 from "../img/Chariot/chariot_screen_one.png"
import chariot_4 from "../img/Chariot/chariot_screen_four.png"
import chariot_5 from "../img/Chariot/chariot_screen_five.png"


export default function Portfolio() {
    return (
        <div>
            <div className='mt-24'>
                <div className='bg-red-400 text-black font-bold lg:w-1/6 sm:w-full lg:h-96 sm:h-56 flex flex-col justify-center items-center lg:absolute p-12 lg:ml-72 lg:mt-40 sm:mt-24'>
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
                        <a href="/cradle" className='flex items-center arrow-hover text-xl'>
                            View Here
                            <BsArrowRight className='pl-2' size={"3em"} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='mt-24'>
                <div className='bg-red-400 text-black font-bold lg:w-1/6 sm:w-full lg:h-96 sm:h-56 flex flex-col justify-center items-center lg:absolute p-12 lg:right-96 lg:mr-56 lg:mt-56 sm:mt-24'>
                    <h2 className='text-5xl text-center'>FNTSY.</h2>
                    <h3 className='text-2xl text-center'>A Fantasy Social App</h3>
                    <p className='text-md text-center'>Modern day fantasy app focused on the social aspect of fantasy sports</p>
                </div>
                <div className='flex justify-start'>
                    <div className='bg-emerald-300 text-black font-bold flex flex-col justify-center items-center lg:w-3/6 sm:w-full lg:ml-24 p-12'>
                        <div className='flex justify-center'>
                            <img src={fntsy_1} className="lg:w-2/6 sm:w-3/6 max-sm:w-3/6 p-5" alt="" />
                            <img src={fntsy_2} className="lg:w-2/6 sm:w-3/6 max-sm:w-3/6 p-5 pt-12" alt="" />
                        </div>
                        <a href="/fntsy" className='flex items-center arrow-hover text-xl'>
                            View Here
                            <BsArrowRight className='pl-2' size={"3em"} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='my-24'>
                <div className='bg-red-400 text-black font-bold lg:w-1/6 sm:w-full lg:h-96 sm:h-56 flex flex-col justify-center items-center lg:absolute p-12 lg:left-96 lg:ml-44 lg:mt-44 sm:mt-24'>
                    <h2 className='text-5xl text-center'>Chariot.</h2>
                    <p className='text-md text-center'>an all-in-one app for those looking to get a premium ridesharing experience</p>
                </div>
                <div className='flex justify-end'>
                    <div className='bg-blue-200 text-black font-bold flex flex-col justify-center items-center lg:w-3/6 sm:w-full lg:mr-24 p-12'>
                        <div className='flex justify-center'>
                            <img src={chariot_1} className="lg:w-2/6 sm:w-2/6 max-sm:w-2/6 p-5" alt="" />
                            <img src={chariot_4} className="lg:w-2/6 sm:w-2/6 max-sm:w-2/6 p-5 pt-12" alt="" />
                            <img src={chariot_5} className="lg:w-2/6 sm:w-2/6 max-sm:w-2/6 p-5 pt-12" alt="" />
                        </div>
                        <a href="/chariot" className='flex items-center arrow-hover text-xl'>
                            View Here
                            <BsArrowRight className='pl-2' size={"3em"} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-green-700 p-8 mx-12'>
                <div className='bg-yellow-200 p-8 flex flex-col justify-center items-center text-black font-bold'>
                    <a href="/all" className='flex justify-center items-center arrow-hover text-red-400'>
                        <p className='text-2xl'>view all work here.</p>
                        <BsArrowRight className='pl-2' size={"3em"} />
                    </a>
                    <p className='text-2xl'>thank you for viewing.</p>
                    <p className='text-2xl'>please contact for more inquiries.</p>
                </div>
            </div>

        </div>
    )
}
