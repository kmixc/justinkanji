import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className='p-12'>
                <div className='flex justify-center'>
                    <div className='bg-yellow-700 p-12 w-3/6 text-center'>
                        <h2 className='font-bold text-black text-5xl'>COVER LETTER & RESUME</h2>
                    </div>
                </div>

                <div className='bg-yellow-200 p-10 w-2/6 m-auto mt-12'>
                    <p>Contact Me</p>
                    <form className='flex flex-wrap flex-col justify-center items-center'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input type="text" name="email" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="phoneNumber" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Message</label>
                            <textarea type="text" name="message" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
