import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='flex justify-around items-center h-56 text-green-700 lg:text-xl sm:text-sm font-bold'>
                <a className='hover:text-black transition duration-300 bot-footer-link' href="/">home.</a>
                <a className='hover:text-black transition duration-300 bot-footer-link' href="/about">about.</a>
                <a className='hover:text-black transition duration-300 bot-footer-link' href="/portfolio">portfolio.</a>
                <a className='hover:text-black transition duration-300 bot-footer-link' href="/resume">resume.</a>
                <a className='hover:text-black transition duration-300 bot-footer-link' href="/contact">contact.</a>
            </div>
        </div>
    )
}
