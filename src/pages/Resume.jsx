import React from 'react'

export default function Resume() {
    return (
        <div>
            <div className='p-12'>
                <div className='flex justify-center'>
                    <div className='bg-yellow-700 p-12 w-3/6 text-center'>
                        <h2 className='font-bold text-black text-5xl'>COVER LETTER & RESUME</h2>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='bg-yellow-100 p-16 w-2/6 text-black font-bold m-20 text-center text-3xl'>
                        <p>Download Justin's</p>
                        <p>Cover Letter</p>
                        <a href="#">HERE</a>
                    </div>
                    <div className='bg-yellow-100 p-16 w-2/6 text-black font-bold m-20 text-center text-3xl'>
                        <p>Download Justin's</p>
                        <p>Resume</p>
                        <a href="#">HERE</a>
                    </div>
                </div>

                <div className='bg-yellow-100 p-24 w-3/5 text-black font-bold'>
                    <p>Download Justin's</p>
                    <p>Letter of Recommendation</p>
                    <a href="#">HERE</a>
                </div>

            </div>
        </div>
    )
}
