import React from 'react'
import { ContactForm } from '../components/ContactForm'

export default function Contact() {
    return (
        <div>
            <div className='lg:p-12 sm:pt-12 max-sm:pt-12'>
                <div className='flex justify-center'>
                    <div className='bg-yellow-700 p-12 lg:w-3/6 sm:w-full max-sm:w-full text-center'>
                        <h2 className='font-bold text-black text-5xl'>Contact Justin</h2>
                    </div>
                </div>

                <div className='bg-yellow-200 px-6 py-24 lg:w-5/6 sm:w-full max-sm:w-full m-auto mt-12'>
                    <div class="text-center w-full mx-auto pt-12 px-4 sm:px-6 lg:pt-8 lg:px-8 z-20">
                        <h2 class="lg:text-6xl flex flex-wrap justify-center font-extrabold text-black sm:text-5xl max-sm:text-5xl">
                            Email Now
                        </h2>
                    </div>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    )
}
