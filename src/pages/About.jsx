import React from 'react'
import Image_1 from '../img/headshot.jpeg'

export default function About() {
    return (
        <div>
            <div className='container bg-red-400 m-auto my-24'>
                <div className='text-black flex justify-center items-center flex-col py-20 px-32'>
                    <h2 className='text-6xl pb-8 text-white'>@
                        <span className='text-green-700'>justinkanji</span>
                    </h2>
                    <ul>
                        <li className='list-disc text-3xl'>
                            Justin is an expected <span className='text-white'>graduate</span> from the <span className='text-white'>University of Waterloo</span> Stratford School of Interaction Design & Business
                        </li>
                        <li className='list-disc text-3xl'>
                            He has graduated with a degree in Honors <span className='text-white'>Bachelor of Global Business & Digital Arts (GBDA)</span>
                        </li>
                        <li className='list-disc text-3xl'>
                            In 2018, Canadian Design Firm Rossul had named the Stratford School of Interactive Design & Business “<span className='text-white'>Best Canadian Undergraduate UX Design University</span>”
                        </li>
                    </ul>
                </div>
            </div>

            <div className='container bg-red-400 m-auto my-24'>
                <div className='flex justify-between'>
                    <div>
                        <img className='rounded-full p-6 w-72' src={Image_1} alt="Headshot" />
                    </div>
                    <div>
                        <h2>Justin is expecting to graduate in May of 2023</h2>
                        <p>
                            He is looking to obtain a job in the design field...
                        </p>
                        <p>
                            ANYWHERE the world may take him
                        </p>
                        <p>
                            the world is his playground and he would love to explore
                        </p>
                    </div>
                </div>
            </div>

        </div >
    )
}
