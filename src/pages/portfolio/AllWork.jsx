import React from 'react'

import CreatePrivacy from "../../img/exercise2_userpersona.png"

import flexinc_1 from "../../img/flexinc/flexinc_1.png"
import flexinc_2 from "../../img/flexinc/flexinc_2.png"
import flexinc_3 from "../../img/flexinc/flexinc_3.png"

import EduNest_1 from "../../img/EduNest/edunest_anywhere_anytime.png"
import EduNest_2 from "../../img/EduNest/EduNest_DM.png"
import EduNest_3 from "../../img/EduNest/EduNest_OurSolution.png"

export default function AllWork() {
    return (
        <div>
            <div className='mt-32'>
                <div className='flex justify-center'>
                    <div className='bg-yellow-200 lg:w-2/6 sm:w-full max-sm:w-full py-12 text-center text-black font-bold'>
                        <p className='text-4xl'>all of justin’s work:</p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='bg-green-700 w-full py-12 text-center text-black font-bold'>
                        <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>all of justin’s work will be displayed below from most recent to oldest.</p>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <div className='flex justify-center lg:translate-y-[1rem] lg:mt-0 sm:mt-10 max-sm:mt-10'>
                    <div className='bg-green-700 lg:w-3/6 sm:w-full max-sm:w-full py-6 text-center text-black font-bold'>
                        <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>Design Project: VR Aided Architecture & Interior Design </p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-zinc-500 text-black font-bold flex flex-col justify-center items-center lg:w-5/6 sm:w-full lg:p-24 sm:p-16 max-sm:p-8 lg:pt-12 max-sm:pt-16'>
                        <p className='text-center text-white text-2xl'>
                            Students were tasked with designing a new, unique VR application (hereby referred to as “system”).
                            The designed application should make uniquecontribution to existing research and/or state-of-the-art.
                        </p>
                        <p className='text-center text-white text-2xl pt-4'>
                            Students were tasked with writing a report where they describe the system and contrast it to existing
                            work, describe design decisions informed by existing research, and describe how the system is used.
                        </p>
                        <p className='text-center py-6 text-black text-2xl'>
                            VR Aided Architecture and Interior Design has many design/planning applications in the real world.
                            The generalidea behind this concept is to allow architects and their customers to accurately visualize a sense of the buildings scale,
                            mood, and space before anything is actually constructed...
                        </p>
                        <p className='text-white text-3xl'>OPEN FULL PDF REPORT</p>
                        <a className='text-center px-6 py-4 mt-6 text-white bg-green-700 hover:text-black hover:bg-white transition text-2xl' href="#">HERE</a>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center lg:translate-y-[1rem] lg:mt-0 sm:mt-10 max-sm:mt-10'>
                    <div className='bg-orange-400 lg:w-3/6 sm:w-full max-sm:w-full py-6 text-center text-black font-bold'>
                        <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>Reimagined Privacy Notice</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-blue-400 text-black font-bold flex flex-col justify-center items-center lg:w-5/6 sm:w-full lg:p-20 sm:p-16 max-sm:p-8 lg:pt-12 max-sm:pt-16'>
                        <p className='text-center py-2 text-2xl'>Students were challenged to reflect on the challenges of privacy notice and consent by prototyping a reimagined privacy device.</p>
                        <p className='text-center py-2 text-2xl'>Using a text-based privacy policy template provided, students had to create a usable and useful interface for displaying the privacy policy content. </p>
                        <p className='text-center pt-2 pb-8 text-2xl'>VIEW OUR REIMAGINED PRIVACY NOTICE BELOW</p>
                        <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F87C549P9gKIB70V1cTGHzK%2FGBDA414---Privacy-Notice-Redesign%3Fpage-id%3D0%253A1%26node-id%3D2%253A3%26viewport%3D439%252C625%252C0.36%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A3" allowfullscreen></iframe>
                        <p className='text-center py-8 text-2xl'>OPEN DESIGN RATIONALE PDF</p>
                        <a className='text-center px-10 py-4 bg-orange-400 hover:text-black hover:bg-white transition text-2xl' href="#">HERE</a>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center lg:translate-y-[1rem] lg:mt-0 sm:mt-10 max-sm:mt-10'>
                    <div className='bg-orange-200 lg:w-3/6 sm:w-full max-sm:w-full py-6 text-center text-black font-bold'>
                        <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>Mapping Security & Privacy Experiences for IoT Devices</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-zinc-400 text-black font-bold flex flex-col justify-center items-center lg:w-5/6 sm:w-full lg:p-20 sm:p-16 max-sm:p-8 lg:pt-12 max-sm:pt-16'>
                        <p className='text-center text-white text-2xl'>
                            Students had to make a persona made up attributes, encompassing various behaviours,
                            attitudes and needs of your persona (in this case; security & privacy for IoT devices).
                        </p>
                        <img src={CreatePrivacy} alt="" />
                        <p className='text-center text-white text-2xl'>Students then had to create a user journey map, portraying a “day/week/month in the life of” story-style user journey map using the persona above.</p>
                        <p className='text-center text-white py-8 text-2xl'>OPEN SUMMARY & REFLECTION</p>
                        <a className='text-center px-10 py-4 bg-orange-200 hover:text-black hover:bg-white transition text-2xl' href="#">HERE</a>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center lg:translate-y-[1rem] lg:mt-0 sm:mt-10 max-sm:mt-10'>
                    <div className='bg-indigo-500 lg:w-1/6 sm:w-full max-sm:w-full py-6 text-center text-black font-bold'>
                        <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>flex inc.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-blue-200 text-black font-bold flex flex-col justify-center items-center lg:w-5/6 sm:w-full lg:p-20 sm:p-16 max-sm:p-2 lg:pt-12 max-sm:pt-16'>
                        <p className='text-center py-2 text-2xl'>
                            This is a mobile application that was made in Justin’s 3A term of his undergraduate study.
                            The task was to create a mobile application that solves the 2020 RSA Design Brief #3: Hybrid Home/Work.
                        </p>
                        <p className='text-center py-2 text-2xl'>In comes <span className='text-indigo-500'>flex Inc.</span></p>
                        <p className='text-center py-2 text-2xl'>
                            This is the app that Justin took part of throughout the design creation and prototyping process.
                            Flex is a mobile auto-scheduling application with the help oif an in app assistant.
                        </p>
                        <p className='text-center text-indigo-500 py-2 text-2xl'>VIEW PROPOSAL BOARDS AND INTERACTIVE FUCNTIONING PROTOTYPE BELOW:</p>
                        <img className='p-4 w-full' src={flexinc_1} alt="" />
                        <img className='p-4 w-full' src={flexinc_2} alt="" />
                        <img className='p-4 w-full' src={flexinc_3} alt="" />
                        <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3kJ6OEj5vcRtn8sUV9xT1F%2F310-Prototype%3Fpage-id%3D141%253A69%26node-id%3D141%253A69%26viewport%3D522%252C366%252C0.08%26scaling%3Dscale-down%26starting-point-node-id%3D448%253A46%26show-proto-sidebar%3D1" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center lg:translate-y-[1rem] lg:mt-0 sm:mt-10 max-sm:mt-10'>
                    <div className='bg-orange-400 lg:w-3/6 sm:w-full max-sm:w-full py-6 text-center text-black font-bold'>
                        <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>EduNest.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-orange-300 text-black font-bold flex flex-col justify-center items-center lg:w-5/6 sm:w-full lg:p-20 sm:p-16 max-sm:p-8 lg:pt-8 max-sm:pt-16'>
                        <p className='text-center py-2 text-2xl'>
                            For you as a user and myself a UX designer it is vital to understand the creation process of these mobile applications.
                            I have created and compiled our UX process for one of the projects I have taken part of named; EduNest.
                        </p>
                        <div className='flex justify-center'>
                            <div className='bg-orange-400 w-full px-8 py-6 text-center text-black font-bold'>
                                <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>OUR SOLUTION</p>
                            </div>
                        </div>
                        <p className='text-center py-2 text-2xl'>
                            Below is our proposed solution. Our task for this mobile application was to redesign UW
                            Learn which is the University of Waterloo’s platform used for online learning.
                        </p>
                        <img className='p-8 w-full' src={EduNest_3} alt="" />
                        <div className='flex justify-center'>
                            <div className='bg-orange-400 w-full px-8 py-6 text-center text-black font-bold'>
                                <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>USABILITY</p>
                            </div>
                        </div>
                        <p className='text-center py-2 text-2xl'>
                            Below is a brief explanation of the usability and convenience that our application provides for University of Waterloo students
                        </p>
                        <img className='p-8 w-full' src={EduNest_1} alt="" />
                        <div className='flex justify-center'>
                            <div className='bg-orange-400 w-full px-8 py-6 text-center text-black font-bold'>
                                <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>DIRECT MESSAGING FEATURE</p>
                            </div>
                        </div>
                        <p className='text-center py-2 text-2xl'>
                            One of our main solutions to improve online communication was to implement a direct messaging feature for students
                            and for professors. Thus allowing both parties to stay ion touch providing an easier tool for communication
                        </p>
                        <img className='p-8 w-full' src={EduNest_2} alt="" />

                        <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEQ1YPaCfNobvqGh4K5DSrx%2FEduNest%3Fpage-id%3D0%253A1%26node-id%3D2%253A2%26viewport%3D750%252C-8%252C0.17%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A2" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center lg:translate-y-[1rem] lg:mt-0 sm:mt-10 max-sm:mt-10'>
                    <div className='bg-orange-200 lg:w-3/6 sm:w-full max-sm:w-full py-6 text-center text-black font-bold'>
                        <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>TipKit.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-indigo-300 text-black font-bold flex flex-col justify-center items-center lg:w-5/6 sm:w-full max-sm:w-full lg:p-20 sm:p-16 max-sm:p-8 lg:pt-4 max-sm:pt-16'>
                        <div>
                            <div className='flex justify-center'>
                                <div className='bg-orange-200 my-4 w-full px-8 py-6 text-center text-black font-bold'>
                                    <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>TipKit Wireframes</p>
                                </div>
                            </div>
                            <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0VUirXC1SxVKeGl7XcEwNr%2F302-PROTOTYPE%3Fnode-id%3D0%253A1%26t%3DIkqiqlk4U4ceBIic-1" allowfullscreen></iframe>
                        </div>
                        <div>
                            <div className='flex justify-center'>
                                <div className='bg-orange-200 my-4 w-full px-8 py-6 text-center text-black font-bold'>
                                    <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>TipKit Prototype</p>
                                </div>
                            </div>
                            <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0VUirXC1SxVKeGl7XcEwNr%2F302-PROTOTYPE%3Fnode-id%3D0%253A1%26t%3DIkqiqlk4U4ceBIic-1" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center lg:translate-y-[1rem] lg:mt-0 sm:mt-10 max-sm:mt-10'>
                        <div className='bg-red-500 lg:w-2/6 sm:w-full max-sm:w-full py-6 text-center text-black font-bold'>
                            <p className='lg:text-4xl sm:text-3xl max-sm:text-3xl'>Truckla Case Study.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-zinc-400 text-black font-bold flex flex-col justify-center items-center lg:w-5/6 sm:w-full max-sm:w-full lg:p-20 sm:p-16 max-sm:p-8 lg:pt-16 max-sm:pt-16'>
                            <iframe width="100%" height="655" src="https://www.youtube.com/embed/jKv_N0IDS2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p className='text-center py-2 text-2xl'>OPEN CASE STUDY</p>
                            <a className='text-center px-10 py-4 bg-red-500 hover:text-black hover:bg-white transition text-2xl' href="https://drive.google.com/file/d/1AWxgyxL_UwGOcw_4QqmruTlE7R14N7u4/view?usp=share_link" target="work">HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
