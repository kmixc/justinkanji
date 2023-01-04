import React from 'react'

//images
import chariot_1 from "../../img/Chariot/chariot_screen_one.png"
import chariot_2 from "../../img/Chariot/chariot_screen_two.png"
import chariot_3 from "../../img/Chariot/chariot_screen_three.png"
import chariot_4 from "../../img/Chariot/chariot_screen_four.png"
import chariot_5 from "../../img/Chariot/chariot_screen_five.png"
import chariot_6 from "../../img/Chariot/chariot_screen_six.png"
import chariot_7 from "../../img/Chariot/chariot_screen_seven.png"
import chariot_8 from "../../img/Chariot/chariot_screen_eight.png"

export default function Chariot() {
    return (
        <div>
            <div className='mt-24'>
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
                    </div>
                </div>
            </div>

            <div className='mt-24'>
                <div className='flex justify-center'>
                    <p className='bg-blue-200 lg:w-2/6 sm:w-3/6 max-sm:w-full p-12 text-center text-black font-bold text-4xl translate-y-[2rem]'>Chariot.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-red-400 container text-center text-black font-bold lg:text-3xl sm:text-2xl max-sm:text-xl lg:px-20 sm:px-12 max-sm:px-6 py-16 lg:pb-32 sm:pb-20 max-sm:pb-24'>
                        <p>
                            Chariot is an all-in-one app for those looking to get a premium ridesharing experience. This app is targeted to those individuals who enjoy a
                            comfortable, and luxurious chauffeur experience whilst getting from point A to point B quickly and efficiently using the traffic/accident detection
                            feature and route optimization. Users can choose from a variety of luxurious vehicles, ranging from luxury SUVs to supercars. The app uses live
                            navigation and its own built-in map which displays an active route for the driver to follow rather than displaying addresses. This ensures that
                            the passenger’s sensitive information is kept confidential. Overall, Chariot’s goal is to deliver a comfortable, no questions asked experience
                            that users can feel comfortable using when they need to dress up.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center translate-y-[-4rem]'>
                    <div className='bg-blue-200 lg:w-4/6 sm:w-full max-sm:w-full'>
                        <div className='flex justify-around'>
                            <img className='p-8 lg:w-2/6 sm:w-2/6 max-sm:w-3/6' src={chariot_1} alt="" />
                            <img className='p-8 lg:w-2/6 sm:w-2/6 max-sm:w-3/6' src={chariot_2} alt="" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='bg-red-400 px-20 py-6 text-black font-bold text-3xl'>Key Experiences:</p>
                        </div>
                        <p className='text-center text-black font-bold text-3xl pt-12'>Onboarding.</p>
                        <div className='flex justify-around'>
                            <img className='p-8 lg:w-2/6 sm:w-2/6 max-sm:w-3/6' src={chariot_3} alt="" />
                            <img className='p-8 lg:w-2/6 sm:w-2/6 max-sm:w-3/6' src={chariot_4} alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center flex-col items-center translate-y-[-4rem]'>
                    <div className='container flex bg-red-400 lg:flex-row sm:flex-col max-sm:flex-col text-black font-bold lg:p-32 sm:p-16 max-sm:p-12'>
                        <p className='text-3xl text-center p-5'>Here the user begins the onboarding process, inputting their phone number.</p>
                        <p className='text-3xl text-center p-5'>
                            The user is then asked for other basic information including name and contact
                            information before adding a payment method to complete the onboarding process
                        </p>
                    </div>
                    <div className='flex justify-center items-center lg:flex-row sm:flex-col max-sm:flex-col bg-blue-200 p-12 lg:w-4/6 sm:w-full max-sm:w-full translate-y-[-3rem]'>
                        <img className='p-12 lg:w-2/4 sm:w-2/4 max-sm:w-4/4' src={chariot_8} alt="" />
                        <div className='text-black font-bold text-center'>
                            <p className='lg:text-4xl max-sm:text-2xl lg:mb-20 sm:mb-10 max-sm:mb-8'>Interactive Privacy Policy.</p>
                            <p className='lg:text-2xl max-sm:text-xl'>
                                An interactive privacy policy will ensure users have a positive user experience from the jump, and feel comfortable
                                about knowing Chariot cares about the users data and the users' comprehension of how Chariot uses that data
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center'>
                    <p className='bg-red-400 lg:w-2/6 sm:w-3/6 max-sm:w-full p-12 text-center text-black font-bold text-4xl'>Ride Experience.</p>
                </div>
                <div className='flex justify-center'>
                    <div className='bg-blue-200 container text-black font-bold'>
                        <div className='flex items-center justify-center'>
                            <img className='p-12 lg:w-1/4 sm:w-2/4 max-sm:w-2/4' src={chariot_4} alt="" />
                            <p className='lg:text-3xl sm:text-2xl max-sm:text-xl w-2/6 text-center'>The first step of the ride is inputting the final destination </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='lg:text-3xl sm:text-2xl max-sm:text-xl w-2/6 text-center'>The user can then select which vehicle they wish to have for their trip, depending on the occasion or number of passengers with them</p>
                            <img className='p-12 lg:w-1/4 sm:w-2/4 max-sm:w-2/4' src={chariot_5} alt="" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='p-12 lg:w-1/4 sm:w-2/4 max-sm:w-2/4' src={chariot_6} alt="" />
                            <p className='lg:text-3xl sm:text-2xl max-sm:text-xl w-2/6 text-center'>
                                Along the journey, the passenger can view and make changes to the route based on
                                Chariot’s built-in traffic/accident detection and route optimization system
                            </p>
                        </div>
                        <div className='flex items-center justify-center pb-12'>
                            <p className='lg:text-3xl sm:text-2xl max-sm:text-xl w-2/6 text-center'>
                                After drop-off the passenger can leave an optional tip for any drivers that did more than
                                required, and rate their experience during trip. After this, the user’s journey concludes
                            </p>
                            <img className='p-12 lg:w-1/4 sm:w-2/4 max-sm:w-2/4' src={chariot_7} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 flex justify-center'>
                <div className='container bg-blue-200 flex justify-center flex-col items-center h-80 text-black font-bold'>
                    <p className='lg:text-3xl sm:text-2xl max-sm:text-2xl text-center'>Download our design rationale</p>
                    <a className='bg-red-400 px-20 py-6 mt-10 text-2xl' href="#">HERE</a>
                </div>
            </div>

        </div>
    )
}
