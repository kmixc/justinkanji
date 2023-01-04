import React from 'react'

//images
import fntsy_1 from "../../img/FNTSY/fntsy_mockup_1.png"
import fntsy_2 from "../../img/FNTSY/fntsy_mockup_2.png"
import fntsy_3 from "../../img/FNTSY/fntsy_mockup_3.png"
import fntsy_4 from "../../img/FNTSY/fntsy_mockup_4.png"
import fntsy_5 from "../../img/FNTSY/fntsy_mockup_5.png"
import fntsy_6 from "../../img/FNTSY/fntsy_mockup_6.png"
import fntsy_7 from "../../img/FNTSY/fntsy_mockup_7.png"
import fntsy_8 from "../../img/FNTSY/fntsy_mockup_8.png"
import fntsy_9 from "../../img/FNTSY/fntsy_mockup_9.png"
import fntsy_10 from "../../img/FNTSY/fntsy_mockup_10.png"
import fntsy_11 from "../../img/FNTSY/fntsy_mockup_11.png"

export default function FNTSY() {
    return (
        <div>
            <div className='mt-24'>
                <div className='bg-red-400 text-black font-bold lg:w-1/6 sm:w-full lg:h-96 sm:h-56 flex flex-col justify-center items-center lg:absolute p-12 lg:right-96 lg:mr-56 lg:mt-40 sm:mt-24'>
                    <h2 className='text-5xl text-center'>FNTSY.</h2>
                    <h3 className='text-2xl text-center'>A Fantasy Social App</h3>
                    <p className='text-md text-center'>Modern day fantasy app focused on the social aspect of fantasy sports</p>
                </div>
                <div className='flex justify-start'>
                    <div className='bg-emerald-300 text-black font-bold flex flex-col justify-center items-center lg:w-3/6 sm:w-full lg:ml-24 p-12'>
                        <div className='flex justify-center'>
                            <img src={fntsy_3} className="lg:w-2/6 sm:w-3/6 max-sm:w-3/6 p-5" alt="" />
                            <img src={fntsy_5} className="lg:w-2/6 sm:w-3/6 max-sm:w-3/6 p-5 pt-12" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-24'>
                <div className='flex justify-center'>
                    <p className='bg-yellow-200 lg:w-2/6 sm:w-3/6 max-sm:w-full p-12 text-center text-black font-bold text-4xl'>FNTSY.</p>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <div className='bg-red-400 lg:w-5/6 sm:w-full max-sm:w-full text-center text-black font-bold lg:p-24 sm:16 max-sm:p-10'>
                        <p className='text-4xl pb-4'>A Fantasy Social App</p>
                        <p className='text-2xl mb-12'>Modern day fantasy app focused on the social aspect of fantasy sports</p>
                        <div className='flex justify-between items-center lg:flex-row sm:flex-col max-sm:flex-col lg:p-4'>
                            <img className='lg:w-1/5 sm:w-3/6 max-sm:w-4/6 max-sm:p-6' src={fntsy_2} alt="" />
                            <img className='lg:w-1/5 sm:w-3/6 max-sm:w-4/6 max-sm:p-6' src={fntsy_4} alt="" />
                            <img className='lg:w-1/5 sm:w-3/6 max-sm:w-4/6 max-sm:p-6' src={fntsy_10} alt="" />
                        </div>
                        <div className='flex justify-between items-center lg:flex-row sm:flex-col max-sm:flex-col lg:p-4'>
                            <img className='lg:w-1/5 sm:w-3/6 max-sm:w-4/6 max-sm:p-6' src={fntsy_6} alt="" />
                            <img className='lg:w-1/5 sm:w-3/6 max-sm:w-4/6 max-sm:p-6' src={fntsy_7} alt="" />
                            <img className='lg:w-1/5 sm:w-3/6 max-sm:w-4/6 max-sm:p-6' src={fntsy_11} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 flex justify-center'>
                <div className='container flex justify-center items-center h-72 bg-yellow-200 text-black font-bold'>
                    <p className='text-3xl'>WRITE ABOUT FNTSTY HERE</p>
                </div>
            </div>

            <div className='flex justify-center text-black font-bold lg:flex-row sm:flex-col max-sm:flex-col'>
                <div className='flex justify-center items-center bg-emerald-300 lg:w-1/3 sm:w-2/3 max-sm:w-full h-96 m-4 text-center'>
                    <p>DOWNLOAD OUR DIGITAL MEDIA CAMPAIGN APP</p>
                </div>
                <div className='flex justify-center items-center bg-emerald-300 lg:w-1/3 sm:w-2/3 max-sm:w-full h-96 m-4 text-center'>
                    <p>DOWNLOAD OUR DIGITAL MEDIA CAMPAIGN APP</p>
                </div>
            </div>


        </div>
    )
}
