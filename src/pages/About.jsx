import React from 'react'
import Image_1 from '../img/headshot.jpeg'

export default function About() {
    return (
        <div>
            <div className='container bg-red-400 m-auto lg:my-24 sm:my-12 max-sm:my-12'>
                <div className='text-black flex justify-center items-center font-bold flex-col py-20 lg:px-32 max-sm:px-10'>
                    <h2 className='lg:text-6xl sm:text-3xl max-sm:text-3xl pb-8 text-white'>@
                        <span className='text-green-700'>justinkanji</span>
                    </h2>
                    <ul>
                        <li className='list-disc lg:text-4xl sm:text-xl max-sm:text-xl'>
                            Justin is an expected <span className='text-white'>graduate</span> from the <span className='text-white'>University of Waterloo</span> Stratford School of Interaction Design & Business
                        </li>
                        <li className='list-disc lg:text-4xl sm:text-xl max-sm:text-xl'>
                            He has graduated with a degree in Honors <span className='text-white'>Bachelor of Global Business & Digital Arts (GBDA)</span>
                        </li>
                        <li className='list-disc lg:text-4xl sm:text-xl max-sm:text-xl'>
                            In 2018, Canadian Design Firm Rossul had named the Stratford School of Interactive Design & Business “<span className='text-white'>Best Canadian Undergraduate UX Design University</span>”
                        </li>
                    </ul>
                </div>
            </div>

            <div className='container bg-blue-300 m-auto mt-24 py-20 lg:px-16 sm:px-6 max-sm:px-6'>
                <div className='flex sm:flex-col max-sm:flex-col justify-around items-center'>
                    <div>
                        <img className='rounded-full lg:w-80 sm:w-56 max-sm:w-56' src={Image_1} alt="Headshot" />
                    </div>
                    <div className='text-center max-sm:py-6 font-bold'>
                        <h2 className='lg:text-5xl sm:text-4xl max-sm:text-4xl lg:pb-0 sm:pb-2 max-sm:pb-2 text-black'><span className='text-white'>Justin</span> is expecting to graduate in <span className='text-white'>May of 2023</span></h2>
                        <p className='text-black text-4xl mb-12'>
                            He is looking to obtain a job in the <span className='text-white'>design field...</span>
                        </p>

                        <p className='text-black text-3xl mb-2'>
                            <span className='text-white'>ANYWHERE</span> the world may take him
                        </p>
                        <p className='text-black text-3xl'>
                            the world is his playground and he would <span className='text-white'>love</span> to explore
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:w-3/5 sm:w-4/5 max-sm:w-4/5 bg-teal-200 m-auto py-28 lg:px-16 sm:px-6 max-sm:px-6 translate-y-[-2rem] flex justify-center items-center'>
                <p className='text-black lg:text-4xl sm:text-2xl max-sm:text-2xl text-center font-bold'>For all employment inquiries regarding Justin please view his <span className='text-white'>cover letter</span> and <span className='text-white'>resume</span> along with a <span className='text-white'>letter of recommendation</span> from one of his design professors. </p>
            </div>

            <div className='lg:p-12 sm:p-0 max-sm:p-0'>
                <div className='flex justify-end lg:mr-96 sm:mr-0 max-sm:mr-0'>
                    <div className='bg-yellow-700 p-12 lg:w-3/6 sm:w-full max-sm:w-full text-center translate-y-[2rem]'>
                        <h2 className='font-bold text-black text-5xl'>HOBBIES & INTERESTS</h2>
                    </div>
                </div>
                <div className='bg-yellow-100 lg:p-24 sm:p-14 max-sm:p-14 lg:w-3/5 sm:w-full max-sm:w-full'>
                    <ul className='text-black font-bold'>
                        <li className='list-disc text-2xl mb-5'>Justin is a student, fashion enthusiast, business mogul, entrepreneur, a aspiring designer and <span className='text-white'>so much more...</span></li>
                        <li className='list-disc text-2xl'>Since a young age, Justin’s interests laid within the fields of: <span className='text-white text-3xl'>fashion</span>, <span className='text-white text-3xl'>design</span>, <span className='text-white text-3xl'>clothing</span> and <span className='text-white text-3xl'>the arts</span></li>
                        <li className='list-disc text-2xl'>He has a very strong passion for clothing and fashion design</li>
                        <li className='list-disc text-2xl'>His dream job would be to hold a job combining UI/UX design with some sort of fashion or apparel company </li>
                    </ul>
                </div>
                <div className='flex justify-end translate-y-[-2rem]'>
                    <ul className='bg-yellow-200 lg:p-20 sm:p-14 max-sm:p-14 w-3/5 sm:w-full max-sm:w-full text-black font-bold'>
                        <li className='list-disc text-2xl mb-5'>Within the last three years Justin has developed an interest in the areas of <span className='text-white text-3xl'>Web3.0</span> and <span className='text-white text-3xl'>Cryptocurrency</span></li>
                        <li className='list-disc text-2xl mb-5'>Justin has 10,000+ hours studied in this specific field</li>
                        <li className='list-disc text-2xl mb-5'>Justin studies behind the lines as to why certain things were designed the way they were</li>
                        <li className='list-disc text-2xl mb-5'>In Justin’s last two years of school, <span className='text-white text-3xl'>UI/UX design</span> has been a focal point of his study </li>
                        <li className='list-disc text-2xl'><span className='text-white text-3xl'>Interaction design</span> is an up and coming, in demand skill that is becoming more and more main stream </li>
                    </ul>
                </div>
            </div>

        </div >
    )
}
