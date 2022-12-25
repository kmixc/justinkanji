import React from 'react'

export default function Resume() {
    return (
        <div>
            <div className='lg:p-12 sm:pt-12 max-sm:pt-12'>
                <div className='flex justify-center'>
                    <div className='bg-yellow-700 p-12 lg:w-3/6 md:w-4/6 sm:w-full text-center'>
                        <h2 className='font-bold text-black text-5xl'>COVER LETTER & RESUME</h2>
                    </div>
                </div>

                <div className='flex max-sm:flex-col justify-center items-center'>
                    <div className='bg-yellow-100 p-16 lg:w-2/6 sm:w-full max-sm:w-full text-black font-bold lg:m-20 sm:m-10 max-sm:m-10 text-center text-3xl'>
                        <p>View Justin's</p>
                        <p className='text-white drop-shadow'>Cover Letter</p>
                        <a href="#" className='underline hover:text-white transition'>HERE</a>
                    </div>
                    <div className='bg-yellow-100 p-16 lg:w-2/6 sm:w-full max-sm:w-full text-black font-bold lg:m-20 sm:m-10 max-sm:mb-10 text-center text-3xl'>
                        <p>View Justin's</p>
                        <p className='text-white drop-shadow'>Resume</p>
                        <a href="#" className='underline hover:text-white transition'>HERE</a>
                    </div>
                </div>

                <div className='bg-yellow-100 p-16 lg:w-2/6 sm:w-full max-sm:w-full text-black font-bold m-auto text-center text-3xl'>
                    <p>View Justin's</p>
                    <p className='text-white drop-shadow'>Letter of Recommendation</p>
                    <a href="#" className='underline hover:text-white transition'>HERE</a>
                </div>

            </div>
        </div>
    )
}
